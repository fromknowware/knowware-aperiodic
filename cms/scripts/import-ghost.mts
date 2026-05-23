/**
 * Ghost → Payload CMS importer
 *
 * Reads the tokenwisdom backup at TOKENWISDOM_PATH and imports:
 *   - Tags     → Categories
 *   - Authors  → Authors
 *   - Posts    → Articles (with htmlBody for Ghost HTML content)
 *
 * Usage:
 *   TOKENWISDOM_PATH=/tmp/tokenwisdom npx tsx scripts/import-ghost.ts
 */

import { getPayload } from 'payload'
import config from '../payload.config'
import { readFileSync, existsSync } from 'fs'
import path from 'path'

const BACKUP_PATH = process.env.TOKENWISDOM_PATH || '/tmp/tokenwisdom'

if (!existsSync(BACKUP_PATH)) {
  console.error(`❌  Backup not found at ${BACKUP_PATH}`)
  console.error(`    Set TOKENWISDOM_PATH env var to your local clone of iamkhayyam/tokenwisdom`)
  process.exit(1)
}

function readJSON<T>(relPath: string): T {
  return JSON.parse(readFileSync(path.join(BACKUP_PATH, relPath), 'utf-8'))
}

interface GhostTag {
  id: string; slug: string; name: string; description: string | null; visibility: string
}
interface GhostAuthor {
  id: string; slug: string; name: string; bio: string | null; website: string | null; twitter: string | null
}
interface GhostPost {
  id: string; slug: string; title: string; html: string
  custom_excerpt: string | null; excerpt: string | null
  feature_image: string | null; published_at: string | null
  visibility: string; reading_time: number | null
  tags: { slug: string; visibility: string }[]
  authors: { slug: string }[]
}

async function main() {
  console.log('🚀  Initialising Payload...')
  const payload = await getPayload({ config })

  // ─── 1. Tags → Categories ─────────────────────────────────────────────────
  console.log('\n📂  Importing tags as categories...')
  const tags: GhostTag[] = readJSON('data/all_tags.json')
  const tagToCategory: Record<string, number | string> = {}

  for (const tag of tags) {
    if (tag.visibility !== 'public') continue
    try {
      const existing = await payload.find({
        collection: 'categories',
        where: { slug: { equals: tag.slug } },
        limit: 1,
      })
      if (existing.docs.length > 0) {
        tagToCategory[tag.slug] = existing.docs[0].id
        process.stdout.write(`  ↩  ${tag.slug}\n`)
        continue
      }
      const cat = await payload.create({
        collection: 'categories',
        data: {
          title: tag.name,
          slug: tag.slug,
          description: tag.description ?? undefined,
        },
      })
      tagToCategory[tag.slug] = cat.id
      process.stdout.write(`  ✓  ${tag.name}\n`)
    } catch (e: any) {
      console.warn(`  ✗  ${tag.slug}: ${e.message}`)
    }
  }

  // ─── 2. Authors ───────────────────────────────────────────────────────────
  console.log('\n👤  Importing authors...')
  const authors: GhostAuthor[] = readJSON('data/all_authors.json')
  const authorToPayload: Record<string, number | string> = {}

  for (const author of authors) {
    try {
      const existing = await payload.find({
        collection: 'authors',
        where: { slug: { equals: author.slug } },
        limit: 1,
      })
      if (existing.docs.length > 0) {
        authorToPayload[author.slug] = existing.docs[0].id
        process.stdout.write(`  ↩  ${author.slug}\n`)
        continue
      }
      const a = await payload.create({
        collection: 'authors',
        data: {
          name: author.name,
          slug: author.slug,
          bio: author.bio ?? undefined,
        },
      })
      authorToPayload[author.slug] = a.id
      process.stdout.write(`  ✓  ${author.name}\n`)
    } catch (e: any) {
      console.warn(`  ✗  ${author.slug}: ${e.message}`)
    }
  }

  // ─── 3. Posts → Articles ──────────────────────────────────────────────────
  console.log('\n📝  Importing posts as articles...')
  const posts: GhostPost[] = readJSON('data/all_posts.json')

  let imported = 0
  let skipped = 0

  for (const post of posts) {
    try {
      // Skip if already exists
      const existing = await payload.find({
        collection: 'articles',
        where: { slug: { equals: post.slug } },
        limit: 1,
      })
      if (existing.docs.length > 0) {
        skipped++
        process.stdout.write(`  ↩  ${post.slug}\n`)
        continue
      }

      // Primary public tag → category
      const primaryTag = post.tags?.find(t => t.visibility === 'public' && tagToCategory[t.slug])
      const categoryId = primaryTag ? tagToCategory[primaryTag.slug] : undefined

      // Primary author
      const primaryAuthor = post.authors?.[0]
      const authorId = primaryAuthor ? authorToPayload[primaryAuthor.slug] : undefined

      await payload.create({
        collection: 'articles',
        data: {
          title: post.title,
          slug: post.slug,
          type: 'newsletter',
          status: post.visibility === 'public' ? 'published' : 'draft',
          excerpt: post.custom_excerpt ?? post.excerpt ?? undefined,
          htmlBody: post.html ?? undefined,
          featureImageUrl: post.feature_image ?? undefined,
          publishedAt: post.published_at ?? undefined,
          readTime: post.reading_time ? `${post.reading_time} MIN READ` : undefined,
          ...(categoryId ? { category: categoryId } : {}),
          ...(authorId ? { author: authorId } : {}),
        },
      })

      imported++
      process.stdout.write(`  ✓  [${imported}] ${post.title}\n`)
    } catch (e: any) {
      skipped++
      console.warn(`  ✗  ${post.slug}: ${e.message}`)
    }
  }

  // ─── Summary ──────────────────────────────────────────────────────────────
  console.log(`
✅  Import complete
    Articles imported : ${imported}
    Skipped / errors  : ${skipped}
    Categories created: ${Object.keys(tagToCategory).length}
    Authors created   : ${Object.keys(authorToPayload).length}
  `)

  process.exit(0)
}

main().catch(err => {
  console.error('Fatal:', err)
  process.exit(1)
})

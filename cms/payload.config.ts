import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Articles } from './src/collections/Articles'
import { Authors } from './src/collections/Authors'
import { Categories } from './src/collections/Categories'
import { Issues } from './src/collections/Issues'
import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL,
].filter(Boolean) as string[]

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Knowware Aperiodic',
    },
  },
  collections: [Articles, Authors, Categories, Issues, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || `file:${path.resolve(dirname, './data.db')}`,
    },
  }),
  upload: {
    limits: {
      fileSize: 5_000_000,
    },
  },
  cors: allowedOrigins,
  csrf: allowedOrigins,
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
})

const CMS_URL = import.meta.env.VITE_CMS_URL || 'http://localhost:3001'

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${CMS_URL}${path}`)
  if (!res.ok) throw new Error(`CMS request failed: ${res.status} ${path}`)
  return res.json()
}

export interface CMSArticle {
  id: string
  title: string
  slug: string
  type: string
  status: string
  excerpt?: string
  body?: unknown
  publishedAt?: string
  readTime?: string
  author?: CMSAuthor | string
  category?: CMSCategory | string
  featuredImage?: CMSMedia | string
}

export interface CMSAuthor {
  id: string
  name: string
  slug: string
  bio?: string
  affiliation?: string
  avatar?: CMSMedia | string
}

export interface CMSCategory {
  id: string
  title: string
  slug: string
  description?: string
}

export interface CMSMedia {
  id: string
  filename: string
  alt: string
  url?: string
}

export interface CMSIssue {
  id: string
  title: string
  issueNumber: number
  publishedAt?: string
  description?: string
  coverImage?: CMSMedia | string
  articles?: (CMSArticle | string)[]
}

export interface PaginatedDocs<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export async function getArticles(params: {
  limit?: number
  page?: number
  categorySlug?: string
  sort?: string
} = {}): Promise<PaginatedDocs<CMSArticle>> {
  const q = new URLSearchParams()
  q.set('depth', '1')
  if (params.limit) q.set('limit', String(params.limit))
  if (params.page) q.set('page', String(params.page))
  if (params.sort) q.set('sort', params.sort)
  else q.set('sort', '-publishedAt')
  if (params.categorySlug) q.set('where[category.slug][equals]', params.categorySlug)
  return request(`/api/articles?${q}`)
}

export async function getArticle(slug: string): Promise<CMSArticle | null> {
  const data = await request<PaginatedDocs<CMSArticle>>(
    `/api/articles?where[slug][equals]=${encodeURIComponent(slug)}&depth=2&limit=1`
  )
  return data.docs[0] ?? null
}

export async function getCategories(): Promise<PaginatedDocs<CMSCategory>> {
  return request('/api/categories?limit=100&sort=title')
}

export async function getCategory(slug: string): Promise<CMSCategory | null> {
  const data = await request<PaginatedDocs<CMSCategory>>(
    `/api/categories?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`
  )
  return data.docs[0] ?? null
}

export async function getIssues(): Promise<PaginatedDocs<CMSIssue>> {
  return request('/api/issues?limit=10&sort=-issueNumber&depth=1')
}

export async function getAuthors(): Promise<PaginatedDocs<CMSAuthor>> {
  return request('/api/authors?limit=100&sort=name')
}

export function articlePath(slug: string) {
  return `/articles/${slug}`
}

export function categoryPath(slug: string) {
  return `/categories/${slug}`
}

export function authorPath(slug: string) {
  return `/authors/${slug}`
}

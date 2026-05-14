import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getCategory, getArticles, type CMSArticle, type CMSCategory, type CMSAuthor } from '../lib/api';

function ArticleCard({ article }: { article: CMSArticle }) {
  const author = article.author && typeof article.author !== 'string'
    ? (article.author as CMSAuthor)
    : null;

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group block border-b border-gray-200 pb-10 last:border-0 last:pb-0"
    >
      <div className="flex items-center space-x-2 mb-3">
        <span className="border border-gray-300 px-2 py-0.5 text-[10px] font-sans font-bold text-gray-700 uppercase tracking-widest">
          {article.type || 'Article'}
        </span>
      </div>
      <h3 className="text-2xl font-serif font-bold text-black group-hover:text-gray-600 transition-colors leading-snug mb-3">
        {article.title}
      </h3>
      {article.excerpt && (
        <p className="text-base text-gray-600 font-serif leading-relaxed mb-4">
          {article.excerpt}
        </p>
      )}
      <div className="flex items-center text-sm font-sans gap-2">
        {author && (
          <span className="font-bold text-black uppercase tracking-wide text-xs">{author.name}</span>
        )}
        {author && article.publishedAt && <span className="text-gray-300">•</span>}
        {article.publishedAt && (
          <span className="text-gray-500 text-xs">
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric', month: 'short', day: 'numeric'
            })}
          </span>
        )}
        {article.readTime && (
          <>
            <span className="text-gray-300">•</span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{article.readTime}</span>
          </>
        )}
        <span className="ml-auto flex items-center text-[10px] font-bold uppercase tracking-widest text-black group-hover:gap-1 transition-all">
          Read <ChevronRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<CMSCategory | null>(null);
  const [articles, setArticles] = useState<CMSArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);
    Promise.all([
      getCategory(slug),
      getArticles({ categorySlug: slug, limit: 20 }),
    ])
      .then(([cat, arts]) => {
        setCategory(cat);
        setArticles(arts.docs);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-serif font-bold text-black tracking-tight hover:text-gray-600 transition-colors">
            Knowware Aperiodic
          </Link>
          <Link to="/" className="flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="h-3 w-3" /> Back
          </Link>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {loading && (
          <div className="py-16 animate-pulse">
            <div className="h-3 bg-gray-200 w-48 mb-4 rounded" />
            <div className="h-12 bg-gray-200 w-64 mb-3 rounded" />
            <div className="h-4 bg-gray-200 w-96 mb-16 rounded" />
            <div className="space-y-10">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-b border-gray-200 pb-10">
                  <div className="h-7 bg-gray-200 w-3/4 mb-3 rounded" />
                  <div className="h-4 bg-gray-200 w-full mb-2 rounded" />
                  <div className="h-4 bg-gray-200 w-2/3 rounded" />
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="py-32 text-center">
            <p className="text-gray-500 font-serif text-lg mb-6">Category not found.</p>
            <Link to="/" className="text-xs font-sans font-bold uppercase tracking-widest text-black hover:text-gray-600 transition-colors">
              ← Return home
            </Link>
          </div>
        )}

        {!loading && !error && (
          <div className="py-12">
            {/* Category header */}
            <div className="border-b-4 border-black pb-8 mb-12">
              <div className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-3">
                Research Area
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-black leading-tight tracking-tight mb-4">
                {category?.title ?? slug}
              </h1>
              {category?.description && (
                <p className="text-xl font-serif text-gray-600 max-w-2xl leading-relaxed">
                  {category.description}
                </p>
              )}
            </div>

            {/* Articles */}
            {articles.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-gray-500 font-serif text-lg mb-2">No published articles yet.</p>
                <p className="text-gray-400 text-sm font-sans">
                  Add articles through the{' '}
                  <a href="http://localhost:3001/admin" target="_blank" rel="noreferrer" className="text-[#ea580c] hover:underline">
                    CMS admin
                  </a>.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 flex flex-col space-y-10">
                  {articles.map(article => (
                    <Fragment key={article.id}>
                      <ArticleCard article={article} />
                    </Fragment>
                  ))}
                </div>
                <aside className="lg:col-span-1">
                  <div className="sticky top-24 bg-gray-50 border border-gray-200 p-6">
                    <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-black mb-4 pb-3 border-b border-gray-200">
                      About This Area
                    </h3>
                    <p className="text-sm font-serif text-gray-600 leading-relaxed">
                      {category?.description || 'Explore all published research in this area.'}
                    </p>
                  </div>
                </aside>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

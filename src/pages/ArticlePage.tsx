import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getArticle, type CMSArticle, type CMSAuthor, type CMSCategory } from '../lib/api';

function ArticleSkeleton() {
  return (
    <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-16 animate-pulse">
      <div className="h-3 bg-gray-200 w-32 mb-8 rounded" />
      <div className="h-10 bg-gray-200 w-3/4 mb-4 rounded" />
      <div className="h-10 bg-gray-200 w-1/2 mb-8 rounded" />
      <div className="h-4 bg-gray-200 w-48 mb-12 rounded" />
      <div className="aspect-[16/9] bg-gray-200 mb-12 rounded" />
      <div className="space-y-3">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded" style={{ width: `${85 + Math.random() * 15}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<CMSArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);
    getArticle(slug)
      .then(setArticle)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  const author = article?.author && typeof article.author !== 'string'
    ? (article.author as CMSAuthor)
    : null;
  const category = article?.category && typeof article.category !== 'string'
    ? (article.category as CMSCategory)
    : null;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Minimal top nav */}
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

      <main>
        {loading && <ArticleSkeleton />}

        {error && (
          <div className="max-w-[860px] mx-auto px-4 py-32 text-center">
            <p className="text-gray-500 font-serif text-lg mb-6">Article not found.</p>
            <Link to="/" className="text-xs font-sans font-bold uppercase tracking-widest text-black hover:text-gray-600 transition-colors">
              ← Return home
            </Link>
          </div>
        )}

        {!loading && !error && article && (
          <>
            {/* Article header */}
            <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-12 border-b border-gray-200">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 mb-8">
                <Link to="/" className="hover:text-black transition-colors">Home</Link>
                <ChevronRight className="h-3 w-3" />
                {category ? (
                  <Link to={`/categories/${category.slug}`} className="hover:text-black transition-colors text-[#ea580c]">
                    {category.title}
                  </Link>
                ) : (
                  <span>Articles</span>
                )}
              </div>

              {/* Tags */}
              <div className="flex items-center gap-3 mb-6">
                <span className="border border-gray-300 px-2 py-1 text-[10px] font-sans font-bold text-gray-700 uppercase tracking-widest">
                  {article.type || 'Article'}
                </span>
                {category && (
                  <span className="text-[10px] font-sans font-bold text-[#ea580c] uppercase tracking-widest">
                    {category.title}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-black leading-tight tracking-tight mb-6">
                {article.title}
              </h1>

              {/* Excerpt */}
              {article.excerpt && (
                <p className="text-xl font-serif text-gray-600 leading-relaxed mb-8">
                  {article.excerpt}
                </p>
              )}

              {/* Byline */}
              <div className="flex items-center gap-4 text-sm font-sans border-t border-gray-200 pt-6">
                {author && (
                  <>
                    <div>
                      <span className="font-bold text-black uppercase tracking-wide text-xs">{author.name}</span>
                      {author.affiliation && (
                        <span className="ml-2 text-gray-400 text-xs">{author.affiliation}</span>
                      )}
                    </div>
                    <span className="text-gray-300">•</span>
                  </>
                )}
                {article.publishedAt && (
                  <span className="text-gray-500 text-xs">
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </span>
                )}
                {article.readTime && (
                  <>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{article.readTime}</span>
                  </>
                )}
              </div>
            </div>

            {/* Feature image */}
            {article.featureImageUrl && (
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-4">
                <img
                  src={article.featureImageUrl}
                  alt={article.title}
                  className="w-full max-h-[520px] object-cover"
                />
              </div>
            )}

            {/* Article body */}
            <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-12">
              {article.htmlBody ? (
                <div
                  className="ghost-content prose prose-lg prose-gray max-w-none font-serif
                    prose-headings:font-serif prose-headings:font-bold prose-headings:text-black
                    prose-p:leading-relaxed prose-p:text-gray-800
                    prose-a:text-[#ea580c] prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded prose-blockquote:border-l-[#ea580c] prose-blockquote:font-serif
                    prose-strong:text-black prose-code:text-sm"
                  dangerouslySetInnerHTML={{ __html: article.htmlBody }}
                />
              ) : article.excerpt ? (
                <div className="bg-gray-50 border border-gray-200 p-8">
                  <div className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-4">Abstract</div>
                  <p className="font-serif text-gray-800 leading-relaxed">{article.excerpt}</p>
                </div>
              ) : (
                <p className="text-gray-400 italic font-serif text-sm text-center py-16">
                  No content yet. Add it via the{' '}
                  <a href="http://localhost:3001/admin" target="_blank" rel="noreferrer" className="text-[#ea580c] hover:underline">CMS admin</a>.
                </p>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

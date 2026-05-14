import { Routes, Route } from 'react-router-dom';
import App from './App';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
      <Route path="/categories/:slug" element={<CategoryPage />} />
    </Routes>
  );
}

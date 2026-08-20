import { StoreProvider } from './context/StoreContext';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DuolingoLearningTable from './pages/DuolingoLearningTable';
import DuolingoLearningDashboard from './pages/DuolingoLearningDashboard';
import DuolingoLandingCommunitySocialLearningV3 from './pages/DuolingoLandingCommunitySocialLearningV3';
import FeatureHighlightsKidsLearningPlatform from './pages/FeatureHighlightsKidsLearningPlatform';
import ToastAlertDesignSystemShowcase from './pages/ToastAlertDesignSystemShowcase';
import BadgeDesignSystemShowcase from './pages/BadgeDesignSystemShowcase';
import Page404ErrorCosmicDetour from './pages/Page404ErrorCosmicDetour';
import Page404ErrorMysteryPuzzle from './pages/Page404ErrorMysteryPuzzle';
import TableDesignSystemShowcase from './pages/TableDesignSystemShowcase';
import InputDesignSystemShowcase from './pages/InputDesignSystemShowcase';
import CardDesignSystemShowcase from './pages/CardDesignSystemShowcase';
import TabDesignSystemShowcase from './pages/TabDesignSystemShowcase';
import LoaderSkeletonDesignSystemShowcase from './pages/LoaderSkeletonDesignSystemShowcase';
import ButtonDesignSystemShowcase from './pages/ButtonDesignSystemShowcase';
import ShowcasePlayfulBento from './pages/ShowcasePlayfulBento';
import Page404ErrorJungleTrail from './pages/Page404ErrorJungleTrail';

export default function App() {
  return (
    <BrowserRouter>
    <StoreProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">pastel-e-learning</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Learning Table</Link>
            <Link to="/duolingo-learning-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Learning Dashboard</Link>
            <Link to="/duolingo-landing-community-social-learning-v3" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Landing Community Social Learning V3</Link>
            <Link to="/feature-highlights-kids-learning-platform" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Feature Highlights Kids Learning Platform</Link>
            <Link to="/toast-alert-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Toast Alert Design System Showcase</Link>
            <Link to="/badge-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Badge Design System Showcase</Link>
            <Link to="/404-error-cosmic-detour" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">404 Error Cosmic Detour</Link>
            <Link to="/404-error-mystery-puzzle" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">404 Error Mystery Puzzle</Link>
            <Link to="/table-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Table Design System Showcase</Link>
            <Link to="/input-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Input Design System Showcase</Link>
            <Link to="/card-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Card Design System Showcase</Link>
            <Link to="/tab-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Tab Design System Showcase</Link>
            <Link to="/loader-skeleton-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Loader Skeleton Design System Showcase</Link>
            <Link to="/button-design-system-showcase" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Button Design System Showcase</Link>
            <Link to="/showcase-playful-bento" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Showcase Playful Bento</Link>
            <Link to="/404-error-jungle-trail" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">404 Error Jungle Trail</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<DuolingoLearningTable />} />
          <Route path="/duolingo-learning-dashboard" element={<DuolingoLearningDashboard />} />
          <Route path="/duolingo-landing-community-social-learning-v3" element={<DuolingoLandingCommunitySocialLearningV3 />} />
          <Route path="/feature-highlights-kids-learning-platform" element={<FeatureHighlightsKidsLearningPlatform />} />
          <Route path="/toast-alert-design-system-showcase" element={<ToastAlertDesignSystemShowcase />} />
          <Route path="/badge-design-system-showcase" element={<BadgeDesignSystemShowcase />} />
          <Route path="/404-error-cosmic-detour" element={<Page404ErrorCosmicDetour />} />
          <Route path="/404-error-mystery-puzzle" element={<Page404ErrorMysteryPuzzle />} />
          <Route path="/table-design-system-showcase" element={<TableDesignSystemShowcase />} />
          <Route path="/input-design-system-showcase" element={<InputDesignSystemShowcase />} />
          <Route path="/card-design-system-showcase" element={<CardDesignSystemShowcase />} />
          <Route path="/tab-design-system-showcase" element={<TabDesignSystemShowcase />} />
          <Route path="/loader-skeleton-design-system-showcase" element={<LoaderSkeletonDesignSystemShowcase />} />
          <Route path="/button-design-system-showcase" element={<ButtonDesignSystemShowcase />} />
          <Route path="/showcase-playful-bento" element={<ShowcasePlayfulBento />} />
          <Route path="/404-error-jungle-trail" element={<Page404ErrorJungleTrail />} />
          <Route path="*" element={<DuolingoLearningTable />} />
          </Routes>
        </main>
      </div>
        </StoreProvider>
</BrowserRouter>
  );
}

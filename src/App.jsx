import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeatureHighlightsKidsLearningPlatform from './pages/FeatureHighlightsKidsLearningPlatform';
import ToastAlertDesignSystemShowcase from './pages/ToastAlertDesignSystemShowcase';
import BadgeDesignSystemShowcase from './pages/BadgeDesignSystemShowcase';
import Screen404ErrorCosmicDetour from './pages/Screen404ErrorCosmicDetour';
import Screen404ErrorMysteryPuzzle from './pages/Screen404ErrorMysteryPuzzle';
import TableDesignSystemShowcase from './pages/TableDesignSystemShowcase';
import InputDesignSystemShowcase from './pages/InputDesignSystemShowcase';
import CardDesignSystemShowcase from './pages/CardDesignSystemShowcase';
import TabDesignSystemShowcase from './pages/TabDesignSystemShowcase';
import LoaderSkeletonDesignSystemShowcase from './pages/LoaderSkeletonDesignSystemShowcase';
import ButtonDesignSystemShowcase from './pages/ButtonDesignSystemShowcase';
import ShowcasePlayfulBento from './pages/ShowcasePlayfulBento';
import Screen404ErrorJungleTrail from './pages/Screen404ErrorJungleTrail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FeatureHighlightsKidsLearningPlatform />} />
<Route path='/feature-highlights-kids-learning-platform' element={<FeatureHighlightsKidsLearningPlatform />} />
<Route path='/toast-alert-design-system-showcase' element={<ToastAlertDesignSystemShowcase />} />
<Route path='/badge-design-system-showcase' element={<BadgeDesignSystemShowcase />} />
<Route path='/404-error-cosmic-detour' element={<Screen404ErrorCosmicDetour />} />
<Route path='/404-error-mystery-puzzle' element={<Screen404ErrorMysteryPuzzle />} />
<Route path='/table-design-system-showcase' element={<TableDesignSystemShowcase />} />
<Route path='/input-design-system-showcase' element={<InputDesignSystemShowcase />} />
<Route path='/card-design-system-showcase' element={<CardDesignSystemShowcase />} />
<Route path='/tab-design-system-showcase' element={<TabDesignSystemShowcase />} />
<Route path='/loader-skeleton-design-system-showcase' element={<LoaderSkeletonDesignSystemShowcase />} />
<Route path='/button-design-system-showcase' element={<ButtonDesignSystemShowcase />} />
<Route path='/showcase-playful-bento' element={<ShowcasePlayfulBento />} />
<Route path='/404-error-jungle-trail' element={<Screen404ErrorJungleTrail />} />
        <Route path="*" element={<FeatureHighlightsKidsLearningPlatform />} />
      </Routes>
    </BrowserRouter>
  );
}

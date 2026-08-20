import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import puzzleIllustration from '../assets/illustrations/404-mystery-puzzle.svg';
import jungleIllustration from '../assets/illustrations/404-jungle-trail.svg';
import cosmicIllustration from '../assets/illustrations/404-cosmic-detour.svg';

const illustrations = [
  { src: puzzleIllustration, alt: 'Missing puzzle piece graphic' },
  { src: jungleIllustration, alt: 'Jungle trail with missing signpost' },
  { src: cosmicIllustration, alt: 'Cosmic path with missing star' }
];

export default function NotFound() {
  const [randomIllustration, setRandomIllustration] = useState(illustrations[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * illustrations.length);
    setRandomIllustration(illustrations[randomIndex]);
  }, []);

  return (
    <main className="flex-grow flex items-center justify-center p-margin relative overflow-hidden bg-dot-grid bg-dots">
      <div className="w-full max-w-5xl bg-surface rounded-xl border-2 border-surface-container-highest flex flex-col md:flex-row shadow-none overflow-hidden relative z-10">
        <div className="md:w-1/2 bg-primary-container p-cell-padding flex items-center justify-center relative overflow-hidden min-h-[300px] border-b-2 md:border-b-0 md:border-r-2 border-surface-container-highest">
          <div className="absolute inset-0 bg-concentric-pattern opacity-20 pointer-events-none"></div>
          <img
            alt={randomIllustration.alt}
            className="relative z-10 w-3/4 max-w-[300px] h-auto object-cover rounded-lg border-2 border-primary"
            src={randomIllustration.src}
          />
        </div>
        <div className="md:w-1/2 p-margin flex flex-col justify-center bg-surface relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container rounded-bl-full opacity-50 pointer-events-none"></div>
          <div className="mb-stack-gap">
            <h1 className="font-headline-xl text-headline-xl text-primary mb-2">404</h1>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Something is missing here!</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Let's solve the puzzle and find your way back.</p>
          </div>
          <div className="w-full relative mt-stack-gap mb-margin">
            <div className="relative flex items-center w-full">
              <span className="material-symbols-outlined absolute left-4 text-primary font-bold z-10" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
              <input
                className="w-full bg-surface-bright border-2 border-surface-variant rounded-full py-4 pl-12 pr-6 font-body-default text-body-default text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-colors hover:border-outline-variant"
                placeholder="Search for lessons, games, or topics..."
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-base">
            <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Try looking for:</span>
            <div className="flex flex-wrap gap-base">
              <button className="bg-surface-container text-on-surface-variant rounded-full px-4 py-2 border-2 border-transparent font-label-bold text-label-bold hover:bg-primary-container hover:text-on-primary-container hover:border-primary transition-all duration-200">
                Trending Lessons
              </button>
              <button className="bg-surface-container text-on-surface-variant rounded-full px-4 py-2 border-2 border-transparent font-label-bold text-label-bold hover:bg-primary-container hover:text-on-primary-container hover:border-primary transition-all duration-200">
                Top Games
              </button>
              <Link to="/" className="bg-surface-container text-on-surface-variant rounded-full px-4 py-2 border-2 border-transparent font-label-bold text-label-bold hover:bg-primary-container hover:text-on-primary-container hover:border-primary transition-all duration-200 flex items-center">
                <span className="material-symbols-outlined align-middle mr-1 text-[16px]">home</span>
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

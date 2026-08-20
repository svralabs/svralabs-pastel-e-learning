import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function 404ErrorMysteryPuzzle() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      


<main className="flex-grow flex items-center justify-center p-margin relative overflow-hidden bg-dot-grid bg-dots">

<div className="w-full max-w-5xl bg-surface rounded-xl border-2 border-surface-container-highest flex flex-col md:flex-row shadow-none overflow-hidden relative z-10">

<div className="md:w-1/2 bg-primary-container p-cell-padding flex items-center justify-center relative overflow-hidden min-h-[300px] border-b-2 md:border-b-0 md:border-r-2 border-surface-container-highest">

<div className="absolute inset-0 bg-concentric-pattern opacity-20 pointer-events-none"></div>

<img alt="Missing puzzle piece graphic" className="relative z-10 w-3/4 max-w-[300px] h-auto object-cover rounded-lg border-2 border-primary" data-alt="A striking, flat-vector style illustration of a brightly colored jigsaw puzzle set against a deep vibrant purple background. One key piece in the exact center is distinctly missing, leaving a crisp white glowing silhouette. The visual style uses high saturation, high contrast, and perfectly clean geometric curves with absolutely no 3D drop shadows, reflecting a modern, pillowy, and educational design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHUpEdPVBf-aF2Fcp3XdcHwhBg0pvrz8ugOwT4gxiebeeMdHrazqF-NftyN9BqaEq9P2-TU-tLiDLX1MKjwqmCvKFO6a-qTR5S6XNZDFsv9qmDZV7Tqznf7PShba1LRJLb1iU3yZPuPwChNdhC0cJD7RZsmDx5UOyDxADQqmlZXm7tu0iOLNiWzDckgKlx0-tQ0ILKLClDW6ToSHu7AMSwU51cdxQRevsXUKkBDAxUWjsKeRn1OL0o0wLyQviDM_xyZRpXMtWcCVC"/>
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
<span className="material-symbols-outlined absolute left-4 text-primary font-bold z-10" style={{fontVariationSettings: '\'FILL\' 0'}}>search</span>
<input className="w-full bg-surface-bright border-2 border-surface-variant rounded-full py-4 pl-12 pr-6 font-body-default text-body-default text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-colors hover:border-outline-variant" placeholder="Search for lessons, games, or topics..." type="text"/>
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
<button className="bg-surface-container text-on-surface-variant rounded-full px-4 py-2 border-2 border-transparent font-label-bold text-label-bold hover:bg-primary-container hover:text-on-primary-container hover:border-primary transition-all duration-200">
<span className="material-symbols-outlined align-middle mr-1 text-[16px]">home</span>
                            Return Home
                        </button>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-surface-container-low dark:bg-inverse-surface w-full mt-auto flex flex-col md:flex-row justify-between items-center px-margin py-stack-gap border-t-2 border-surface-container-highest dark:border-outline">
<div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface mb-4 md:mb-0">
            © 2024 KidsPlay Learning. Built with Pillowy Design.
        </div>
<div className="flex flex-wrap gap-gutter justify-center font-body-default text-body-default">
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Github</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Documentation</a>
</div>
</footer>

    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowcasePlayfulBento() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="hidden md:flex bg-background flex justify-between items-center w-full px-margin py-base max-w-full sticky top-0 z-50">
<div className="font-headline-lg text-headline-lg font-black text-primary">
            KidsPlay Learning
        </div>
<div className="flex gap-8 items-center">
<a className="text-primary font-bold border-b-2 border-primary pb-1 font-body-lg text-body-lg" href="#">Explore</a>
<a className="text-on-surface-variant font-body-lg text-body-lg hover:text-primary transition-colors duration-200" href="#">Quizzes</a>
<a className="text-on-surface-variant font-body-lg text-body-lg hover:text-primary transition-colors duration-200" href="#">Activities</a>
<a className="text-on-surface-variant font-body-lg text-body-lg hover:text-primary transition-colors duration-200" href="#">My Progress</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-6 py-2 rounded-full hover:scale-95 transition-transform duration-150 border-2 border-transparent">
                Parent Portal
            </button>
<button className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-surface-variant">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-surface-variant">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
</nav>

<main className="max-w-7xl mx-auto px-margin pt-8 md:pt-12">
<header className="mb-gutter text-center md:text-left">
<h1 className="font-headline-xl text-headline-xl text-primary mb-2">Pick Your Adventure</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Where do you want to go today?</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[250px]">

<div className="md:col-span-8 md:row-span-2 rounded-xl bg-primary-container text-on-primary p-cell-padding relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300">
<div className="absolute inset-0 pattern-circles opacity-50"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="bg-primary-fixed text-primary px-4 py-2 rounded-full font-label-bold text-label-bold inline-flex items-center gap-2 border-2 border-transparent">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>calculate</span>
                        Math Magic
                    </div>
<button className="bg-on-primary text-primary-container w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>play_arrow</span>
</button>
</div>
<div className="relative z-10 w-full md:w-2/3">
<h2 className="font-headline-lg text-headline-lg mb-4">Numbers &amp; Shapes!</h2>
<p className="font-body-lg text-body-lg mb-6 opacity-90">Count stars, build with blocks, and solve fun puzzles to unlock your next badge.</p>
<div className="flex gap-2">
<span className="bg-primary/50 text-on-primary px-3 py-1 rounded-full text-sm font-label-bold">Level 2</span>
<span className="bg-primary/50 text-on-primary px-3 py-1 rounded-full text-sm font-label-bold">Geometry</span>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-30 blur-2xl"></div>
</div>

<div className="md:col-span-4 md:row-span-1 rounded-xl bg-secondary-container text-on-secondary-container p-cell-padding relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300">
<div className="absolute inset-0 pattern-dots from-secondary-fixed/50 to-transparent"></div>
<div className="relative z-10 flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-4xl" style={{"fontVariationSettings": "FILL 1"}}>science</span>
<span className="bg-surface/50 px-3 py-1 rounded-full text-xs font-label-bold uppercase tracking-wider">New</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-2">Space Explorer</h3>
<p className="font-body-default text-body-default opacity-80">Journey to Mars and back.</p>
</div>
</div>

<div className="md:col-span-4 md:row-span-1 rounded-xl bg-primary-fixed text-on-primary-fixed p-cell-padding relative overflow-hidden flex flex-col justify-between border-2 border-primary-fixed-dim group hover:scale-[1.01] transition-transform duration-300">
<div className="absolute inset-0 pattern-circles-amber"></div>
<div className="relative z-10 flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-4xl text-primary" style={{"fontVariationSettings": "FILL 1"}}>palette</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-2 text-primary">Color Splash</h3>
<p className="font-body-default text-body-default opacity-80 text-on-surface-variant">Mix paints and draw.</p>
</div>
</div>

<div className="md:col-span-6 md:row-span-1 rounded-xl bg-surface-container-high text-on-surface p-cell-padding relative overflow-hidden flex flex-row items-center justify-between border-2 border-outline-variant group hover:scale-[1.01] transition-transform duration-300">
<div className="w-1/2 pr-4 relative z-10">
<div className="bg-surface text-primary px-3 py-1 rounded-full font-label-bold text-label-bold inline-block mb-4 border border-outline-variant">
                        Story Time
                    </div>
<h3 className="font-headline-md text-headline-md mb-2">Word Wizards</h3>
<p className="font-body-default text-body-default text-on-surface-variant">Read stories and learn new words with interactive tales.</p>
</div>
<div className="w-1/2 relative h-full flex items-center justify-center">
<div className="w-32 h-32 bg-secondary-container rounded-full flex items-center justify-center pattern-dots from-secondary-fixed/40 to-transparent">
<span className="material-symbols-outlined text-5xl text-on-secondary-container" style={{"fontVariationSettings": "FILL 1"}}>menu_book</span>
</div>
</div>
</div>

<div className="md:col-span-6 md:row-span-1 rounded-xl bg-surface-container-lowest text-on-surface p-cell-padding border-2 border-surface-dim relative overflow-hidden flex flex-row items-center justify-between group hover:border-primary transition-colors duration-300">
<div className="relative z-10 w-full flex items-center gap-6">
<div className="w-20 h-20 bg-error-container text-on-error-container rounded-[2rem] flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-4xl" style={{"fontVariationSettings": "FILL 1"}}>emoji_events</span>
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-headline-md mb-1">Daily Challenge</h3>
<div className="w-full bg-surface-variant rounded-full h-4 mt-3 overflow-hidden border-2 border-surface-variant">
<div className="bg-primary-container h-full rounded-full w-2/3 flex items-center justify-end px-2">
<span className="text-[10px] font-bold text-white">2/3</span>
</div>
</div>
</div>
<button className="bg-surface-variant text-on-surface-variant hover:bg-primary-container hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center px-gutter py-4 bg-surface-container-highest z-50 rounded-t-lg border-t-2 border-transparent">
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-dim rounded-full transition-colors">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-label-bold text-label-bold">Home</span>
</button>
<button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-[2rem] px-6 py-2 scale-90 transition-all duration-300 ease-out border-2 border-transparent">
<span className="material-symbols-outlined mb-1" style={{"fontVariationSettings": "FILL 1"}}>school</span>
<span className="font-label-bold text-label-bold">Learn</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-dim rounded-full transition-colors">
<span className="material-symbols-outlined mb-1">videogame_asset</span>
<span className="font-label-bold text-label-bold">Play</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-2 hover:bg-surface-dim rounded-full transition-colors">
<span className="material-symbols-outlined mb-1">face</span>
<span className="font-label-bold text-label-bold">Profile</span>
</button>
</nav>

    </div>
  );
}

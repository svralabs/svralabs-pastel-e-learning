import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FeatureHighlightsKidsLearningPlatform() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav aria-hidden="true" className="hidden"></nav>
<main className="w-full px-margin py-16 max-w-7xl mx-auto flex flex-col gap-12">

<header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
<div className="max-w-2xl">
<h2 className="text-display font-black text-on-surface">
                    Our interactive <span className="font-calligraphic text-primary-container font-normal">features</span>
</h2>
</div>
<div className="flex flex-wrap gap-3">
<span className="bg-surface-light text-primary-container font-label-bold px-6 py-3 rounded-full hover:scale-105 transition-transform cursor-default">#funny</span>
<span className="bg-secondary-container text-on-secondary-container font-label-bold px-6 py-3 rounded-full hover:scale-105 transition-transform cursor-default">#enjoy</span>
<span className="bg-primary-container text-on-primary font-label-bold px-6 py-3 rounded-full hover:scale-105 transition-transform cursor-default">#happy</span>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">

<article className="bg-surface-light rounded-[32px] p-cell-padding relative overflow-hidden flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 pattern-concentric opacity-50 pointer-events-none"></div>
<div className="scalloped w-16 h-16 flex items-center justify-center shadow-sm z-10 text-primary-container">
<span className="material-symbols-outlined text-[32px]">quiz</span>
</div>
<div className="mt-auto pt-16 z-10">
<h3 className="font-headline-lg text-on-surface">
                        Fun <span className="font-calligraphic text-primary-container font-normal text-[40px]">Quiz</span>
</h3>
<p className="font-body-default text-on-surface-variant mt-2 max-w-[250px]">
                        Test your understanding with a short but fun quizzes!
                    </p>
</div>
</article>

<article className="bg-bento-primary rounded-[32px] p-cell-padding relative overflow-hidden flex flex-col gap-6 text-on-primary group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 pattern-blobs pointer-events-none"></div>
<div className="scalloped w-16 h-16 flex items-center justify-center shadow-sm z-10 text-primary-container">
<span className="material-symbols-outlined text-[32px]">lightbulb</span>
</div>
<div className="mt-auto pt-16 z-10">
<h3 className="font-headline-lg text-on-primary">
                        Creative <span className="font-calligraphic text-secondary-fixed font-normal text-[40px]">Activities</span>
</h3>
<p className="font-body-default text-primary-fixed mt-2 max-w-[250px]">
                        Discover enjoyable activities such as coloring, crafting, and science.
                    </p>
</div>
</article>

<article className="bg-bento-secondary rounded-[32px] p-cell-padding relative overflow-hidden flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 pattern-dots pointer-events-none"></div>
<div className="scalloped w-16 h-16 flex items-center justify-center shadow-sm z-10 text-tertiary-container">
<span className="material-symbols-outlined text-[32px]">sports_esports</span>
</div>
<div className="mt-auto pt-16 z-10">
<h3 className="font-headline-lg text-on-surface">
                        Learn with <span className="font-calligraphic text-tertiary-container font-normal text-[40px]">Games</span>
</h3>
<p className="font-body-default text-on-surface-variant mt-2 max-w-[250px]">
                        Learn something new while your kids playing games!
                    </p>
</div>
</article>
</div>
</main>

    </div>
  );
}

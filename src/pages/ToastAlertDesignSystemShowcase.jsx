import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ToastAlertDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="bg-background w-full top-0 sticky bg-surface flex justify-between items-center px-margin py-base z-50">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md text-primary font-extrabold tracking-tight">KidsPlay Design</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="font-body-default text-body-default text-primary border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-200" href="#">Components</a>
<a className="font-body-default text-body-default text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Patterns</a>
<a className="font-body-default text-body-default text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Guidelines</a>
<a className="font-body-default text-body-default text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Tokens</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-colors duration-200">Get Started</button>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors duration-200" data-icon="dark_mode">dark_mode</span>
</div>
</nav>

<main className="flex-1 w-full max-w-7xl mx-auto px-margin py-margin flex flex-col gap-gutter">

<header className="bg-surface-container-low rounded-xl p-cell-padding flex flex-col md:flex-row gap-gutter items-start md:items-center relative overflow-hidden border-2 border-surface-variant" style={{"--pattern-color": "#e6e0ee"}}>
<div className="absolute inset-0 pattern-dots opacity-50 z-0"></div>
<div className="relative z-10 flex-1">
<h1 className="font-headline-xl text-headline-xl text-primary mb-4">Toast Alert System</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Non-intrusive, transient feedback designed for learning environments. Toasts provide immediate status updates without interrupting the user's primary workflow, ensuring a playful yet informative experience.
                </p>
</div>
<div className="relative z-10 hidden md:block">
<div className="w-32 h-32 bg-primary-fixed rounded-full flex items-center justify-center border-4 border-surface">
<span className="material-symbols-outlined text-primary text-6xl" data-icon="notifications_active">notifications_active</span>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<section className="md:col-span-8 bg-surface-container rounded-xl p-cell-padding border-2 border-surface-variant relative overflow-hidden" style={{"--pattern-color": "#cac3d8"}}>
<div className="absolute top-0 right-0 w-64 h-64 pattern-concentric opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
<div className="relative z-10">
<h2 className="font-headline-md text-headline-md text-on-background mb-stack-gap">Anatomy of a Toast</h2>
<div className="mt-8 flex flex-col items-center p-8 bg-surface rounded-lg border-2 border-surface-dim">

<div className="relative">

<div className="bg-surface-container-highest rounded-full px-6 py-4 flex items-center gap-4 shadow-sm border-2 border-outline-variant min-w-[300px]">
<span className="material-symbols-outlined text-primary" data-icon="info">info</span>
<span className="font-body-default text-body-default text-on-surface flex-1">Toast message text goes here.</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors" data-icon="close">close</span>
</div>


<div className="absolute -left-12 -top-12 flex flex-col items-center">
<span className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-3 py-1 rounded-full text-xs">Icon</span>
<div className="w-px h-10 bg-primary-container mt-1"></div>
</div>

<div className="absolute left-1/2 -top-12 -translate-x-1/2 flex flex-col items-center">
<span className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-3 py-1 rounded-full text-xs">Message Text</span>
<div className="w-px h-10 bg-primary-container mt-1"></div>
</div>

<div className="absolute -right-12 -bottom-12 flex flex-col items-center">
<div className="w-px h-10 bg-primary-container mb-1"></div>
<span className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-3 py-1 rounded-full text-xs">Dismiss Action</span>
</div>
</div>
</div>
</div>
</section>

<section className="md:col-span-4 bg-primary-fixed-dim rounded-xl p-cell-padding relative overflow-hidden border-2 border-primary-fixed">
<h2 className="font-headline-md text-headline-md text-on-primary-fixed mb-stack-gap">Placement</h2>
<p className="font-body-default text-body-default text-on-primary-fixed-variant mb-6">Default positioning is Bottom-Center to remain near focal interaction points, but Top-Right is available for system-level alerts.</p>
<div className="bg-surface w-full h-48 rounded-lg border-2 border-primary-fixed relative overflow-hidden shadow-inner">

<div className="absolute top-2 right-2 bg-secondary-container text-on-secondary-container px-3 py-1.5 rounded-full flex items-center gap-2 border-2 border-secondary-fixed text-xs font-label-bold">
<span className="material-symbols-outlined text-sm" data-icon="notifications">notifications</span> System Alert
                    </div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-2 rounded-full flex items-center gap-2 border-2 border-primary-fixed shadow-sm">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span> Action Complete
                    </div>
</div>
</section>

<section className="md:col-span-12 bg-surface-container-low rounded-xl p-cell-padding border-2 border-surface-variant relative overflow-hidden">
<h2 className="font-headline-md text-headline-md text-on-background mb-stack-gap">Functional Variants</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

<div className="bg-surface rounded-lg p-6 border-2 border-surface-dim flex flex-col gap-4">
<span className="bg-surface-variant text-on-surface-variant font-label-bold text-label-bold px-4 py-1.5 rounded-full w-fit">Success</span>
<div className="bg-[#dcfce7] text-[#166534] rounded-full px-6 py-4 flex items-center gap-4 border-2 border-[#bbf7d0]">
<span className="material-symbols-outlined text-[#15803d]" data-icon="check_circle">check_circle</span>
<span className="font-body-default text-body-default flex-1 font-bold">Mission Completed!</span>
<span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-opacity" data-icon="close">close</span>
</div>
<p className="font-body-default text-body-default text-on-surface-variant mt-2 text-sm">Used to confirm a positive action or milestone reached.</p>
</div>

<div className="bg-surface rounded-lg p-6 border-2 border-surface-dim flex flex-col gap-4">
<span className="bg-surface-variant text-on-surface-variant font-label-bold text-label-bold px-4 py-1.5 rounded-full w-fit">Warning</span>
<div className="bg-secondary-container text-on-secondary-container rounded-full px-6 py-4 flex items-center gap-4 border-2 border-secondary-fixed">
<span className="material-symbols-outlined text-secondary" data-icon="warning">warning</span>
<span className="font-body-default text-body-default flex-1 font-bold">Almost there! Keep going.</span>
<span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-opacity" data-icon="close">close</span>
</div>
<p className="font-body-default text-body-default text-on-surface-variant mt-2 text-sm">Alerts user of potential issues or incomplete states.</p>
</div>

<div className="bg-surface rounded-lg p-6 border-2 border-surface-dim flex flex-col gap-4">
<span className="bg-surface-variant text-on-surface-variant font-label-bold text-label-bold px-4 py-1.5 rounded-full w-fit">Error</span>
<div className="bg-error-container text-on-error-container rounded-full px-6 py-4 flex items-center gap-4 border-2 border-[#ffb4ab]">
<span className="material-symbols-outlined text-error" data-icon="error">error</span>
<span className="font-body-default text-body-default flex-1 font-bold">Oops! Something went wrong.</span>
<span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-opacity" data-icon="close">close</span>
</div>
<p className="font-body-default text-body-default text-on-surface-variant mt-2 text-sm">Communicates failure or invalid actions clearly.</p>
</div>

<div className="bg-surface rounded-lg p-6 border-2 border-surface-dim flex flex-col gap-4">
<span className="bg-surface-variant text-on-surface-variant font-label-bold text-label-bold px-4 py-1.5 rounded-full w-fit">Info</span>
<div className="bg-primary-container text-on-primary-container rounded-full px-6 py-4 flex items-center gap-4 border-2 border-primary-fixed">
<span className="material-symbols-outlined text-primary-fixed-dim" data-icon="info">info</span>
<span className="font-body-default text-body-default flex-1 font-bold">New activities available!</span>
<span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-opacity" data-icon="close">close</span>
</div>
<p className="font-body-default text-body-default text-on-surface-variant mt-2 text-sm">Neutral information updates or system news.</p>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-surface-container-highest w-full py-margin px-margin mt-auto flex flex-col md:flex-row justify-between items-center gap-stack-gap">
<div className="font-headline-md text-headline-md text-on-surface font-extrabold">
            KidsPlay
        </div>
<div className="font-body-default text-body-default text-on-surface-variant">
            © 2024 KidsPlay Learning System
        </div>
<div className="flex gap-6">
<a className="font-label-bold text-label-bold text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Github</a>
<a className="font-label-bold text-label-bold text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Figma</a>
<a className="font-label-bold text-label-bold text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80" href="#">Support</a>
</div>
</footer>

    </div>
  );
}

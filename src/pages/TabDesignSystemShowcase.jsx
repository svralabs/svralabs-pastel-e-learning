import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TabDesignSystemShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="bg-surface dark:bg-on-background w-full top-0 sticky z-50">
<div className="flex justify-between items-center px-margin py-4 w-full max-w-7xl mx-auto">
<div className="font-headline-md text-headline-md font-extrabold text-primary dark:text-primary-fixed">KidsPlay Design</div>
<nav className="hidden md:flex space-x-8">
<a className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-body-default text-body-default md:font-headline-md md:text-headline-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:scale-90 transition-transform duration-200" href="#">Components</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-default text-body-default md:font-headline-md md:text-headline-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:scale-90 transition-transform duration-200" href="#">Patterns</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-default text-body-default md:font-headline-md md:text-headline-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:scale-90 transition-transform duration-200" href="#">Guidelines</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-default text-body-default md:font-headline-md md:text-headline-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:scale-90 transition-transform duration-200" href="#">Tokens</a>
</nav>
<button className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-colors scale-95 active:scale-90 transition-transform duration-200">Sign Up</button>
</div>
</header>
<main className="flex-grow w-full max-w-7xl mx-auto px-margin py-margin flex flex-col gap-gutter">

<section className="bg-surface-container rounded-xl p-cell-padding relative overflow-hidden flex flex-col md:flex-row items-center gap-gutter min-h-[300px]">
<div className="absolute inset-0 dot-grid opacity-50 z-0"></div>
<div className="absolute top-0 right-0 w-64 h-64 concentric-circles opacity-40 z-0"></div>
<div className="relative z-10 flex-1">
<h1 className="font-headline-xl text-headline-xl text-primary mb-stack-gap">Tab System</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Our tab system embraces the "pillowy" aesthetic, turning traditional navigation into an engaging, tactile experience. Utilizing exaggerated border radii, vibrant primary purples, and high-contrast interactions, these tabs invite users to explore content playfully.
                </p>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<section className="md:col-span-12 bg-surface-container-lowest rounded-xl p-cell-padding border-2 border-surface-container-highest">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-gap">Basic Tabs</h2>
<div className="border-b-2 border-surface-variant flex gap-8">
<button className="pb-2 border-b-4 border-primary text-primary font-headline-md text-headline-md px-2">Overview</button>
<button className="pb-2 border-b-4 border-transparent text-on-surface-variant font-headline-md text-headline-md px-2 hover:text-primary transition-colors">Specifications</button>
<button className="pb-2 border-b-4 border-transparent text-on-surface-variant font-headline-md text-headline-md px-2 hover:text-primary transition-colors">Accessibility</button>
</div>
</section>

<section className="md:col-span-6 bg-surface-container-low rounded-xl p-cell-padding">
<h2 className="font-headline-md text-headline-md text-on-surface mb-stack-gap">Icon Tabs</h2>
<div className="flex gap-4 p-2 bg-white rounded-full inline-flex border-2 border-surface-container-highest">
<button className="flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-full font-label-bold text-label-bold">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>toys</span>
                        Play
                    </button>
<button className="flex items-center gap-2 px-6 py-3 text-on-surface-variant hover:bg-surface-variant rounded-full font-label-bold text-label-bold transition-colors">
<span className="material-symbols-outlined">menu_book</span>
                        Learn
                    </button>
<button className="flex items-center gap-2 px-6 py-3 text-on-surface-variant hover:bg-surface-variant rounded-full font-label-bold text-label-bold transition-colors">
<span className="material-symbols-outlined">palette</span>
                        Create
                    </button>
</div>
</section>

<section className="md:col-span-6 bg-secondary-fixed rounded-xl p-cell-padding relative overflow-hidden">
<div className="absolute inset-0 dot-grid opacity-30"></div>
<h2 className="font-headline-md text-headline-md text-on-secondary-fixed mb-stack-gap relative z-10">Segmented Control</h2>
<div className="relative z-10 bg-white p-1 rounded-full inline-flex w-full max-w-sm shadow-sm border-2 border-transparent">
<button className="flex-1 py-3 bg-primary text-on-primary rounded-full font-label-bold text-label-bold text-center">Day</button>
<button className="flex-1 py-3 text-on-surface-variant hover:bg-surface-variant rounded-full font-label-bold text-label-bold text-center transition-colors">Week</button>
<button className="flex-1 py-3 text-on-surface-variant hover:bg-surface-variant rounded-full font-label-bold text-label-bold text-center transition-colors">Month</button>
</div>
</section>

<section className="md:col-span-12 bg-surface-container-lowest rounded-xl border-2 border-surface-container-highest overflow-hidden flex flex-col md:flex-row min-h-[400px]">

<div className="w-full md:w-64 bg-surface-container p-cell-padding border-b-2 md:border-b-0 md:border-r-2 border-surface-variant flex flex-col gap-2">
<h2 className="font-headline-md text-headline-md text-on-surface mb-4">Settings</h2>
<button className="flex items-center gap-3 w-full p-4 bg-primary text-on-primary rounded-lg font-label-bold text-label-bold text-left">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "FILL 1"}}>person</span>
                        Profile
                    </button>
<button className="flex items-center gap-3 w-full p-4 text-on-surface-variant hover:bg-surface-variant rounded-lg font-label-bold text-label-bold text-left transition-colors">
<span className="material-symbols-outlined">notifications</span>
                        Notifications
                    </button>
<button className="flex items-center gap-3 w-full p-4 text-on-surface-variant hover:bg-surface-variant rounded-lg font-label-bold text-label-bold text-left transition-colors">
<span className="material-symbols-outlined">security</span>
                        Security
                    </button>
</div>

<div className="flex-1 p-margin relative">
<div className="absolute top-0 right-0 w-32 h-32 concentric-circles opacity-20 -m-8 pointer-events-none"></div>
<div className="max-w-2xl">
<h3 className="font-headline-lg text-headline-lg text-primary mb-6">Profile Information</h3>
<div className="space-y-6">
<div className="flex gap-4 items-center">
<div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container font-headline-lg text-headline-lg">JD</div>
<div>
<button className="px-4 py-2 border-2 border-primary text-primary rounded-full font-label-bold text-label-bold hover:bg-primary-container transition-colors">Change Avatar</button>
</div>
</div>
<div>
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-2">Display Name</label>
<input className="w-full p-4 rounded-full border-2 border-surface-variant focus:border-primary focus:outline-none bg-white font-body-default text-body-default text-on-surface" type="text" value="Jane Doe"/>
</div>
<div>
<label className="block font-label-bold text-label-bold text-on-surface-variant mb-2">Email Address</label>
<input className="w-full p-4 rounded-full border-2 border-surface-variant focus:border-primary focus:outline-none bg-white font-body-default text-body-default text-on-surface" type="email" value="jane@kidsplay.com"/>
</div>
<button className="px-8 py-4 bg-primary text-on-primary rounded-full font-label-bold text-label-bold hover:bg-surface-tint transition-colors w-full md:w-auto">Save Changes</button>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-surface-container-low dark:bg-inverse-surface w-full mt-auto border-t-2 border-surface-container-highest dark:border-outline">
<div className="flex flex-col md:flex-row justify-between items-center px-margin py-stack-gap w-full max-w-7xl mx-auto">
<div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface mb-4 md:mb-0">
                © 2024 KidsPlay Learning. Built with Pillowy Design.
            </div>
<nav className="flex flex-wrap justify-center gap-6">
<a className="text-on-surface-variant dark:text-surface-variant font-body-default text-body-default hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-default text-body-default hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-default text-body-default hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Github</a>
<a className="text-on-surface-variant dark:text-surface-variant font-body-default text-body-default hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all duration-300" href="#">Documentation</a>
</nav>
</div>
</footer>

    </div>
  );
}

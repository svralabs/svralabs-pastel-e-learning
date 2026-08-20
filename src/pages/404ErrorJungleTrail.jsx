import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function 404ErrorJungleTrail() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<main className="flex-grow flex items-center justify-center p-margin">
<div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="col-span-1 md:col-span-12 bg-surface-container-highest rounded-xl p-margin relative overflow-hidden flex flex-col items-center text-center">

<div className="absolute inset-0 dot-pattern opacity-50 z-0"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<h1 className="font-headline-xl text-headline-xl text-primary mb-stack-gap tracking-tight">
                        404
                    </h1>
<h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-stack-gap">
<span className="italic text-primary-container">Lost</span> in the Jungle
                    </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-margin max-w-md">
                        Whoops! This path is a bit overgrown. Try another trail!
                    </p>

<div className="w-full max-w-sm aspect-square bg-surface rounded-xl mb-margin overflow-hidden relative border-2 border-primary-container">
<img alt="Playful monkey holding a map upside down" className="w-full h-full object-cover" data-alt="A highly stylized, flat-design 2D vector illustration of a cartoon monkey holding a map upside down, looking confused. The style is vibrant, high-saturation, and 'pillowy' with thick geometric shapes and no drop shadows. The background is a crisp white canvas with abstract green and yellow geometric accents suggesting a jungle. The lighting feels bright and energetic, perfectly matching a modern, playful light-mode UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD76d7Eb-knQX9oMbfjjNKkQ00QtBwR8OhTht3-WCVPxnK3Fo6hTqFn1MJDwo_ycfpatolDOvlG4psoWhcJsXSHRyMM32pbDuyftHw5kmlNW0o6AwSVCCX0aPm67L7mqDC2uyVUD2qKs5hbHGWobcI5gXpnARtGCQeowmV3Z4CayKWPXhBjyxj2MNQ9inZjuiXH-qKCAtifwmacHGaAFq9C_A0o92wpDt5WXCjJtzTsjmLlrNxu7RTMo6aQqoLYathLZoep0vvM9oX5"/>
</div>

<div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-gutter">
<a className="bg-surface rounded-lg p-cell-padding flex flex-col items-center justify-center hover:bg-surface-container transition-colors border-2 border-surface-variant hover:border-primary group" href="#">
<div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-stack-gap text-on-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>home</span>
</div>
<span className="font-label-bold text-label-bold text-on-surface group-hover:text-primary transition-colors">Home</span>
</a>
<a className="bg-surface rounded-lg p-cell-padding flex flex-col items-center justify-center hover:bg-surface-container transition-colors border-2 border-surface-variant hover:border-primary group" href="#">
<div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-stack-gap text-on-secondary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>extension</span>
</div>
<span className="font-label-bold text-label-bold text-on-surface group-hover:text-primary transition-colors">Games</span>
</a>
<a className="bg-surface rounded-lg p-cell-padding flex flex-col items-center justify-center hover:bg-surface-container transition-colors border-2 border-surface-variant hover:border-primary group" href="#">
<div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center mb-stack-gap text-on-tertiary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>quiz</span>
</div>
<span className="font-label-bold text-label-bold text-on-surface group-hover:text-primary transition-colors">Quizzes</span>
</a>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
}

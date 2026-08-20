import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Toast from '../components/Toast';

const components = [
  {
    name: 'Button',
    variants: [
      { type: 'primary', label: 'Primary Button' },
      { type: 'secondary', label: 'Secondary Button' },
      { type: 'tertiary', label: 'Tertiary Button' },
      { type: 'danger', label: 'Danger Button' },
    ],
  },
  {
    name: 'Toast',
    variants: [
      { type: 'success', message: 'Mission Completed!', icon: 'check_circle' },
      { type: 'error', message: 'Oops! Something went wrong.', icon: 'error' },
      { type: 'info', message: 'Here\'s some information.', icon: 'info' },
      { type: 'warning', message: 'Warning: Be careful!', icon: 'warning' },
    ],
  },
];

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background w-full top-0 sticky bg-surface flex justify-between items-center px-margin py-base z-50">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md text-primary font-extrabold tracking-tight">KidsPlay Design</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/design-system" className="font-body-default text-body-default text-primary border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-200">Components</Link>
          <Link to="#" className="font-body-default text-body-default text-on-surface-variant hover:text-primary transition-colors duration-200">Patterns</Link>
          <Link to="#" className="font-body-default text-body-default text-on-surface-variant hover:text-primary transition-colors duration-200">Guidelines</Link>
          <Link to="#" className="font-body-default text-body-default text-on-surface-variant hover:text-primary transition-colors duration-200">Tokens</Link>
        </div>
        <div className="flex items-center gap-4">
          <Button type="primary" className="px-6 py-3 rounded-full">Get Started</Button>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors duration-200">dark_mode</span>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-7xl mx-auto px-margin py-margin flex flex-col gap-gutter">
        <header className="bg-surface-container-low rounded-xl p-cell-padding flex flex-col md:flex-row gap-gutter items-start md:items-center relative overflow-hidden border-2 border-surface-variant" style={{ '--pattern-color': '#e6e0ee' }}>
          <div className="absolute inset-0 pattern-dots opacity-50 z-0"></div>
          <div className="relative z-10 flex-1">
            <h1 className="font-headline-xl text-headline-xl text-primary mb-4">Toast Alert System</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Non-intrusive, transient feedback designed for learning environments. Toasts provide immediate status updates without interrupting the user's primary workflow, ensuring a playful yet informative experience.
            </p>
          </div>
          <div className="relative z-10 hidden md:block">
            <div className="w-32 h-32 bg-primary-fixed rounded-full flex items-center justify-center border-4 border-surface">
              <span className="material-symbols-outlined text-primary text-6xl">notifications_active</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <section className="md:col-span-8 bg-surface-container rounded-xl p-cell-padding border-2 border-surface-variant relative overflow-hidden" style={{ '--pattern-color': '#cac3d8' }}>
            <div className="absolute top-0 right-0 w-64 h-64 pattern-concentric opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="relative z-10">
              <h2 className="font-headline-md text-headline-md text-on-background mb-stack-gap">Anatomy of a Toast</h2>
              <div className="mt-8 flex flex-col items-center p-8 bg-surface rounded-lg border-2 border-surface-dim">
                <div className="relative">
                  <div className="bg-surface-container-highest rounded-full px-6 py-4 flex items-center gap-4 shadow-sm border-2 border-outline-variant min-w-[300px]">
                    <span className="material-symbols-outlined text-primary">info</span>
                    <span className="font-body-default text-body-default text-on-surface flex-1">Toast message text goes here.</span>
                    <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors">close</span>
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
                <span className="material-symbols-outlined text-sm">notifications</span> System Alert
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-2 rounded-full flex items-center gap-2 border-2 border-primary-fixed shadow-sm">
                <span className="material-symbols-outlined">check_circle</span> Action Complete
              </div>
            </div>
          </section>

          <section className="md:col-span-12 bg-surface-container-low rounded-xl p-cell-padding border-2 border-surface-variant relative overflow-hidden">
            <h2 className="font-headline-md text-headline-md text-on-background mb-stack-gap">Functional Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {components.map((component) => (
                <div key={component.name} className="bg-surface rounded-lg p-6 border-2 border-surface-dim flex flex-col gap-4">
                  <span className="bg-surface-variant text-on-surface-variant font-label-bold text-label-bold px-4 py-1.5 rounded-full w-fit">{component.name}</span>
                  {component.variants.map((variant, index) => (
                    <div key={index} className={`rounded-full px-6 py-4 flex items-center gap-4 border-2 shadow-sm ${variant.type === 'success' ? 'bg-[#dcfce7] text-[#166534] border-[#bbf7d0]' :
                      variant.type === 'error' ? 'bg-[#fee2e2] text-[#991b1b] border-[#fecaca]' :
                      variant.type === 'info' ? 'bg-[#e0f2fe] text-[#1e40af] border-[#bae6fd]' :
                      'bg-[#fef9c3] text-[#854d0e] border-[#fef08a]'}`}>
                      <span className="material-symbols-outlined" style={{ color: variant.type === 'success' ? '#15803d' :
                        variant.type === 'error' ? '#dc2626' :
                        variant.type === 'info' ? '#3b82f6' : '#d97706' }}>{variant.icon}</span>
                      <span className="font-body-default text-body-default flex-1 font-bold">{variant.message}</span>
                      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors">close</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

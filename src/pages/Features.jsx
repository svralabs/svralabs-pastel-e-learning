import React from 'react';

const features = [
  {
    id: 1,
    title: 'Fun Quiz',
    description: 'Test your understanding with a short but fun quizzes!',
    icon: 'quiz',
    bgColor: 'bg-surface-light',
    textColor: 'text-on-surface',
    accentColor: 'text-primary-container',
    pattern: 'pattern-concentric',
  },
  {
    id: 2,
    title: 'Creative Activities',
    description: 'Discover enjoyable activities such as coloring, crafting, and science.',
    icon: 'lightbulb',
    bgColor: 'bg-bento-primary',
    textColor: 'text-on-primary',
    accentColor: 'text-secondary-fixed',
    pattern: 'pattern-blobs',
  },
  {
    id: 3,
    title: 'Learn with Games',
    description: 'Learn something new while your kids playing games!',
    icon: 'sports_esports',
    bgColor: 'bg-bento-secondary',
    textColor: 'text-on-surface',
    accentColor: 'text-tertiary-container',
    pattern: 'pattern-dots',
  },
];

export default function Features() {
  return (
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
        {features.map((feature) => (
          <article
            key={feature.id}
            className={`${feature.bgColor} rounded-[32px] p-cell-padding relative overflow-hidden flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300`}
          >
            <div className={`absolute inset-0 ${feature.pattern} opacity-50 pointer-events-none`}></div>
            <div className="scalloped w-16 h-16 flex items-center justify-center shadow-sm z-10 text-primary-container">
              <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
            </div>
            <div className="mt-auto pt-16 z-10">
              <h3 className={`font-headline-lg ${feature.textColor}`}>
                {feature.title.split(' ')[0]} <span className={`font-calligraphic ${feature.accentColor} font-normal text-[40px]`}>{feature.title.split(' ')[1]}</span>
              </h3>
              <p className="font-body-default text-on-surface-variant mt-2 max-w-[250px]">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

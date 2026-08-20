import React from 'react';
import styles from './BentoShowcase.module.css';

const bentoItems = [
  {
    id: 1,
    title: 'Numbers & Shapes!',
    description: 'Count stars, build with blocks, and solve fun puzzles to unlock your next badge.',
    category: 'Math Magic',
    tags: ['Level 2', 'Geometry'],
    icon: 'calculate',
    color: 'primary',
    span: { md: { col: 8, row: 2 } }
  },
  {
    id: 2,
    title: 'Space Explorer',
    description: 'Journey to Mars and back.',
    category: 'Science',
    tags: ['New'],
    icon: 'science',
    color: 'secondary',
    span: { md: { col: 4, row: 1 } }
  },
  {
    id: 3,
    title: 'Color Splash',
    description: 'Mix paints and draw.',
    category: 'Art',
    tags: [],
    icon: 'palette',
    color: 'primary-fixed',
    span: { md: { col: 4, row: 1 } }
  },
  {
    id: 4,
    title: 'Word Wizards',
    description: 'Read stories and learn new words with interactive tales.',
    category: 'Story Time',
    tags: [],
    icon: 'menu_book',
    color: 'surface',
    span: { md: { col: 6, row: 1 } }
  },
  {
    id: 5,
    title: 'Daily Challenge',
    description: 'Complete today\'s challenge to earn a special reward!',
    category: 'Challenge',
    tags: [],
    icon: 'star',
    color: 'error',
    span: { md: { col: 6, row: 1 } }
  }
];

export default function BentoShowcase() {
  return (
    <div className={styles.bgBackground}>
      {/* TopNavBar (Web Only) */}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-margin pt-8 md:pt-12">
        <header className="mb-gutter text-center md:text-left">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-2">Pick Your Adventure</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Where do you want to go today?</p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[250px]">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className={`md:col-span-${item.span.md.col} md:row-span-${item.span.md.row} rounded-xl bg-${item.color}-container text-on-${item.color} p-cell-padding relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300`}
            >
              <div className={`absolute inset-0 pattern-${item.color === 'primary-fixed' ? 'circles-amber' : item.color === 'surface' ? 'dots' : 'circles'} opacity-50`}></div>
              <div className="relative z-10 flex justify-between items-start">
                <div className={`bg-${item.color} text-on-${item.color} px-4 py-2 rounded-full font-label-bold text-label-bold inline-flex items-center gap-2 border-2 border-transparent`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  {item.category}
                </div>
                {item.id === 1 && (
                  <button className="bg-on-primary text-primary-container w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                )}
              </div>
              <div className="relative z-10 w-full md:w-2/3">
                <h2 className="font-headline-md text-headline-md mb-2">{item.title}</h2>
                <p className="font-body-default text-body-default mb-6 opacity-90">{item.description}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag, index) => (
                    <span key={index} className={`bg-${item.color}/50 text-on-${item.color} px-3 py-1 rounded-full text-sm font-label-bold`}>{tag}</span>
                  ))}
                </div>
              </div>
              {/* Decorative Graphic */}
              {item.id === 1 && (
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-30 blur-2xl"></div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

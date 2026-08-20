import { ArrowLeft, ArrowRight, Check, X, Search, Bell, User, Calendar, Settings, Heart, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  icon: string;
  tags?: string[];
  color?: string;
  newTag?: boolean;
  decorative?: boolean;
}

function CourseCard({ title, description, icon, tags, color, newTag, decorative }: CourseCardProps) {
  const bgColor = color || 'bg-primary-container';
  const textColor = color ? 'text-on-primary' : 'text-on-primary-container';

  return (
    <div className={`${bgColor} ${textColor} rounded-xl p-cell-padding relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300`}>
      {decorative && <div className="absolute inset-0 pattern-circles opacity-50"></div>}
      <div className="relative z-10 flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        {newTag && <span className="bg-surface/50 px-3 py-1 rounded-full text-xs font-label-bold uppercase tracking-wider">New</span>}
      </div>
      <div className="relative z-10">
        <h3 className="font-headline-md text-headline-md mb-2">{title}</h3>
        <p className="font-body-default text-body-default opacity-80">{description}</p>
        {tags && (
          <div className="flex gap-2 mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-primary/50 text-on-primary px-3 py-1 rounded-full text-sm font-label-bold">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BentoShowcase() {
  const courses = [
    {
      title: "Numbers & Shapes!",
      description: "Count stars, build with blocks, and solve fun puzzles to unlock your next badge.",
      icon: "calculate",
      tags: ["Level 2", "Geometry"],
      color: "bg-primary-container",
      decorative: true
    },
    {
      title: "Space Explorer",
      description: "Journey to Mars and back.",
      icon: "science",
      newTag: true,
      color: "bg-secondary-container"
    },
    {
      title: "Color Splash",
      description: "Mix paints and draw.",
      icon: "palette",
      color: "bg-primary-fixed",
      decorative: true
    },
    {
      title: "Word Wizards",
      description: "Read stories and learn new words with interactive tales.",
      icon: "menu_book",
      color: "bg-surface-container-highest"
    },
    {
      title: "Daily Challenge",
      description: "Complete today's challenge to earn bonus points!",
      icon: "star",
      color: "bg-surface-container-lowest"
    }
  ];

  return (
    <>
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
          {/* Math: 2x2 Cell */}
          <div className="md:col-span-8 md:row-span-2 rounded-xl bg-primary-container text-on-primary p-cell-padding relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300">
            <div className="absolute inset-0 pattern-circles opacity-50"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div className="bg-primary-fixed text-primary px-4 py-2 rounded-full font-label-bold text-label-bold inline-flex items-center gap-2 border-2 border-transparent">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calculate</span>
                Math Magic
              </div>
              <button className="bg-on-primary text-primary-container w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </button>
            </div>
            <div className="relative z-10 w-full md:w-2/3">
              <h2 className="font-headline-lg text-headline-lg mb-4">Numbers & Shapes!</h2>
              <p className="font-body-lg text-body-lg mb-6 opacity-90">Count stars, build with blocks, and solve fun puzzles to unlock your next badge.</p>
              <div className="flex gap-2">
                <span className="bg-primary/50 text-on-primary px-3 py-1 rounded-full text-sm font-label-bold">Level 2</span>
                <span className="bg-primary/50 text-on-primary px-3 py-1 rounded-full text-sm font-label-bold">Geometry</span>
              </div>
            </div>
            {/* Decorative Graphic */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-30 blur-2xl"></div>
          </div>

          {/* Science: 1x1 Cell */}
          <CourseCard
            title="Space Explorer"
            description="Journey to Mars and back."
            icon="science"
            newTag={true}
            color="bg-secondary-container"
          />

          {/* Art: 1x1 Cell */}
          <CourseCard
            title="Color Splash"
            description="Mix paints and draw."
            icon="palette"
            color="bg-primary-fixed"
            decorative={true}
          />

          {/* Language: 2x1 Cell */}
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
                <span className="material-symbols-outlined text-5xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
              </div>
            </div>
          </div>

          {/* Daily Challenge: 2x1 Cell */}
          <CourseCard
            title="Daily Challenge"
            description="Complete today's challenge to earn bonus points!"
            icon="star"
            color="bg-surface-container-lowest"
          />
        </div>
      </main>
    </>
  );
}

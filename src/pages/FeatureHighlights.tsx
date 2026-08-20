import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Fun Quiz",
    description: "Test your understanding with a short but fun quizzes!",
    icon: "quiz",
    bgColor: "bg-surface-light",
    textColor: "text-on-surface",
    highlightColor: "text-primary-container",
    pattern: "pattern-concentric",
  },
  {
    title: "Creative Activities",
    description: "Discover enjoyable activities such as coloring, crafting, and science.",
    icon: "lightbulb",
    bgColor: "bg-bento-primary",
    textColor: "text-on-primary",
    highlightColor: "text-secondary-fixed",
    pattern: "pattern-blobs",
  },
  {
    title: "Learn with Games",
    description: "Learn something new while your kids playing games!",
    icon: "sports_esports",
    bgColor: "bg-bento-secondary",
    textColor: "text-on-surface",
    highlightColor: "text-tertiary-container",
    pattern: "pattern-dots",
  },
];

const badges = [
  { text: "#funny", bgColor: "bg-surface-light", textColor: "text-primary-container" },
  { text: "#enjoy", bgColor: "bg-secondary-container", textColor: "text-on-secondary-container" },
  { text: "#happy", bgColor: "bg-primary-container", textColor: "text-on-primary" },
];

export default function FeatureHighlights() {
  return (
    <main className="w-full px-margin py-16 max-w-7xl mx-auto flex flex-col gap-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
        <div className="max-w-2xl">
          <h2 className="text-display font-black text-on-surface">
            Our interactive <span className="font-calligraphic text-primary-container font-normal">features</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge, index) => (
            <Badge key={index} className={`${badge.bgColor} ${badge.textColor} font-label-bold px-6 py-3 rounded-full hover:scale-105 transition-transform cursor-default`}>
              {badge.text}
            </Badge>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {features.map((feature, index) => (
          <Card key={index} className={`${feature.bgColor} rounded-[32px] p-cell-padding relative overflow-hidden flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300`}>
            <div className={`absolute inset-0 ${feature.pattern} opacity-50 pointer-events-none`}></div>
            <div className="scalloped w-16 h-16 flex items-center justify-center shadow-sm z-10 text-primary-container">
              <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
            </div>
            <CardContent className="mt-auto pt-16 z-10">
              <h3 className={`font-headline-lg ${feature.textColor}`}>
                {feature.title.split(' ')[0]} <span className={`font-calligraphic ${feature.highlightColor} font-normal text-[40px]`}>{feature.title.split(' ')[1]}</span>
              </h3>
              <p className="font-body-default text-on-surface-variant mt-2 max-w-[250px]">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

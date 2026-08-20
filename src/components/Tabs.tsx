import React, { useState } from 'react';

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

export default function Tabs({ children, orientation = 'horizontal' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <div className={`flex ${orientation === 'horizontal' ? 'flex-col' : 'flex-row'}`}>
      <div className={`flex ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'} gap-2 mb-4`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full font-label-bold text-label-bold ${
              activeTab === index
                ? 'bg-primary text-on-primary'
                : 'bg-surface-variant text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="flex-1">{tabs[activeTab]}</div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}

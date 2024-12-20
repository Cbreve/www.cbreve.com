import React from 'react';
import { Users, Code, Briefcase, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: Code,
    value: "100+",
    label: "Projects Completed",
  },
  {
    icon: Briefcase,
    value: "30+",
    label: "Open Source Projects",
  },
  {
    icon: Award,
    value: "15+",
    label: "Awards Won",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-[#995a7d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-10 w-10 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
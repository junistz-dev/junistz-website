import React from 'react';

const skills = [
  { name: '프론트엔드', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { name: '백엔드', items: ['Node.js', 'Express', 'PostgreSQL'] },
  { name: '도구', items: ['Git', 'VS Code', 'Docker'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">기술 스택</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div key={category.name} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li key={skill} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">YourName</div>
        <div className="flex gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">소개</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">기술</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">프로젝트</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">연락처</a>
        </div>
      </nav>
    </header>
  );
}
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
        />
        <h1 className="text-5xl font-bold text-gray-900 mb-4">안녕하세요! 👋</h1>
        <p className="text-xl text-gray-600 mb-8">
          저는 열정적인 개발자입니다.<br />
          창의적인 솔루션을 만들어내는 것을 좋아합니다.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com" className="p-2 text-gray-600 hover:text-gray-900">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="p-2 text-gray-600 hover:text-gray-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:your@email.com" className="p-2 text-gray-600 hover:text-gray-900">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
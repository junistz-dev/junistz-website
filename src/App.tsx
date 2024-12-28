import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 YourName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
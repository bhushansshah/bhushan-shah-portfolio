import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 text-gray-900">
      <Header />
      <hr className="my-6 border-t border-gray-300" />
      <About />
      <hr className="my-6 border-t border-gray-300" />
      <Publications />
      <hr className="my-6 border-t border-gray-300" />
      <Projects />
      <hr className="my-6 border-t border-gray-300" />
      <Skills />
      <hr className="my-6 border-t border-gray-300" />
      <Contact />
    </div>
  );
}

export default App;

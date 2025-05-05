import React from 'react';
import { education } from '../data';

export default function Education() {
  return (
    <section className="py-20 bg-gray-900" id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/50"
            >
              <h3 className="text-xl font-semibold text-cyan-500">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400">{edu.year}</p>
              <p className="text-gray-400 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
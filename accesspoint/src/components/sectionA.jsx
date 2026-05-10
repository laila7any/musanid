// components/sectionA.js
import React from 'react';
import Link from 'next/link';

export default function SectionA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Mission Text */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-green-dark tracking-widest">
              HOW WE DO –
            </h4>
            <h2 className="text-4xl md:text-5xl text-black tracking-tight">
              OUR <span className="font-bold">MISSION</span>
            </h2>
            <div className="space-y-4 text-text-primary-500 text-lg leading-relaxed">
              <p>
                we  dedicated to empowering university students with disabilities. We break down barriers and create inclusive learning environments.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-green-dark text-white font-semibold rounded-full hover:bg-[#2f4a3b] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                CONTACT WITH US
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual (Optional) */}
          <div className="relative">
            <div className="bg-[#9DCCB0] rounded-3xl p-8 shadow-xl rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-green-dark mb-4">Supporting Every Step</h3>
                <p className="text-text-primary-500">
                  We are committed to creating an inclusive environment where every student can achieve their full potential.
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-dark/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#9DCCB0]/30 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
          image: "/images/banner3.avif",
      title: "Empowering Every Student",
      subtitle: "DISABILITY SUPPORT",
      highlight: "THAT ACTUALLY WORKS",
      description: "NDIS-registered academic accommodations • Exam support • Campus accessibility • Real-time assistance",
      buttonText: "START YOUR JOURNEY",
    },
    {
      image: "/images/banner3.avif",
      title: "Your Success is Our Mission",
      subtitle: "UNIVERSITY LIFE",
      highlight: "MADE ACCESSIBLE",
      description: "Fast approvals • Note-taking • Interpreters • Mental health & mobility support",
      buttonText: "GET STARTED FREE",
    },
    {
      image: "/images/banner3.avif", 
      title: "Inclusion Starts Here",
      subtitle: "FULL CAMPUS",
      highlight: "BELONGING",
      description: "24/7 student support • Transportation • Assistive technology • Personalized plans",
      buttonText: "REQUEST SUPPORT",
    }
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4800);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-screen max-h-[720px] overflow-hidden">
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.highlight}
            fill
            priority={index === 0}
            className="object-cover brightness-75"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#41654F]/80 via-[#41654F]/60 to-[#705444]/40"></div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
            {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"> */}
              
              {/* <div className="lg:col-span-10"> */}
                <div className=" bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12 border border-[#9DCCB0]/30">
                  
                  <div className="inline-flex items-center gap-x-2 bg-[#9DCCB0] text-[#41654F] text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-3xl mb-6">
                    <Sparkles className="w-4 h-4" />
                    REGISTERED NDIS PROVIDER
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold leading-none text-[#41654F]">
                    {slide.title}
                  </h1>
                  
                  <div className="mt-3 flex items-baseline gap-x-3">
                    <span className="text-[#9DCCB0] text-4xl font-semibold">{slide.subtitle}</span>
                    <span className="text-[#705444] text-4xl font-light">—</span>
                    <span className="text-[#705444] text-4xl font-semibold tracking-tight">{slide.highlight}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-8 text-lg text-[#705444] leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link href="/request">
                      <button className="cursor-pointer group flex items-center justify-center gap-x-3 bg-[#41654F] hover:bg-[#9DCCB0] hover:text-[#41654F] text-white px-9 py-6 rounded-3xl font-semibold text-lg transition-all duration-300 shadow-xl">
                        {slide.buttonText}
                        <ArrowRight className="w-6 h-6 group-active:rotate-45 transition-transform" />
                      </button>
                    </Link>

                    <Link href="/about">
                      <button className="cursor-pointer flex items-center justify-center gap-x-3 border-2 border-[#41654F] text-[#41654F] hover:bg-[#F3E3CD] px-9 py-6 rounded-3xl font-semibold text-lg transition-all">
                        <span>Watch How It Works</span>
                      </button>
                    </Link>
                  </div>

                  {/* Trust line */}
                  <div className="mt-10 pt-8 border-t border-[#9DCCB0]/20 flex items-center gap-x-8 text-sm">
                    <div className="flex -space-x-4">
                      <div className="w-8 h-8 bg-[#9DCCB0] rounded-2xl flex items-center justify-center text-xs font-bold text-[#41654F]">U</div>
                      <div className="w-8 h-8 bg-[#F3E3CD] rounded-2xl flex items-center justify-center text-xs font-bold text-[#705444]">A</div>
                    </div>
                    <p className="text-[#705444] font-medium">
                      Trusted by 28 egyptian universities
                    </p>
                  </div>
                </div>
              {/* </div> */}

              {/* Right side visual accent - subtle floating element */}
              {/* <div className="hidden lg:flex lg:col-span-4 justify-end">
                <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 max-w-[260px] shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-7xl mb-4">♿</div>
                    <p className="font-semibold text-xl">100% Student-First</p>
                    <p className="text-sm opacity-90 mt-1">NDIS funding approved in under 48 hours</p>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      ))}

      {/* Navigation Dots - elegant with palette */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={` cursor-pointer transition-all duration-300 ${
              index === currentSlide
                ? 'w-10 h-3 bg-[#9DCCB0] rounded-3xl'
                : 'w-3 h-3 bg-white/60 hover:bg-white rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className= "cursor-pointer absolute left-6 top-1/2 z-30 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#9DCCB0] hover:text-[#41654F] text-white rounded-3xl flex items-center justify-center transition-all"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-6 top-1/2 z-30 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#9DCCB0] hover:text-[#41654F] text-white rounded-3xl flex items-center justify-center transition-all"
      >
        →
      </button>
    </div>
  );
}
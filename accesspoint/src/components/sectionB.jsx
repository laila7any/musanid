"use client";

import React from 'react';

export default function SectionB() {
  const stories = [
    {
      name: "Sarah Johnson",
      program: "Computer Science, Class of 2023",
      story: "As a visually impaired student, the accommodation system provided me with digital textbooks and screen readers that transformed my learning experience. I graduated with honors thanks to their support.",
      image: "👩‍🎓",
      accommodations: ["Digital Textbooks", "Screen Readers", "Extended Exam Time"],
      rating: 5
    },
    {
      name: "Michael Chen",
      program: "Psychology, Graduate Student",
      story: "The mobility support services, including campus transportation and accessible classroom arrangements, allowed me to focus on my studies without worrying about physical barriers.",
      image: "👨‍🎓",
      accommodations: ["Campus Transportation", "Accessible Seating", "Note-taking Support"],
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      program: "Business Administration",
      story: "Being hearing-impaired, I was provided with sign language interpreters and real-time captioning. The system made sure I never missed any important lectures or discussions.",
      image: "👩‍💼",
      accommodations: ["Sign Language Interpreter", "Real-time Captioning", "Visual Alerts"],
      rating: 4
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f3e3cd63]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-x-2 text-[#9DCCB0] font-semibold text-sm tracking-widest mb-3">
            <span className="h-px w-8 bg-[#9DCCB0]"></span>
            REAL STORIES • REAL IMPACT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#41654F] mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-[#705444] max-w-2xl mx-auto">
            Hear from university students who transformed their academic journey with our NDIS-registered support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((student, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#9DCCB0]/10">
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${i < student.rating ? 'text-[#9DCCB0]' : 'text-[#F3E3CD]'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Story */}
                <blockquote className="text-[#705444] italic text-lg leading-relaxed mb-8">
                  “{student.story}”
                </blockquote>

                {/* Student */}
                <div className="flex items-center gap-x-4">
                  <div className="w-14 h-14 bg-[#9DCCB0] text-[#41654F] rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                    {student.image}
                  </div>
                  <div>
                    <p className="font-bold text-[#41654F] text-xl">{student.name}</p>
                    <p className="text-[#705444] text-sm">{student.program}</p>
                  </div>
                </div>

                {/* Accommodations */}
                <div className="mt-8 pt-6 border-t border-[#9DCCB0]/20">
                  <p className="text-[#41654F] font-medium text-sm mb-3">Accommodations Used</p>
                  <div className="flex flex-wrap gap-2">
                    {student.accommodations.map((acc, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-[#9DCCB0]/10 text-[#41654F] text-xs font-medium rounded-3xl"
                      >
                        {acc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar - using your palette */}
        <div className="mt-16 bg-[#41654F] rounded-3xl p-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2,500+", label: "Students Supported" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "1.2k", label: "Monthly Requests" },
              { number: "24/7", label: "NDIS Support" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-[#9DCCB0]">{stat.number}</div>
                <div className="text-[#F3E3CD] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
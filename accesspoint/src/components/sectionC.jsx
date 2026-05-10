"use client";

import React from 'react';
import Link from 'next/link';

export default function SectionC() {
  const features = [
    {
      title: "Easy Submission",
      description: "Submit accommodation requests in minutes through our user-friendly portal",
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      color: "#9DCCB0"
    },
    {
      title: "Smart Routing",
      description: "Requests automatically sent to relevant departments for faster processing",
      icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      color: "#41654F"
    },
    {
      title: "Real-time Tracking",
      description: "Monitor request status with live updates and notifications",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "#705444"
    },
    {
      title: "Secure & Confidential",
      description: "All data protected with enterprise-grade security and privacy",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      color: "#9DCCB0"
    }
  ];

  const steps = [
    { number: "01", title: "Submit Request", description: "Fill out our simple online form with your accommodation needs" },
    { number: "02", title: "Review Process", description: "Our team evaluates and routes to appropriate departments" },
    { number: "03", title: "Approval & Setup", description: "Receive approval and accommodations are implemented" },
    { number: "04", title: "Ongoing Support", description: "Continuous monitoring and adjustments as needed" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[#9DCCB0] font-semibold tracking-widest">WHY NEWLEAF</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#41654F] mt-2">Why Students Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#f3e3cd63] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-[#41654F] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#41654F] mb-3">{feature.title}</h3>
                <p className="text-primary-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="bg-[#41654F] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left Visual */}
            <div className="md:col-span-2 bg-[#9DCCB0] p-12 flex flex-col items-center justify-center text-[#41654F]">
              <img className="w-20 h-20 rounded-full" src="../images/logo.jpg" alt="logo"/>
              <h3 className="text-4xl font-bold text-center leading-none">Simple.<br />Fast.<br />Inclusive.</h3>
              <p className="mt-6 text-[#41654F]/80 text-center max-w-xs">
                From request to support in under 48 hours
              </p>
            </div>

            {/* Steps */}
            <div className="md:col-span-3 bg-white p-10 md:p-12">
              <div className="space-y-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 bg-[#9DCCB0] text-[#41654F] rounded-2xl font-bold flex items-center justify-center text-2xl">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#41654F] text-2xl">{step.title}</h4>
                      <p className="text-primary-500 mt-2">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/request">
                <button className="cursor-pointer w-full md:w-auto bg-[#9DCCB0] hover:bg-[#41654F] hover:text-white text-[#41654F] px-10 py-6 rounded-3xl font-semibold text-lg flex items-center justify-center gap-x-3 transition-all">
                  Start Your Request Now
                  <span className="text-2xl">→</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
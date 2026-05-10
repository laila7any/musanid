// app/about/page.js
export default function AboutPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-green-dark to-primary-500  text-white">
        <div className="absolute inset-0 bg-primary-800 opacity-5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering <span className="text-green-light">Every Student</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              A revolutionary system ensuring equal academic opportunities for students with disabilities
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Making education accessible to all</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="w-16 h-16 bg-green-light/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-dark mb-4">Our Mission</h3>
              <p className="text-primary-500 text-lg">
                To create an inclusive academic environment where students with disabilities can thrive 
                by providing seamless access to necessary accommodations through a streamlined digital 
                platform that ensures dignity, equality, and academic success.
              </p>
            </div>
            
            <div className="bg-linear-to-br from-green-dark text-primary-500 rounded-2xl shadow-xl p-8 md:p-10  transform hover:scale-[1.02] transition-transform duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-[#F3E3CD] text-lg">
                To become a global model for disability inclusion in higher education, where every student 
                can access customized support effortlessly, breaking down barriers to create truly 
                equitable learning opportunities for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f3e3cd63]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              The Accessibility Support System
            </h2>
            <p className="text-xl text-primary-500 max-w-3xl mx-auto">
              A comprehensive digital platform designed to streamline accommodation requests 
              and ensure timely support for students with disabilities
            </p>
            <div className="w-24 h-1 bg-green-light mx-auto mt-4"></div>
          </div>

          {/* Process Flow */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-green-dark">How It Works</h3>
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-light"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Student Submission",
                    description: "Students submit accommodation requests through our intuitive online portal",
                    icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  },
                  {
                    step: "2",
                    title: "Automated Routing",
                    description: "Requests are automatically routed to relevant departments for review",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                  },
                  {
                    step: "3",
                    title: "Department Review",
                    description: "Specialists review requests and determine appropriate accommodations",
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  },
                  {
                    step: "4",
                    title: "Real-time Tracking",
                    description: "Students can track request status and receive updates in real-time",
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  },
                  {
                    step: "5",
                    title: "Implementation & Support",
                    description: "Accommodations are implemented with ongoing support and monitoring",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  }
                ].map((item, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 transform hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-dark text-white rounded-full flex items-center justify-center font-bold mr-4">
                            {item.step}
                          </div>
                          <h4 className="text-xl font-bold text-green-dark">{item.title}</h4>
                        </div>
                        <p className="text-primary-500">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center my-4 md:my-0">
                      <div className="w-12 h-12 bg-green-light rounded-full flex items-center justify-center z-50">
                        <svg className="w-6 h-6 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Telegram Notification Feature */}
          <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 border-l-8 border-green-light">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="shrink-0">
                <div className="w-20 h-20 bg-green-light/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-dark mb-2">Stay Updated via Telegram</h3>
                <p className="text-primary-500">
                  We now offer instant notifications through Telegram! Once your request status changes (e.g., approved, pending, or completed), you&apos;ll receive a message directly on Telegram. 
                  <strong className="block mt-2">To enable this:</strong> Add your Telegram Chat ID in your profile page, and you&apos;ll start receiving real‑time updates.
                </p>
              </div>
            </div>
          </div>

          {/* Available Accommodations */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 text-green-dark">Available Support Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Exam Accommodations",
                  description: "Extended time, separate rooms, assistive technology",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Learning Support",
                  description: "Specialized tutors, note-takers, alternative format materials",
                  icon: "M12 14l9-5-9-5-9 5 9 5z"
                },
                {
                  title: "Physical Accessibility",
                  description: "Special seating, campus transportation, accessible facilities",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                },
                {
                  title: "Communication Support",
                  description: "Sign language interpreters, real-time captioning",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                },
                {
                  title: "Technical Assistance",
                  description: "Assistive technology, specialized software, equipment loans",
                  icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                },
                {
                  title: "Personal Support",
                  description: "Campus guides, personal assistants, mobility training",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-light/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-dark mb-2">{service.title}</h4>
                  <p className="text-primary-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Our Commitment to Inclusion
            </h2>
            <div className="w-24 h-1 bg-green-light mx-auto"></div>
          </div>

          <div className="bg-linear-to-r from-green-dark to-primary-500 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Creating a Barrier-Free Learning Environment
                </h3>
                <p className="text-[#F3E3CD] text-lg mb-6">
                  We believe that disability should never be a barrier to education. Our system is built on the 
                  principles of universal design, ensuring that every student has equal opportunity to succeed 
                  academically.
                </p>
                <div className="space-y-4">
                  {[
                    "Confidentiality and privacy protection",
                    "Personalized accommodation plans",
                    "Continuous improvement based on feedback",
                    "Collaboration with disability advocacy groups",
                    "Faculty training and awareness programs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-light mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#F3E3CD]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-green-light">24/7</div>
                  <div className="text-xl font-semibold mb-4">Support Availability</div>
                  <p className="text-[#F3E3CD]">
                    Our dedicated support team is available around the clock to assist students 
                    with their accommodation needs and provide guidance throughout their academic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
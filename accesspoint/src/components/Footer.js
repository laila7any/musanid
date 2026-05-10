// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#41654F] text-white border-t border-[#9DCCB0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-4 lg:col-span-4">
              <Link
                className="inline-block mb-6"
                href="/"
                aria-label="Newleaf Disability Care"
              >
                <img className="w-20 h-20 rounded-full" src="../images/logo.jpg" alt="logo"/>
              </Link>
              <p className="text-[#F3E3CD] text-sm leading-relaxed max-w-md">
                NDIS registered provider dedicated to empowering university
                students with disabilities. We break down barriers and create
                inclusive learning environments.
              </p>
            </div>

            {/* Links Section */}
            <div className="md:col-span-8 lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* About & Contact */}
                <div>
                  <h6 className="font-semibold uppercase mb-4 text-[#9DCCB0] text-sm tracking-wide">
                    Pages
                  </h6>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/about"
                        className="text-[#F3E3CD]/80 hover:text-white transition duration-150 ease-in-out text-sm flex items-center"
                      >
                        <svg
                          className="w-3 h-3 mr-2 text-[#9DCCB0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-[#F3E3CD]/80 hover:text-white transition duration-150 ease-in-out text-sm flex items-center"
                      >
                        <svg
                          className="w-3 h-3 mr-2 text-[#9DCCB0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h6 className="font-semibold uppercase mb-4 text-[#9DCCB0] text-sm tracking-wide">
                    Services
                  </h6>
                  <ul className="space-y-3">
                    <li className="text-[#F3E3CD]/80 hover:text-white transition duration-150 ease-in-out text-sm flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-[#9DCCB0]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Personal Assistance
                    </li>
                    <li className="text-[#F3E3CD]/80 hover:text-white transition duration-150 ease-in-out text-sm flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-[#9DCCB0]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      24/7 Support
                    </li>
                  </ul>
                </div>

                {/* Support & Resources */}
                <div>
                  <h6 className="font-semibold uppercase mb-4 text-[#9DCCB0] text-sm tracking-wide">
                    Support
                  </h6>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/profile"
                        className="text-[#F3E3CD]/80 hover:text-white transition duration-150 ease-in-out text-sm flex items-center"
                      >
                        <svg
                          className="w-3 h-3 mr-2 text-[#9DCCB0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profile"
                        className="text-[#F3E3CD]/80 hover:text-white transition duration-150 ease-in-out text-sm flex items-center"
                      >
                        <svg
                          className="w-3 h-3 mr-2 text-[#9DCCB0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        Telegram Setup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-[#F3E3CD]/80 hover:text-white transition duration-150 ease-in-out text-sm flex items-center"
                      >
                        <svg
                          className="w-3 h-3 mr-2 text-[#9DCCB0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h6 className="font-semibold uppercase mb-4 text-[#9DCCB0] text-sm tracking-wide">
                    Contact
                  </h6>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#9DCCB0] mt-0.5 mr-3 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm text-[#F3E3CD]">
                        123 Support Street, University City
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#9DCCB0] mr-3 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-sm text-[#F3E3CD]">
                        1800 123 456
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-[#9DCCB0] mr-3 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm text-[#F3E3CD]">
                        Email Us: info@musanid.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Telegram Notice */}
          <div className="mb-8 pb-4 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <svg
                className="w-5 h-5 text-[#9DCCB0] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm text-[#F3E3CD]">
                Get real‑time updates on your request status via Telegram.
                <Link
                  href="/profile"
                  className="text-[#9DCCB0] hover:underline ml-1 font-medium"
                >
                  Add your chat ID in profile →
                </Link>
              </span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-[#9DCCB0]/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              {/* Social Links */}
              <div className="mb-6 md:mb-0">
                <ul className="flex space-x-4">
                  <li>
                    <a
                      className="flex justify-center items-center w-8 h-8 text-white bg-[#9DCCB0]/20 hover:bg-[#9DCCB0] rounded-full transition duration-200"
                      href="#0"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex justify-center items-center w-8 h-8 text-white bg-[#9DCCB0]/20 hover:bg-[#9DCCB0] rounded-full transition duration-200"
                      href="#0"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex justify-center items-center w-8 h-8 text-white bg-[#9DCCB0]/20 hover:bg-[#9DCCB0] rounded-full transition duration-200"
                      href="#0"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20.145" cy="11.892" r="1" />
                        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex justify-center items-center w-8 h-8 text-white bg-[#9DCCB0]/20 hover:bg-[#9DCCB0] rounded-full transition duration-200"
                      href="#0"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1。2 2。4 0 2。8 1。6 2。8 3。6v4。2h。1z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

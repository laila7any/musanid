"use client";

import Link from "next/link";
import { useAuth } from '../app/hooks/useAuth';
import { useEffect, useState } from "react";

export default function Header() {
  const { logout, user, isLoading, error, isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className=" w-full z-50">
      {/* Top Contact Bar - Exact match to the image */}
      <div className="bg-[#41654F] text-white py-2 text-sm border-b border-[#9DCCB0]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-x-6">
            {/* Phone */}
            <div className="flex items-center gap-x-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2 2 2 0 01-2-2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 012-2zM21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 4.01V8" 
                />
              </svg>
              <span className="font-medium">Call Us: 0123 456 789</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-x-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2.01 2.01 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2" 
                />
              </svg>
              <span className="font-medium">Email Us: info@musanid.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Exact visual match to the image using your palette */}
      <div 
        className={`bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg py-3' 
            : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-x-3" aria-label="Home">
              <img className="w-20 h-20 rounded-full" src="../images/logo.jpg" alt="logo"/>
              <div className="leading-none">
                <h1 className="text-[#41654F] font-bold text-3xl tracking-[-1px]">MUSANID</h1>
                <p className="text-text-primary-500 text-[10px] tracking-[1px] font-medium -mt-0.5">DISABILITY CARE</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-between flex-1 ml-10">
              {/* Main Navigation Links - using your palette */}
              <ul className="flex items-center gap-x-8 text-[#41654F] font-medium">
                {['Home', 'About', 'Request', 'Contact'].slice(0, user?.role === 'admin' ? 2 : 4).map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                      className={`px-5 py-2.5 rounded-2xl transition-all duration-200 hover:text-[#9DCCB0] flex items-center gap-x-2 ${
                        item === 'Home' 
                          ? 'bg-[#9DCCB0] text-white hover:bg-[#9DCCB0]' 
                          : 'hover:bg-[#F3E3CD]'
                      }`}
                    >
                      {/* Green circle highlight for HOME like in the image */}
                      {item === 'Home' && (
                        <span className="w-5 h-5 bg-white text-[#41654F] rounded-full flex items-center justify-center text-xs font-bold">H</span>
                      )}
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* User Actions Section - kept exactly as your original logic */}
              <div className="flex items-center gap-x-4">
                {isAuthenticated ? (
                  <>
                    {/* User Greeting & Admin */}
                    <div className="flex items-center gap-x-4">
                      <Link 
                        href="/profile" 
                        className="flex items-center gap-x-2 px-5 py-2.5 rounded-2xl font-medium text-[#41654F] hover:bg-[#F3E3CD] transition-all duration-200"
                      >
                        <div className="w-8 h-8 bg-[#9DCCB0] rounded-2xl flex items-center justify-center text-[#41654F]">
                          <span className="text-sm font-medium">
                            {user?.firstName?.charAt(0) || 'U'}
                          </span>
                        </div>
                        <span className="font-medium">Hi, {user?.firstName || 'User'}!</span>
                      </Link>

                      {user?.role === 'admin' && (
                        <Link
                          href="/adminboard"
                          className="px-5 py-2.5 rounded-2xl font-medium text-[#41654F] hover:bg-[#F3E3CD] transition-all duration-200"
                        >
                          Admin Dashboard
                        </Link>
                      )}
                    </div>

                    {/* Logout Button - kept red for clarity */}
                    <button
                      onClick={() => logout()}
                      className="px-5 py-2.5 bg-red-500 text-white rounded-2xl font-medium hover:bg-red-600 transition-all duration-200 flex items-center gap-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    {/* Login Button - styled with palette */}
                    <Link
                      href="/login"
                      className="px-6 py-2.5 rounded-2xl font-medium border border-[#41654F] text-[#41654F] hover:bg-[#41654F] hover:text-white transition-all duration-200"
                    >
                      Login
                    </Link>

                    {/* Send Request Button - styled exactly like the "GET IN TOUCH" green button in the image */}
                    {user?.role === 'student' && (
                      <Link
                        href="/register"
                        className="px-6 py-2.5 bg-[#41654F] hover:bg-[#9DCCB0] hover:text-[#41654F] text-white rounded-2xl font-medium transition-all duration-200"
                      >
                        Send Request
                      </Link>
                    )}
                  </>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-[#41654F] hover:bg-[#F3E3CD] rounded-2xl transition-all"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - styled with your palette */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-2 py-4 px-4 shadow-inner">
            <div className="flex flex-col gap-y-1">
              {['Home', 'About', 'Request', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className={`block px-5 py-4 rounded-2xl font-medium text-[#41654F] hover:bg-[#F3E3CD] transition-all ${
                    item === 'Home' ? 'bg-[#9DCCB0] text-white' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}

              {/* Mobile User Actions - kept your exact logic */}
              <div className="border-t pt-4 mt-4">
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/profile"
                      className="flex items-center gap-x-3 px-5 py-4 rounded-2xl text-[#41654F] hover:bg-[#F3E3CD] transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-9 h-9 bg-[#9DCCB0] rounded-2xl flex items-center justify-center text-[#41654F]">
                        <span className="font-medium">{user?.firstName?.charAt(0) || 'U'}</span>
                      </div>
                      <div>
                        <p className="font-medium">Hi, {user?.firstName || 'User'}!</p>
                        <p className="text-sm text-[#705444]">View Profile</p>
                      </div>
                    </Link>

                    {user?.role === 'admin' && (
                      <Link
                        href="/adminboard"
                        className="block px-5 py-4 rounded-2xl font-medium text-[#41654F] hover:bg-[#F3E3CD] transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}

                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full mt-3 px-5 py-4 bg-red-500 text-white rounded-2xl font-medium hover:bg-red-600 flex items-center justify-center gap-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-5 py-4 mb-2 rounded-2xl font-medium border border-[#41654F] text-[#41654F] hover:bg-[#41654F] hover:text-white transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-5 py-4 bg-[#41654F] text-white rounded-2xl font-medium hover:bg-[#9DCCB0] hover:text-[#41654F] text-center transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Send Request
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
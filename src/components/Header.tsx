import { Link } from '@tanstack/react-router'
import React, { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  Phone,
  X,
} from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`px-6 py-4 flex items-center fixed w-full top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/20'
          : 'bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-md shadow-lg border-b border-gray-200/10'
      }`}>
        <h1 className="text-xl font-semibold">
          <Link to="/" className="flex items-center transition-all duration-300 hover:scale-105 group">
            <div className="bg-white p-2 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-1">
              <img
                src="/aion_logo_blue.png"
                alt="Aion Health Care Logo"
                className="h-10 w-auto"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:ml-auto lg:items-center lg:space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-aion-primary-500 transition-all font-medium text-sm relative group"
            activeProps={{
              className: 'text-aion-primary-500 font-semibold',
            }}
          >
            Home
            <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-aion-primary-400 to-aion-secondary-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-aion-primary-500 transition-all font-medium text-sm relative group"
            activeProps={{
              className: 'text-aion-primary-500 font-semibold',
            }}
          >
            About
            <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-aion-primary-400 to-aion-secondary-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-aion-primary-500 transition-all font-medium text-sm relative group"
            activeProps={{
              className: 'text-aion-primary-500 font-semibold',
            }}
          >
            Services
            <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-aion-primary-400 to-aion-secondary-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/clients"
            className="text-gray-700 hover:text-aion-primary-500 transition-all font-medium text-sm relative group"
            activeProps={{
              className: 'text-aion-primary-500 font-semibold',
            }}
          >
            Who We Serve
            <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-aion-primary-400 to-aion-secondary-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/resources"
            className="text-gray-700 hover:text-aion-primary-500 transition-all font-medium text-sm relative group"
            activeProps={{
              className: 'text-aion-primary-500 font-semibold',
            }}
          >
            Resources
            <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-aion-primary-400 to-aion-secondary-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-aion-primary-500 transition-all font-medium text-sm relative group"
            activeProps={{
              className: 'text-aion-primary-500 font-semibold',
            }}
          >
            Contact
            <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-aion-primary-400 to-aion-secondary-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/careers"
            className="text-gray-700 hover:text-aion-primary-500 transition-all font-medium text-sm relative group"
            activeProps={{
              className: 'text-aion-primary-500 font-semibold',
            }}
          >
            Careers
            <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-aion-primary-400 to-aion-secondary-500 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden ml-auto"
          aria-label="Open menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>

        {/* Contact Button - Desktop Only */}
        <div className="hidden lg:flex lg:ml-6">
          <a
            href="tel:0124 5823 377"
            className="btn-primary flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
          >
            <Phone size={18} />
            <span>0124 5823 377</span>
          </a>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar with Beautiful Turquoise Gradient */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-aion-primary-500 via-aion-primary-600 to-aion-dark-800 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/aion_logo_blue.png"
              alt="Aion Logo"
              className="h-10 w-auto"
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-6 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all mb-2 group"
            activeProps={{
              className:
                'flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all mb-2 group',
            }}
          >
            <Home size={22} className="group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Home</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all mb-2 group"
            activeProps={{
              className:
                'flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all mb-2 group',
            }}
          >
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            <span className="font-semibold">About Us</span>
          </Link>

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all mb-2 group"
            activeProps={{
              className:
                'flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all mb-2 group',
            }}
          >
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            <span className="font-semibold">Services</span>
          </Link>

          <Link
            to="/clients"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all mb-2 group"
            activeProps={{
              className:
                'flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all mb-2 group',
            }}
          >
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            <span className="font-semibold">Who We Serve</span>
          </Link>

          <Link
            to="/resources"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all mb-2 group"
            activeProps={{
              className:
                'flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all mb-2 group',
            }}
          >
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            <span className="font-semibold">Resources</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all mb-2 group"
            activeProps={{
              className:
                'flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all mb-2 group',
            }}
          >
            <Phone size={22} className="group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Contact</span>
          </Link>

          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all mb-2 group"
            activeProps={{
              className:
                'flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all mb-2 group',
            }}
          >
            <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            <span className="font-semibold">Careers</span>
          </Link>

          {/* Mobile Contact */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <a
              href="tel:0124 5823 377"
              className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-base font-bold"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={20} />
              <span>Call: 0124 5823 377</span>
            </a>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default React.memo(Header)

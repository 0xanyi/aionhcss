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
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  return (
    <>
      <header className="px-6 py-4 flex items-center bg-[#002B7F] text-white shadow-lg fixed w-full top-0 z-40">
        <h1 className="text-xl font-semibold">
          <Link to="/" className="flex items-center">
            <img
              src="/aion_logo_blue.png"
              alt="Aion Health Care Logo"
              className="h-10 w-auto"
              loading="eager"
              fetchPriority="high"
            />
          </Link>
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:ml-auto md:items-center md:space-x-6">
          <Link
            to="/"
            className="text-white hover:text-aion-coral transition-colors font-medium"
            activeProps={{
              className: 'text-aion-coral font-semibold',
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-aion-coral transition-colors font-medium"
            activeProps={{
              className: 'text-aion-coral font-semibold',
            }}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-aion-coral transition-colors font-medium"
            activeProps={{
              className: 'text-aion-coral font-semibold',
            }}
          >
            Services
          </Link>
          <Link
            to="/clients"
            className="text-white hover:text-aion-coral transition-colors font-medium"
            activeProps={{
              className: 'text-aion-coral font-semibold',
            }}
          >
            Who We Serve
          </Link>
          <Link
            to="/resources"
            className="text-white hover:text-aion-coral transition-colors font-medium"
            activeProps={{
              className: 'text-aion-coral font-semibold',
            }}
          >
            Resources
          </Link>
          <Link
            to="/privacy"
            className="text-white hover:text-aion-coral transition-colors font-medium"
            activeProps={{
              className: 'text-aion-coral font-semibold',
            }}
          >
            Privacy
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-aion-coral transition-colors font-medium"
            activeProps={{
              className: 'text-aion-coral font-semibold',
            }}
          >
            Contact
          </Link>
          <Link
            to="/careers"
            className="text-white hover:text-aion-coral transition-colors font-medium"
            activeProps={{
              className: 'text-aion-coral font-semibold',
            }}
          >
            Careers
          </Link>
        </nav>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-aion-navy/90 rounded-lg transition-colors md:hidden ml-auto"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Contact Button - Desktop Only */}
        <div className="hidden md:flex md:ml-6">
          <a
            href="tel:07368195705"
            className="btn-primary flex items-center gap-2 px-4 py-2 text-sm"
          >
            <Phone size={18} />
            <span>07368195705</span>
          </a>
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-[#002B7F] text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-aion-navy/20">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-aion-navy/20 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-aion-navy/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-aion-coral hover:bg-aion-coral/90 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-aion-navy/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-aion-coral hover:bg-aion-coral/90 transition-colors mb-2',
            }}
          >
            <span className="font-medium">About Us</span>
          </Link>

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-aion-navy/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-aion-coral hover:bg-aion-coral/90 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Services</span>
          </Link>

          <Link
            to="/clients"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-aion-navy/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-aion-coral hover:bg-aion-coral/90 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Who We Serve</span>
          </Link>

          <Link
            to="/resources"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-aion-navy/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-aion-coral hover:bg-aion-coral/90 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Resources</span>
          </Link>

          <Link
            to="/privacy"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-aion-navy/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-aion-coral hover:bg-aion-coral/90 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Privacy Policy</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-aion-navy/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-aion-coral hover:bg-aion-coral/90 transition-colors mb-2',
            }}
          >
            <Phone size={20} />
            <span className="font-medium">Contact</span>
          </Link>

          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-aion-navy/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-aion-coral hover:bg-aion-coral/90 transition-colors mb-2',
            }}
          >
            <span className="font-medium">Careers</span>
          </Link>

          {/* Mobile Contact */}
          <div className="mt-4 pt-4 border-t border-aion-navy/20">
            <a
              href="tel:07368195705"
              className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              <span>Call: 07368195705</span>
            </a>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default React.memo(Header)

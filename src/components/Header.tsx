import { Link } from '@tanstack/react-router'
import React, { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  Phone,
  X,
  Heart,
  Stethoscope,
  Shield,
} from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-aion-primary-100'
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-aion-primary-50'
      }`}>
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-aion-primary-500 to-aion-secondary-500 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-aion-navy-700 group-hover:text-aion-primary-600 transition-colors">
                  Aion Healthcare
                </h1>
                <p className="text-xs text-aion-gray-500 -mt-1">Compassionate Care</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Healthcare Professional Style */}
        <nav className="hidden lg:flex lg:ml-auto lg:items-center lg:space-x-1">
          <Link
            to="/"
            className="px-4 py-2 text-aion-gray-700 hover:text-aion-primary-600 hover:bg-aion-primary-50 transition-all font-medium text-sm rounded-lg relative group"
            activeProps={{
              className: 'text-aion-primary-600 bg-aion-primary-50 font-semibold',
            }}
          >
            <div className="flex items-center gap-2">
              <Home size={16} />
              <span>Home</span>
            </div>
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-aion-gray-700 hover:text-aion-primary-600 hover:bg-aion-primary-50 transition-all font-medium text-sm rounded-lg relative group"
            activeProps={{
              className: 'text-aion-primary-600 bg-aion-primary-50 font-semibold',
            }}
          >
            <div className="flex items-center gap-2">
              <Stethoscope size={16} />
              <span>About Us</span>
            </div>
          </Link>
          <Link
            to="/services"
            className="px-4 py-2 text-aion-gray-700 hover:text-aion-primary-600 hover:bg-aion-primary-50 transition-all font-medium text-sm rounded-lg relative group"
            activeProps={{
              className: 'text-aion-primary-600 bg-aion-primary-50 font-semibold',
            }}
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-aion-gray-700 hover:text-aion-primary-600 hover:bg-aion-primary-50 transition-all font-medium text-sm rounded-lg relative group"
            activeProps={{
              className: 'text-aion-primary-600 bg-aion-primary-50 font-semibold',
            }}
          >
            Contact
          </Link>
          <Link
            to="/careers"
            className="px-4 py-2 text-aion-gray-700 hover:text-aion-primary-600 hover:bg-aion-primary-50 transition-all font-medium text-sm rounded-lg relative group"
            activeProps={{
              className: 'text-aion-primary-600 bg-aion-primary-50 font-semibold',
            }}
          >
            Careers
          </Link>
        </nav>

        {/* Trust Badge and Contact - Desktop */}
        <div className="hidden lg:flex lg:items-center lg:ml-6 lg:gap-4">
          <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full border border-green-200">
            <Shield size={16} className="text-green-600" />
            <span className="text-xs font-semibold text-green-700">CQC Registered</span>
          </div>
          <a
            href="tel:0124 5823 377"
            className="flex items-center gap-2 bg-gradient-to-r from-aion-primary-500 to-aion-secondary-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <Phone size={16} />
            <span className="text-sm">0124 5823 377</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-aion-primary-50 rounded-lg transition-colors lg:hidden ml-auto"
          aria-label="Open menu"
        >
          <Menu size={24} className="text-aion-primary-600" />
        </button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar - Healthcare Professional Design */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-aion-primary-100">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-aion-primary-500 to-aion-secondary-500 p-2 rounded-xl">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-aion-navy-700">Aion Healthcare</h2>
              <p className="text-xs text-aion-gray-500">Compassionate Care</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-aion-primary-50 rounded-xl transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-aion-primary-600" />
          </button>
        </div>

        <nav className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center gap-3 bg-green-50 px-4 py-3 rounded-xl border border-green-200 mb-6">
            <Shield size={20} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700">CQC Registered Care Provider</span>
          </div>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-aion-primary-50 transition-all mb-2 group"
            activeProps={{
              className: 'flex items-center gap-4 p-4 rounded-xl bg-aion-primary-100 text-aion-primary-700 transition-all mb-2 group',
            }}
          >
            <Home size={20} className="text-aion-primary-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-aion-gray-700">Home</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-aion-primary-50 transition-all mb-2 group"
            activeProps={{
              className: 'flex items-center gap-4 p-4 rounded-xl bg-aion-primary-100 text-aion-primary-700 transition-all mb-2 group',
            }}
          >
            <Stethoscope size={20} className="text-aion-primary-600" />
            <span className="font-semibold text-aion-gray-700">About Us</span>
          </Link>

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-aion-primary-50 transition-all mb-2 group"
            activeProps={{
              className: 'flex items-center gap-4 p-4 rounded-xl bg-aion-primary-100 text-aion-primary-700 transition-all mb-2 group',
            }}
          >
            <ChevronRight size={20} className="text-aion-primary-600" />
            <span className="font-semibold text-aion-gray-700">Our Services</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-aion-primary-50 transition-all mb-2 group"
            activeProps={{
              className: 'flex items-center gap-4 p-4 rounded-xl bg-aion-primary-100 text-aion-primary-700 transition-all mb-2 group',
            }}
          >
            <Phone size={20} className="text-aion-primary-600" />
            <span className="font-semibold text-aion-gray-700">Contact</span>
          </Link>

          <Link
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-aion-primary-50 transition-all mb-2 group"
            activeProps={{
              className: 'flex items-center gap-4 p-4 rounded-xl bg-aion-primary-100 text-aion-primary-700 transition-all mb-2 group',
            }}
          >
            <ChevronRight size={20} className="text-aion-primary-600" />
            <span className="font-semibold text-aion-gray-700">Careers</span>
          </Link>

          {/* Mobile Contact */}
          <div className="mt-6 pt-6 border-t border-aion-primary-100">
            <a
              href="tel:0124 5823 377"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-aion-primary-500 to-aion-secondary-500 text-white py-4 rounded-xl font-bold text-base shadow-lg"
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

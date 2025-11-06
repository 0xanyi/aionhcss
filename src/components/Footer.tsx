import { Link } from '@tanstack/react-router'
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-aion-gray-200 text-aion-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/aion_logo_blue.png"
                alt="Aion Health Care Logo"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-aion-navy mb-4">Aion Health Care</h3>
              <p className="text-aion-gray-600 leading-relaxed">
                Compassionate care services dedicated to improving lives in Essex and the East of England.
                We believe in treating every client like family.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-aion-coral">🏥</span>
                <span className="text-aion-gray-700">CQC Registered</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-aion-coral">24/7</span>
                <span className="text-aion-gray-700">Support Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-aion-coral">📍</span>
                <span className="text-aion-gray-700">90 Mile Coverage</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-aion-navy mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link 
                to="/" 
                className="block text-aion-gray-600 hover:text-aion-coral transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-aion-gray-600 hover:text-aion-coral transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="block text-aion-gray-600 hover:text-aion-coral transition-colors"
              >
                Our Services
              </Link>
              <Link 
                to="/clients" 
                className="block text-aion-gray-600 hover:text-aion-coral transition-colors"
              >
                Who We Serve
              </Link>
              <Link 
                to="/resources" 
                className="block text-aion-gray-600 hover:text-aion-coral transition-colors"
              >
                Resources
              </Link>
              <Link 
                to="/contact" 
                className="block text-aion-gray-600 hover:text-aion-coral transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/careers" 
                className="block text-aion-gray-600 hover:text-aion-coral transition-colors"
              >
                Careers
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-aion-navy mb-6">Our Services</h4>
            <div className="space-y-3">
              <div className="text-aion-gray-600 text-sm">Personal Care</div>
              <div className="text-aion-gray-600 text-sm">Live-in Care</div>
              <div className="text-aion-gray-600 text-sm">Supported Living</div>
              <div className="text-aion-gray-600 text-sm">Meal Planning</div>
              <div className="text-aion-gray-600 text-sm">Household Tasks</div>
              <div className="text-aion-gray-600 text-sm">Respite Care</div>
              <div className="text-aion-gray-600 text-sm">Medication Management</div>
              <div className="text-aion-gray-600 text-sm">Pet Care Services</div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-aion-navy mb-6">Contact Info</h4>
            <div className="space-y-4">
              {/* Emergency Contact */}
              <div className="bg-aion-coral/10 border border-aion-coral/20 p-4 rounded-aion">
                <div className="flex items-center gap-2 text-aion-coral mb-2">
                  <Phone size={18} />
                  <span className="font-semibold text-sm">24/7 Emergency</span>
                </div>
                <a 
                  href="tel:0124 5823 377"
                  className="text-xl font-bold text-aion-navy hover:text-aion-coral transition-colors"
                >
                  0124 5823 377
                </a>
              </div>

              {/* Regular Contact */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-aion-coral mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-aion-gray-500 text-xs">Email</div>
                    <a 
                      href="mailto:info@aionhcss.com"
                      className="text-aion-gray-700 hover:text-aion-coral transition-colors text-sm"
                    >
                      info@aionhcss.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-aion-coral mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-aion-gray-500 text-xs">Address</div>
                    <div className="text-aion-gray-700 text-sm leading-relaxed">
                      Terriers Retreat, Woods Road<br />
                      Ford End, Chelmsford<br />
                      Essex, CM3 1LJ
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-aion-coral mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-aion-gray-500 text-xs">Office Hours</div>
                    <div className="text-aion-gray-700 text-sm">
                      Mon-Fri: 9AM-5PM<br />
                      Sat: 10AM-2PM<br />
                      Sun: Emergency Only
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="border-t border-aion-gray-200 bg-aion-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-aion-navy mb-4">Service Coverage Areas</h4>
            <p className="text-aion-gray-600 text-sm mb-4">
              We provide care services across a 90-mile radius from our Chelmsford base
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <h5 className="font-semibold text-aion-coral mb-3">Essex Areas</h5>
              <div className="text-aion-gray-600 text-sm space-y-1">
                Chelmsford • Colchester • Southend • Basildon • Brentwood
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-aion-coral mb-3">East England</h5>
              <div className="text-aion-gray-600 text-sm space-y-1">
                Cambridge • Norwich • Ipswich • Peterborough • Bedford
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-aion-gray-200 bg-aion-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-aion-gray-600 text-sm">
              <span>© {currentYear} Aion Health Care & Support Services Ltd.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart size={14} className="text-aion-coral" /> for better care
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-aion-gray-600 hover:text-aion-coral text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-aion-gray-600 hover:text-aion-coral text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

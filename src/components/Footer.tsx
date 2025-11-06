import { Link } from '@tanstack/react-router'
import { Phone, Mail, MapPin, Clock, Heart, Stethoscope, Shield, Award } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-aion-navy-50 to-white text-aion-gray-800 border-t border-aion-primary-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-aion-primary-500 to-aion-secondary-500 p-2 rounded-xl">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-aion-navy-700">Aion Healthcare</h3>
                  <p className="text-xs text-aion-gray-500">Compassionate Care</p>
                </div>
              </div>
              <p className="text-aion-gray-600 leading-relaxed mb-6">
                We're committed to quality senior care. Our team ensures each individual receives 
                compassionate attention, fostering a nurturing environment.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                <Shield size={18} className="text-green-600" />
                <span className="text-green-700 font-semibold text-sm">CQC Registered</span>
              </div>
              <div className="flex items-center gap-3 bg-aion-primary-50 px-3 py-2 rounded-lg border border-aion-primary-200">
                <Clock size={18} className="text-aion-primary-600" />
                <span className="text-aion-primary-700 font-semibold text-sm">24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-3 bg-aion-secondary-50 px-3 py-2 rounded-lg border border-aion-secondary-200">
                <Award size={18} className="text-aion-secondary-600" />
                <span className="text-aion-secondary-700 font-semibold text-sm">15+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-aion-navy mb-6 flex items-center gap-2">
              <Stethoscope size={20} className="text-aion-primary-600" />
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link 
                to="/" 
                className="block text-aion-gray-600 hover:text-aion-primary-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-aion-gray-600 hover:text-aion-primary-600 transition-colors font-medium"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="block text-aion-gray-600 hover:text-aion-primary-600 transition-colors font-medium"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="block text-aion-gray-600 hover:text-aion-primary-600 transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Link 
                to="/careers" 
                className="block text-aion-gray-600 hover:text-aion-primary-600 transition-colors font-medium"
              >
                Careers
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-aion-navy mb-6 flex items-center gap-2">
              <Heart size={20} className="text-aion-secondary-500" />
              Our Services
            </h4>
            <div className="space-y-3">
              <div className="text-aion-gray-600 text-sm font-medium hover:text-aion-primary-600 transition-colors cursor-pointer">Personal Care</div>
              <div className="text-aion-gray-600 text-sm font-medium hover:text-aion-primary-600 transition-colors cursor-pointer">Live-in Care</div>
              <div className="text-aion-gray-600 text-sm font-medium hover:text-aion-primary-600 transition-colors cursor-pointer">Supported Living</div>
              <div className="text-aion-gray-600 text-sm font-medium hover:text-aion-primary-600 transition-colors cursor-pointer">Meal Planning</div>
              <div className="text-aion-gray-600 text-sm font-medium hover:text-aion-primary-600 transition-colors cursor-pointer">Household Tasks</div>
              <div className="text-aion-gray-600 text-sm font-medium hover:text-aion-primary-600 transition-colors cursor-pointer">Respite Care</div>
              <div className="text-aion-gray-600 text-sm font-medium hover:text-aion-primary-600 transition-colors cursor-pointer">Medication Management</div>
              <div className="text-aion-gray-600 text-sm font-medium hover:text-aion-primary-600 transition-colors cursor-pointer">Pet Care Services</div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold text-aion-navy mb-6 flex items-center gap-2">
              <Phone size={20} className="text-aion-primary-600" />
              Contact Info
            </h4>
            <div className="space-y-4">
              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-aion-primary-50 to-aion-primary-100 border border-aion-primary-200 p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 text-aion-primary-600 mb-2">
                  <Phone size={18} />
                  <span className="font-semibold text-sm">24/7 Emergency</span>
                </div>
                <a 
                  href="tel:0124 5823 377"
                  className="text-xl font-bold text-aion-navy-700 hover:text-aion-primary-600 transition-colors"
                >
                  0124 5823 377
                </a>
              </div>

              {/* Regular Contact */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-aion-secondary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-aion-gray-500 text-xs">Email</div>
                    <a 
                      href="mailto:info@aionhcss.com"
                      className="text-aion-gray-700 hover:text-aion-secondary-600 transition-colors text-sm font-medium"
                    >
                      info@aionhcss.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-aion-secondary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-aion-gray-500 text-xs">Address</div>
                    <div className="text-aion-gray-700 text-sm leading-relaxed font-medium">
                      Terriers Retreat, Woods Road<br />
                      Ford End, Chelmsford<br />
                      Essex, CM3 1LJ
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-aion-secondary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-aion-gray-500 text-xs">Office Hours</div>
                    <div className="text-aion-gray-700 text-sm font-medium">
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
      <div className="border-t border-aion-primary-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-bold text-aion-navy mb-4 flex items-center justify-center gap-2">
              <MapPin size={20} className="text-aion-primary-600" />
              Service Coverage Areas
            </h4>
            <p className="text-aion-gray-600 text-sm mb-4 font-medium">
              We provide care services across a 90-mile radius from our Chelmsford base
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-gradient-to-br from-aion-primary-50 to-white p-4 rounded-xl border border-aion-primary-100">
              <h5 className="font-bold text-aion-primary-600 mb-3">Essex Areas</h5>
              <div className="text-aion-gray-700 text-sm space-y-1 font-medium">
                Chelmsford • Colchester • Southend • Basildon • Brentwood
              </div>
            </div>
            <div className="bg-gradient-to-br from-aion-secondary-50 to-white p-4 rounded-xl border border-aion-secondary-100">
              <h5 className="font-bold text-aion-secondary-600 mb-3">East England</h5>
              <div className="text-aion-gray-700 text-sm space-y-1 font-medium">
                Cambridge • Norwich • Ipswich • Peterborough • Bedford
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-aion-primary-100 bg-gradient-to-r from-aion-primary-50 to-aion-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-aion-gray-700 text-sm font-medium">
              <span>© {currentYear} Aion Healthcare & Support Services Ltd.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart size={14} className="text-aion-secondary-500" /> for better care
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-aion-gray-600 hover:text-aion-primary-600 text-sm transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-aion-gray-600 hover:text-aion-primary-600 text-sm transition-colors font-medium"
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

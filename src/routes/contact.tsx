import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { createSEOHead, defaultSEOConfigs } from '../utils/seo'

// Lazy load components for code splitting
const ContactForm = lazy(() => import('../components/ContactForm'))

export const Route = createFileRoute('/contact')({
  head: () => createSEOHead(defaultSEOConfigs.contact),
  component: Contact,
})

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-aion-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading-1 text-aion-navy mb-6">
            Contact Aion Health Care
          </h1>
          <p className="text-body-lg text-aion-gray-700 max-w-4xl mx-auto mb-8">
            We're here to help you find the right care solution. Contact us for personalized
            advice, service inquiries, or to schedule a free consultation with our care team.
          </p>
          
          {/* Quick Contact */}
          <div className="bg-white rounded-aion-lg shadow-aion p-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-aion-coral">
                <span className="text-2xl">📞</span>
                <span className="text-xl font-semibold">07368195705</span>
              </div>
              <span className="text-aion-gray-500">|</span>
              <div className="flex items-center gap-2 text-aion-blue">
                <span className="text-2xl">📧</span>
                <span className="text-lg">info@aionhcss.com</span>
              </div>
              <span className="text-aion-gray-500">|</span>
              <div className="text-center">
                <div className="text-lg font-semibold text-aion-navy">24/7 Support</div>
                <div className="text-sm text-aion-gray-600">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            {/* Primary Contact Methods */}
            <div className="bg-white rounded-aion-lg shadow-aion p-8 mb-8">
              <h2 className="text-heading-2 text-aion-navy mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <ContactMethod
                  icon="📞"
                  title="Phone"
                  contact="07368195705"
                  description="24/7 Support Available"
                  type="phone"
                />
                <ContactMethod
                  icon="📧"
                  title="Email"
                  contact="info@aionhcss.com"
                  description="General inquiries and support"
                  type="email"
                />
                <ContactMethod
                  icon="📍"
                  title="Address"
                  contact="Terriers Retreat, Woods Road, Ford End, Chelmsford, Essex, CM3 1LJ"
                  description="Our Chelmsford base"
                  type="address"
                />
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-aion-blue/10 rounded-aion-lg p-6 mb-8">
              <h3 className="text-heading-3 text-aion-navy mb-4">Office Hours</h3>
              <div className="space-y-2 text-aion-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-aion-coral/20 rounded-aion">
                <div className="flex items-center gap-2 text-aion-coral">
                  <span className="text-lg">🚨</span>
                  <span className="font-semibold">Emergency Support Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-aion-coral/10 rounded-aion-lg p-6">
              <h3 className="text-heading-3 text-aion-navy mb-4 text-center">Service Coverage</h3>
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-aion-coral text-white px-6 py-3 rounded-aion mb-4">
                  <span className="text-xl">📍</span>
                  <span className="text-lg font-semibold">90 Mile Coverage</span>
                </div>
                <p className="text-white/80 mb-4">
                  We provide care services across Essex and the East of England
                </p>
                <a href="#contact-form" className="text-white hover:text-white/80 font-semibold">
                  Check Availability in Your Area →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-aion-lg shadow-aion p-8">
              <h2 className="text-heading-2 text-aion-navy mb-6">Send us a Message</h2>
              <p className="text-body text-aion-gray-600 mb-6">
                Fill out this form and we'll get back to you within 24 hours with personalized
                care recommendations and next steps.
              </p>
              
              <Suspense fallback={<div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-aion-blue"></div></div>}>
                <ContactForm
                  onSuccess={(response) => {
                    // Form submitted successfully
                  }}
                  onError={(error) => {
                    // Form submission error handled
                  }}
                />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Service Area Map Section */}
        <section className="mt-20 bg-aion-blue/10 rounded-aion-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Our Service Area
            </h2>
            <p className="text-body-lg text-aion-gray-700 max-w-3xl mx-auto">
              We provide comprehensive care services across a 90-mile radius from our Chelmsford base,
              serving communities throughout Essex and the East of England.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              {/* Interactive Map Placeholder */}
              <div className="bg-aion-navy/20 rounded-aion-lg p-8 text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-heading-3 text-aion-navy mb-4">Service Coverage Map</h3>
                <p className="text-aion-gray-600 mb-6">
                  Interactive map showing our 90-mile service radius from Chelmsford
                </p>
                <div className="space-y-2 text-sm text-aion-gray-500">
                  <div>📍 90-mile radius coverage</div>
                  <div>🏠 Coming to your home</div>
                  <div>🚗 Mobile care teams</div>
                  <div>📞 24/7 availability</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-aion-lg shadow-aion p-6">
                <h3 className="text-heading-3 text-aion-navy mb-4">Key Service Areas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-aion-navy mb-2">Essex</h4>
                    <ul className="text-sm text-aion-gray-600 space-y-1">
                      <li>• Chelmsford</li>
                      <li>• Colchester</li>
                      <li>• Southend</li>
                      <li>• Basildon</li>
                      <li>• Brentwood</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-aion-navy mb-2">East England</h4>
                    <ul className="text-sm text-aion-gray-600 space-y-1">
                      <li>• Cambridge</li>
                      <li>• Norwich</li>
                      <li>• Ipswich</li>
                      <li>• Peterborough</li>
                      <li>• Bedford</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-aion-coral/20 rounded-aion">
                  <p className="text-aion-coral font-semibold text-center">
                    Not sure if we serve your area? Contact us to confirm availability!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mt-12 bg-aion-coral rounded-aion-lg p-8 text-center">
          <div className="text-white">
            <div className="text-4xl mb-4">🚨</div>
            <h2 className="text-heading-2 mb-4">Emergency Care Needed?</h2>
            <p className="text-lg mb-6 opacity-90">
              For urgent care needs or emergency situations, call us immediately at
              <span className="font-bold">07368195705</span>
            </p>
            <div className="inline-flex items-center gap-4 bg-white/20 rounded-aion px-6 py-3">
              <span className="text-2xl">📞</span>
              <span className="text-xl font-bold">07368195705</span>
              <span className="text-sm opacity-80">Available 24/7</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

/* Component Functions */
interface ContactMethodProps {
  icon: string
  title: string
  contact: string
  description: string
  type: string
}

function ContactMethod({ icon, title, contact, description, type }: ContactMethodProps) {
  const isPhone = type === 'phone'
  const isEmail = type === 'email'
  
  return (
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-aion ${
        isPhone ? 'bg-aion-coral text-white' :
        isEmail ? 'bg-aion-blue text-white' :
        'bg-aion-navy text-white'
      }`}>
        {icon}
      </div>
      <div>
        <h3 className="text-heading-3 text-aion-navy mb-1">{title}</h3>
        {isPhone ? (
          <a href={`tel:${contact}`} className="text-aion-coral hover:text-aion-coral/80 font-semibold text-lg">
            {contact}
          </a>
        ) : isEmail ? (
          <a href={`mailto:${contact}`} className="text-aion-blue hover:text-aion-blue/80 font-semibold">
            {contact}
          </a>
        ) : (
          <p className="text-aion-gray-700">{contact}</p>
        )}
        <p className="text-aion-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  )
}
import { createFileRoute } from '@tanstack/react-router'
import { Heart } from 'lucide-react'
import { createSEOHead, defaultSEOConfigs } from '../utils/seo'

export const Route = createFileRoute('/about')({
  head: () => createSEOHead(defaultSEOConfigs.about),
  component: About,
})

function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-aion-coral/10 border border-aion-coral/20 rounded-full px-6 py-3 mb-8">
              <div className="bg-aion-coral/20 p-1 rounded-full">
                <Heart className="text-aion-coral" size={18} />
              </div>
              <span className="text-aion-coral font-semibold text-sm">About Our Mission</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-aion-navy mb-8 leading-tight">
              About Aion<br />
              <span className="text-gradient bg-gradient-to-r from-aion-coral to-aion-blue">
                Health Care
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-aion-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Compassionate care services dedicated to improving lives in Essex and the East of England.
              <span className="block mt-2 text-aion-gray-600">We believe in treating every client like family and providing the highest quality care that empowers independence and dignity.</span>
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8"> {/* Increased gap */}
            <div className="bg-white px-8 py-4 rounded-aion shadow-aion flex items-center gap-4"> {/* Increased padding and gap */}
              <span className="text-3xl">🏥</span> {/* Increased size */}
              <div>
                <div className="font-semibold text-aion-navy text-lg">CQC Registered</div> {/* Increased size */}
                <div className="text-sm text-aion-gray-600">Quality Assured</div>
              </div>
            </div>
            <div className="bg-white px-8 py-4 rounded-aion shadow-aion flex items-center gap-4">
              <span className="text-3xl">24/7</span> {/* Increased size */}
              <div>
                <div className="font-semibold text-aion-navy text-lg">Support Available</div> {/* Increased size */}
                <div className="text-sm text-aion-gray-600">Always There For You</div>
              </div>
            </div>
            <div className="bg-white px-8 py-4 rounded-aion shadow-aion flex items-center gap-4">
              <span className="text-3xl">📍</span> {/* Increased size */}
              <div>
                <div className="font-semibold text-aion-navy text-lg">90 Mile Coverage</div> {/* Increased size */}
                <div className="text-sm text-aion-gray-600">Serving Essex & East England</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-2 text-aion-navy mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-6 text-body text-aion-gray-700 leading-relaxed">
                <p>
                  Aion Health Care & Support Services Ltd was founded with a vision to provide
                  exceptional, compassionate care services that empower individuals to live
                  independently and with dignity in their own homes.
                </p>
                <p>
                  Our name "Aion" represents eternity and continuity, reflecting our commitment
                  to providing ongoing, reliable care that supports our clients throughout
                  their journey to independence and well-being.
                </p>
                <p>
                  We believe that everyone deserves care that respects their individuality
                  and empowers them to live life to the fullest. Our approach combines
                  professional expertise with genuine compassion to create care plans that
                  truly make a difference.
                </p>
              </div>
            </div>
            <div className="bg-aion-blue/10 rounded-aion-lg p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-aion-coral mb-4">24/7</div>
                <div className="text-aion-navy text-xl font-semibold mb-6">Support Available</div>
                <p className="text-aion-gray-600 mb-6">
                  We're here when you need us most. Our dedicated team provides
                  round-the-clock support to ensure peace of mind for you and your family.
                </p>
                <a href="#contact" className="btn-primary inline-block">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Our Mission & Core Values
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and how we care for our clients and their families
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon="❤️"
              title="Compassion"
              description="Treating every client with empathy, respect, and genuine care. We listen, understand, and respond with kindness."
              details={[
                "Personalized care plans",
                "Respect for individual needs",
                "Emotional support and companionship",
                "Family-centered approach"
              ]}
            />
            <ValueCard
              icon="🏆"
              title="Excellence"
              description="Delivering the highest quality care through continuous improvement and professional development."
              details={[
                "CQC registered and compliant",
                "Ongoing staff training",
                "Quality assurance processes",
                "Evidence-based practices"
              ]}
            />
            <ValueCard
              icon="🤝"
              title="Partnership"
              description="Working together with clients and families as trusted partners in care."
              details={[
                "Collaborative care planning",
                "Regular family communication",
                "Shared decision making",
                "Support and education"
              ]}
            />
            <ValueCard
              icon="🏠"
              title="Independence"
              description="Empowering individuals to live independently with dignity and choice."
              details={[
                "Personalized support plans",
                "Skill development focus",
                "Home-based care preference",
                "Community integration"
              ]}
            />
            <ValueCard
              icon="🔒"
              title="Safety"
              description="Ensuring the highest standards of safety and security for our clients."
              details={[
                "Comprehensive risk assessments",
                "Emergency response protocols",
                "Safe environment standards",
                "Regular safety reviews"
              ]}
            />
            <ValueCard
              icon="🌟"
              title="Integrity"
              description="Operating with honesty, transparency, and ethical principles in all our interactions."
              details={[
                "Clear communication",
                "Honest assessments",
                "Transparent pricing",
                "Professional conduct"
              ]}
            />
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Our Experienced Team
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who bring our mission to life every day
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Leadership Team */}
            <div>
              <div className="bg-white rounded-aion-lg shadow-aion p-8 mb-6">
                <h3 className="text-heading-3 text-aion-navy mb-6 text-center">Leadership Team</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-aion-coral/20 rounded-full flex items-center justify-center">
                      <span className="text-aion-coral font-semibold">O</span>
                    </div>
                    <div>
                      <div className="font-semibold text-aion-navy">Oluwatosin (Director)</div>
                      <div className="text-aion-gray-600 text-sm">10+ Years Healthcare Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-aion-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-aion-blue font-semibold">D</span>
                    </div>
                    <div>
                      <div className="font-semibold text-aion-navy">Dolapo (Director)</div>
                      <div className="text-aion-gray-600 text-sm">8+ Years Care Management</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-aion-navy/5 rounded-aion p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-aion-navy mb-2">18+</div>
                  <div className="text-aion-gray-600 font-semibold">Combined Years Experience</div>
                </div>
              </div>
            </div>

            {/* Care Team */}
            <div>
              <div className="bg-aion-coral/10 rounded-aion-lg p-8">
                <h3 className="text-heading-3 text-aion-navy mb-6 text-center">Our Care Team</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🎓</span>
                    <div>
                      <div className="font-semibold text-aion-navy">Qualified Professionals</div>
                      <div className="text-aion-gray-600 text-sm">All staff are fully trained and certified</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🛡️</span>
                    <div>
                      <div className="font-semibold text-aion-navy">DBS Checked</div>
                      <div className="text-aion-gray-600 text-sm">Enhanced background checks</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">❤️</span>
                    <div>
                      <div className="font-semibold text-aion-navy">Compassionate Care</div>
                      <div className="text-aion-gray-600 text-sm">Genuine care and empathy</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">🔄</span>
                    <div>
                      <div className="font-semibold text-aion-navy">Continuous Training</div>
                      <div className="text-aion-gray-600 text-sm">Ongoing professional development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="bg-aion-blue/10 rounded-aion-lg p-12">
          <div className="text-center mb-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Our Service Area
            </h2>
            <p className="text-body-lg text-aion-gray-700 max-w-3xl mx-auto">
              We provide comprehensive care services across a 90-mile radius from our Chelmsford base,
              serving Essex and the East of England with dedicated local teams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-aion-coral mb-4">90</div>
              <div className="text-aion-navy font-semibold text-lg mb-2">Mile Radius</div>
              <div className="text-aion-gray-600">From Chelmsford Base</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-aion-blue mb-4">📍</div>
              <div className="text-aion-navy font-semibold text-lg mb-2">Chelmsford, Essex</div>
              <div className="text-aion-gray-600">Our Home Base</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-aion-navy mb-4">🚗</div>
              <div className="text-aion-navy font-semibold text-lg mb-2">Mobile Teams</div>
              <div className="text-aion-gray-600">Coming To You</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-aion-gray-600 mb-6">
              "We come to you" - Our mobile teams provide care in the comfort of your own home
              across our entire service area.
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Check Availability in Your Area
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

/* Component Functions */
interface ValueCardProps {
  icon: string
  title: string
  description: string
  details: string[]
}

function ValueCard({ icon, title, description, details }: ValueCardProps) {
  return (
    <div className="card p-6 hover:shadow-aion-lg transition-all duration-300">
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold text-center">{title}</h3>
      <p className="text-body text-aion-gray-600 mb-4 text-center leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-sm text-aion-gray-500 flex items-center gap-2">
            <span className="text-aion-coral">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  )
}
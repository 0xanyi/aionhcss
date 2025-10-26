import { createFileRoute } from '@tanstack/react-router'
import { Phone, ChevronDown, MapPin } from 'lucide-react'
import { createSEOHead, defaultSEOConfigs } from '../utils/seo'
import { initializeWebsite } from '../init'
import { lazy, Suspense } from 'react'

export const Route = createFileRoute('/')({
  head: () => createSEOHead(defaultSEOConfigs.home),
  component: App
})

// Initialize website functionality
initializeWebsite()

function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-aion-blue/10 via-white to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-heading-1 text-aion-navy mb-6 font-black leading-tight"> {/* Increased margin bottom */}
                  Care That Respects, <br />
                  <span className="text-aion-coral">Services That Empower</span>
                </h1>
                <p className="text-body-xl text-aion-gray-700 mb-8 leading-relaxed"> {/* Upgraded to body-xl and increased margin */}
                  24/7 compassionate home care and supported living services in Essex and East England.
                  We provide personalized care that empowers individuals to live independently
                  with dignity and respect.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12"> {/* Increased gap and margin */}
                <div className="bg-aion-coral/20 text-aion-coral px-6 py-3 rounded-aion flex items-center gap-3"> {/* Increased padding and gap */}
                  <span className="text-xl">🏥</span>
                  <span className="font-semibold text-base">CQC Registered</span>
                </div>
                <div className="bg-aion-blue/20 text-aion-blue px-6 py-3 rounded-aion flex items-center gap-3">
                  <span className="text-xl">24/7</span>
                  <span className="font-semibold text-base">Support Available</span>
                </div>
                <div className="bg-aion-navy/20 text-aion-navy px-6 py-3 rounded-aion flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <span className="font-semibold text-base">90 Mile Coverage</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="btn-primary px-8 py-4 text-lg font-semibold hover:shadow-aion-lg transition-all"
                >
                  Get Started Today
                </a>
                <a
                  href="#services"
                  className="btn-outline px-8 py-4 text-lg font-semibold hover:bg-aion-coral hover:text-white transition-all"
                >
                  Learn About Our Services
                </a>
              </div>

              {/* Phone Contact */}
              <div className="mt-6 text-center lg:text-left">
                <a
                  href="tel:07368195705"
                  className="inline-flex items-center gap-2 text-aion-coral hover:text-aion-coral/80 font-semibold text-lg"
                >
                  <Phone size={20} />
                  <span>07368195705</span>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-aion-blue/10 rounded-aion-lg p-8">
                <img
                  src="/hero-image.jpg"
                  alt="Professional caregiver with client"
                  className="w-full h-96 object-cover rounded-aion-lg shadow-aion-lg"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none'
                    const fallback = document.createElement('div')
                    fallback.className = 'w-full h-96 bg-aion-coral/20 rounded-aion-lg flex items-center justify-center'
                    fallback.innerHTML = '<div class="text-center"><span class="text-6xl">🏠</span><p class="text-aion-coral font-semibold mt-4">Compassionate Care</p></div>'
                    e.currentTarget.parentNode?.appendChild(fallback)
                  }}
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <a href="#services" className="flex flex-col items-center text-aion-gray-500 hover:text-aion-coral">
              <ChevronDown size={24} className="animate-bounce" />
              <span className="text-sm font-medium">Explore Our Services</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-white"> {/* Increased py to py-24 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20"> {/* Increased margin */}
            <h2 className="text-heading-2 text-aion-navy mb-6"> {/* Increased margin bottom */}
              Our Comprehensive Services
            </h2>
            <p className="text-body-xl text-aion-gray-600 max-w-3xl mx-auto"> {/* Upgraded to body-xl */}
              We offer a wide range of care services designed to support independence
              and improve quality of life for individuals and families across Essex.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* Increased gap */}
            {/* Service Cards */}
            <ServiceCard
              icon="🏠"
              title="Personal Care"
              description="Assistance with daily living activities including bathing, dressing, and mobility support"
              link="/services#personal-care"
            />
            <ServiceCard
              icon="🛏️"
              title="Live-in Care"
              description="24/7 comprehensive care in the comfort of your own home"
              link="/services#live-in-care"
            />
            <ServiceCard
              icon="🏘️"
              title="Supported Living"
              description="Independence support for children and adults with additional needs"
              link="/services#supported-living"
            />
            <ServiceCard
              icon="🍽️"
              title="Meal Planning"
              description="Nutritious meal preparation tailored to dietary needs and preferences"
              link="/services#meal-planning"
            />
            <ServiceCard
              icon="🧹"
              title="Household Tasks"
              description="Home maintenance and cleaning services to ensure a comfortable living environment"
              link="/services#household-tasks"
            />
            <ServiceCard
              icon="🔄"
              title="Respite Care"
              description="Temporary care to provide relief for family caregivers"
              link="/services#respite-care"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Aion */}
      <section className="py-24 bg-aion-blue/5"> {/* Increased py to py-24 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20"> {/* Increased margin */}
            <h2 className="text-heading-2 text-aion-navy mb-6"> {/* Increased margin bottom */}
              Why Choose Aion Health Care?
            </h2>
            <p className="text-body-xl text-aion-gray-600 max-w-3xl mx-auto"> {/* Upgraded to body-xl */}
              Our commitment to excellence, compassion, and personalized care sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap */}
            <WhyCard
              icon="❤️"
              title="Compassionate Care"
              description="We treat every client with empathy, respect, and genuine care"
            />
            <WhyCard
              icon="🏆"
              title="Quality Excellence"
              description="Delivering the highest quality care through continuous improvement"
            />
            <WhyCard
              icon="🤝"
              title="Partnership Approach"
              description="Working together with clients and families as trusted partners"
            />
            <WhyCard
              icon="24/7"
              title="Always Available"
              description="Round-the-clock support when you need it most"
            />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-white"> {/* Increased py to py-24 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center"> {/* Increased gap */}
            <div>
              <h2 className="text-heading-2 text-aion-navy mb-8"> {/* Increased margin bottom */}
                Serving Essex and East England
              </h2>
              <p className="text-body-xl text-aion-gray-700 mb-10"> {/* Upgraded to body-xl and increased margin */}
                We provide comprehensive care services across a 90-mile radius from
                our Chelmsford base, ensuring that quality care is available when
                and where you need it.
              </p>
              
              <div className="grid grid-cols-3 gap-8 text-center"> {/* Increased gap */}
                <div>
                  <div className="text-4xl font-bold text-aion-coral mb-3">90</div> {/* Increased margin */}
                  <div className="text-aion-gray-600 font-medium">Mile Radius</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-aion-blue mb-3">Chelmsford</div> {/* Increased margin */}
                  <div className="text-aion-gray-600 font-medium">Based in Essex</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-aion-navy mb-3">24/7</div> {/* Increased margin */}
                  <div className="text-aion-gray-600 font-medium">Available</div>
                </div>
              </div>
            </div>
            
            <div className="bg-aion-blue/10 rounded-aion-lg p-8"> {/* Increased padding */}
              <div className="text-center">
                <MapPin size={56} className="text-aion-blue mx-auto mb-6" /> {/* Increased size and margin */}
                <h3 className="text-heading-3 text-aion-navy mb-6">Service Coverage Map</h3> {/* Increased margin */}
                <p className="text-body text-aion-gray-600 mb-8"> {/* Increased margin */}
                  We come to you across Essex and the East of England
                </p>
                <a href="#contact" className="btn-primary inline-block">
                  Check Availability in Your Area
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-aion-coral"> {/* Increased py to py-24 */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-2 text-white mb-8"> {/* Increased margin bottom */}
            Ready to Get Started?
          </h2>
          <p className="text-body-xl text-aion-coral/90 mb-10 max-w-2xl mx-auto"> {/* Upgraded to body-xl and increased margin */}
            Contact us today to discuss your care needs and discover how Aion Health Care
            can support you and your family with compassionate, professional care services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center"> {/* Increased gap */}
            <a href="#contact" className="btn-primary bg-white text-aion-coral hover:bg-gray-50 px-8 py-4">
              Contact Us Today
            </a>
            <a href="tel:07368195705" className="btn-outline text-white border-white hover:bg-white hover:text-aion-coral px-8 py-4">
              Call: 07368195705
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* Component Functions */
interface ServiceCardProps {
  icon: string
  title: string
  description: string
  link: string
}

function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <a href={link} className="card p-8 hover:shadow-aion-lg transition-all duration-300 group block"> {/* Increased padding */}
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div> {/* Increased size and margin */}
      <h3 className="text-heading-3 text-aion-navy mb-4 font-semibold group-hover:text-aion-coral"> {/* Increased margin bottom */}
        {title}
      </h3>
      <p className="text-body text-aion-gray-600 mb-6 leading-relaxed">{description}</p> {/* Increased margin bottom */}
      <span className="text-aion-coral font-medium group-hover:underline">
        Learn More →
      </span>
    </a>
  )
}

interface WhyCardProps {
  icon: string
  title: string
  description: string
}

function WhyCard({ icon, title, description }: WhyCardProps) {
  return (
    <div className="text-center p-8 bg-white rounded-aion-lg hover:shadow-aion transition-all duration-300"> {/* Increased padding */}
      <div className="text-5xl mb-6">{icon}</div> {/* Increased size and margin */}
      <h3 className="text-heading-3 text-aion-navy mb-4 font-semibold">{title}</h3> {/* Increased margin bottom */}
      <p className="text-body text-aion-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

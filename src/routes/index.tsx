import { createFileRoute } from '@tanstack/react-router'
import { Phone, ChevronDown, MapPin, Heart, Home, Users, Utensils, Sparkles, Clock, Award, Shield, CheckCircle, Stethoscope, BedDouble, Building2 } from 'lucide-react'
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
      {/* Modern Hero Section with Background Image */}
      <section className="hero-section">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&h=1080&fit=crop"
          alt="Healthcare professional"
          className="hero-image-overlay"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Shield className="text-white" size={20} />
                <span className="text-white font-medium">CQC Registered Care Provider</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white">
                Care That Respects,<br />
                <span className="bg-gradient-to-r from-aion-coral to-pink-400 bg-clip-text text-transparent">
                  Services That Empower
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                24/7 compassionate home care and supported living services in Essex and East England.
                Personalized care that empowers independence with dignity and respect.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
                <div className="card-glass px-5 py-3 rounded-2xl flex items-center gap-3">
                  <Stethoscope className="text-aion-coral" size={24} />
                  <span className="font-semibold text-white">CQC Registered</span>
                </div>
                <div className="card-glass px-5 py-3 rounded-2xl flex items-center gap-3">
                  <Clock className="text-aion-coral" size={24} />
                  <span className="font-semibold text-white">24/7 Support</span>
                </div>
                <div className="card-glass px-5 py-3 rounded-2xl flex items-center gap-3">
                  <MapPin className="text-aion-coral" size={24} />
                  <span className="font-semibold text-white">90 Mile Coverage</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-8">
                <a
                  href="/contact"
                  className="btn-primary px-10 py-5 text-lg font-bold shadow-2xl"
                >
                  Get Started Today
                </a>
                <a
                  href="#services"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-aion-navy px-10 py-5 text-lg font-bold"
                >
                  Explore Services
                </a>
              </div>

              {/* Phone Contact */}
              <div className="text-center lg:text-left">
                <a
                  href="tel:07368195705"
                  className="inline-flex items-center gap-3 text-white hover:text-aion-coral font-bold text-xl transition-colors"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <span>Call: 07368195705</span>
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="hidden lg:block animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="card-glass p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/50 rounded-2xl">
                    <div className="text-5xl font-black text-aion-coral mb-2">10+</div>
                    <div className="text-sm font-semibold text-aion-navy">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 rounded-2xl">
                    <div className="text-5xl font-black text-aion-blue mb-2">24/7</div>
                    <div className="text-sm font-semibold text-aion-navy">Available</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 rounded-2xl">
                    <div className="text-5xl font-black text-aion-navy mb-2">500+</div>
                    <div className="text-sm font-semibold text-aion-navy">Clients Served</div>
                  </div>
                  <div className="text-center p-6 bg-white/50 rounded-2xl">
                    <div className="text-5xl font-black text-aion-coral mb-2">90</div>
                    <div className="text-sm font-semibold text-aion-navy">Mile Radius</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
            <a href="#services" className="flex flex-col items-center text-white/80 hover:text-white transition-colors animate-float">
              <ChevronDown size={32} />
              <span className="text-sm font-semibold mt-2">Discover More</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview - Modern Design */}
      <section id="services" className="py-32 gradient-soft relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-aion-coral/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aion-blue/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="badge text-sm">Our Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-aion-navy mb-8">
              Comprehensive Care Solutions
            </h2>
            <p className="text-xl text-aion-gray-600 max-w-3xl mx-auto leading-relaxed">
              Personalized services designed to support independence and enhance quality of life
              for individuals and families across Essex and East England.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards with Icons */}
            <ServiceCard
              icon={<Home size={32} />}
              title="Personal Care"
              description="Professional assistance with daily living activities including bathing, dressing, and mobility support"
              link="/services#personal-care"
              color="coral"
            />
            <ServiceCard
              icon={<BedDouble size={32} />}
              title="Live-in Care"
              description="Round-the-clock comprehensive care in the comfort and familiarity of your own home"
              link="/services#live-in-care"
              color="blue"
            />
            <ServiceCard
              icon={<Building2 size={32} />}
              title="Supported Living"
              description="Empowering independence for children and adults with additional care needs"
              link="/services#supported-living"
              color="navy"
            />
            <ServiceCard
              icon={<Utensils size={32} />}
              title="Meal Planning"
              description="Nutritious meal preparation tailored to individual dietary needs and preferences"
              link="/services#meal-planning"
              color="coral"
            />
            <ServiceCard
              icon={<Sparkles size={32} />}
              title="Household Tasks"
              description="Home maintenance and cleaning services ensuring a comfortable living environment"
              link="/services#household-tasks"
              color="blue"
            />
            <ServiceCard
              icon={<Heart size={32} />}
              title="Respite Care"
              description="Temporary professional care providing essential relief for family caregivers"
              link="/services#respite-care"
              color="navy"
            />
          </div>

          <div className="text-center mt-16">
            <a href="/services" className="btn-primary text-lg px-10 py-5">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Aion - Modern Design */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-block mb-4">
                <span className="badge text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-aion-navy mb-6">
                Excellence in Every Aspect of Care
              </h2>
              <p className="text-xl text-aion-gray-600 leading-relaxed mb-8">
                Our unwavering commitment to quality, compassion, and personalized service
                makes us the trusted choice for families across Essex and East England.
              </p>
              <a href="/about" className="btn-primary text-lg px-8 py-4">
                Learn More About Us
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop"
                alt="Caregiver assisting elderly person"
                className="img-modern w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyCard
              icon={<Heart size={32} />}
              title="Compassionate Care"
              description="Every client receives empathetic, respectful, and genuinely caring support"
              color="coral"
            />
            <WhyCard
              icon={<Award size={32} />}
              title="Quality Excellence"
              description="Highest standards maintained through continuous improvement and training"
              color="blue"
            />
            <WhyCard
              icon={<Users size={32} />}
              title="Partnership Approach"
              description="Collaborative relationships with clients and families as trusted partners"
              color="navy"
            />
            <WhyCard
              icon={<Clock size={32} />}
              title="Always Available"
              description="24/7 support ensuring help is there whenever you need it most"
              color="coral"
            />
          </div>
        </div>
      </section>

      {/* Service Area - Modern Design */}
      <section className="py-32 gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="badge text-sm">Service Coverage</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-aion-navy mb-6">
              Serving Essex & East England
            </h2>
            <p className="text-xl text-aion-gray-600 max-w-3xl mx-auto">
              Quality care delivered across a 90-mile radius from our Chelmsford base
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="stat-card">
              <MapPin size={48} className="text-aion-coral mx-auto mb-4" />
              <div className="stat-number">90</div>
              <div className="text-aion-gray-600 font-semibold text-lg">Mile Coverage Radius</div>
            </div>
            <div className="stat-card">
              <Building2 size={48} className="text-aion-blue mx-auto mb-4" />
              <div className="stat-number">500+</div>
              <div className="text-aion-gray-600 font-semibold text-lg">Families Supported</div>
            </div>
            <div className="stat-card">
              <Clock size={48} className="text-aion-navy mx-auto mb-4" />
              <div className="stat-number">24/7</div>
              <div className="text-aion-gray-600 font-semibold text-lg">Always Available</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
                alt="Map of service area"
                className="img-modern w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-aion-navy mb-6">
                Professional Care, Wherever You Are
              </h3>
              <p className="text-lg text-aion-gray-600 mb-6 leading-relaxed">
                Based in Chelmsford, we proudly serve communities throughout Essex and East England.
                Our comprehensive coverage ensures that quality, compassionate care is always within reach.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-aion-coral mt-1 flex-shrink-0" size={24} />
                  <div>
                    <strong className="text-aion-navy">Rapid Response:</strong>
                    <span className="text-aion-gray-600"> Quick assessment and care plan implementation</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-aion-coral mt-1 flex-shrink-0" size={24} />
                  <div>
                    <strong className="text-aion-navy">Local Expertise:</strong>
                    <span className="text-aion-gray-600"> Deep understanding of regional care needs</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-aion-coral mt-1 flex-shrink-0" size={24} />
                  <div>
                    <strong className="text-aion-navy">Flexible Coverage:</strong>
                    <span className="text-aion-gray-600"> Services tailored to your location and schedule</span>
                  </div>
                </div>
              </div>
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Check Your Area
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Modern Design */}
      <section className="cta-section mx-4 sm:mx-6 lg:mx-8 my-20">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Experience Quality Care?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards compassionate, professional care. Contact us today
            to discuss your unique needs and discover how we can support you and your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="btn-primary bg-white text-aion-navy hover:bg-gray-100 px-10 py-5 text-lg font-bold shadow-2xl">
              Get Started Today
            </a>
            <a href="tel:07368195705" className="btn-secondary border-white text-white hover:bg-white hover:text-aion-navy px-10 py-5 text-lg font-bold">
              <Phone size={24} />
              Call: 07368195705
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-medium">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-medium">Quick Response</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* Component Functions */
interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  color: 'coral' | 'blue' | 'navy'
}

function ServiceCard({ icon, title, description, link, color }: ServiceCardProps) {
  const colorClasses = {
    coral: 'text-aion-coral bg-aion-coral/10',
    blue: 'text-aion-blue bg-aion-blue/10',
    navy: 'text-aion-navy bg-aion-navy/10'
  }

  return (
    <a href={link} className="service-card group block">
      <div className="service-card-content">
        <div className={`icon-container ${colorClasses[color]}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-aion-navy mb-4 group-hover:text-aion-coral transition-colors">
          {title}
        </h3>
        <p className="text-aion-gray-600 mb-6 leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-2 text-aion-coral font-semibold group-hover:gap-3 transition-all">
          Learn More
          <ChevronDown size={16} className="rotate-[-90deg]" />
        </span>
      </div>
    </a>
  )
}

interface WhyCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: 'coral' | 'blue' | 'navy'
}

function WhyCard({ icon, title, description, color }: WhyCardProps) {
  const colorClasses = {
    coral: 'text-aion-coral bg-aion-coral/10',
    blue: 'text-aion-blue bg-aion-blue/10',
    navy: 'text-aion-navy bg-aion-navy/10'
  }

  return (
    <div className="card text-center group">
      <div className={`icon-container mx-auto ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-aion-navy mb-4">{title}</h3>
      <p className="text-aion-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

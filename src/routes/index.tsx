import { createFileRoute } from '@tanstack/react-router'
import { Phone, ChevronDown, MapPin, Heart, Home, Users, Utensils, Sparkles, Clock, Award, Shield, CheckCircle, Stethoscope, BedDouble, Building2, ArrowRight } from 'lucide-react'
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
      {/* Stunning Modern Hero Section with Turquoise Gradient */}
      <section className="hero-section relative overflow-hidden min-h-[90vh]">
        {/* Beautiful Turquoise Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-aion-turquoise-600/95 via-aion-teal-500/90 to-aion-navy-500/95"></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 30% 50%, rgba(97, 218, 251, 0.3) 0%, transparent 50%)'}}></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 70% 80%, rgba(36, 123, 160, 0.2) 0%, transparent 50%)'}}></div>

        {/* Stunning Healthcare Hero Image */}
        <img
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&h=1080&fit=crop&q=80"
          alt="Professional healthcare team providing compassionate care"
          className="hero-image-overlay opacity-20"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 animate-scaleIn">
                <div className="bg-white/20 p-1 rounded-full">
                  <Shield className="text-white" size={18} />
                </div>
                <span className="text-white font-semibold text-sm">CQC Registered Care Provider</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-white drop-shadow-lg">
                Care That Respects,<br />
                <span className="text-gradient bg-gradient-to-r from-white via-aion-mint-300 to-aion-turquoise-300">
                  Services That Empower
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl font-medium drop-shadow">
                24/7 compassionate home care and supported living services in Essex and East England.
                <span className="block mt-2 text-white/90 text-lg">Personalized care that empowers independence with dignity and respect.</span>
              </p>

              {/* Enhanced Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
                <div className="card-glass px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/30 hover:border-white/60 transition-all hover:scale-105">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <Stethoscope className="text-white" size={24} />
                  </div>
                  <span className="font-semibold text-white text-lg">CQC Registered</span>
                </div>
                <div className="card-glass px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/30 hover:border-white/60 transition-all hover:scale-105">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <Clock className="text-white" size={24} />
                  </div>
                  <span className="font-semibold text-white text-lg">24/7 Support</span>
                </div>
                <div className="card-glass px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/30 hover:border-white/60 transition-all hover:scale-105">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <span className="font-semibold text-white text-lg">90 Mile Coverage</span>
                </div>
              </div>

              {/* Modern Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-8">
                <a
                  href="/contact"
                  className="group relative px-10 py-5 text-lg font-bold bg-white text-aion-teal-600 rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Today
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-aion-mint-300 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="#services"
                  className="px-10 py-5 text-lg font-bold border-2 border-white text-white hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Explore Services
                  <ChevronDown size={20} />
                </a>
              </div>

              {/* Enhanced Phone Contact */}
              <div className="text-center lg:text-left">
                <a
                  href="tel:07368195705"
                  className="inline-flex items-center gap-3 text-white hover:text-aion-mint-200 font-bold text-xl transition-all duration-300 group"
                >
                  <div className="bg-white/25 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/35 transition-all group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <span className="drop-shadow">Call: 07368195705</span>
                </a>
              </div>
            </div>

            {/* Enhanced Stats Card */}
            <div className="hidden lg:block animate-slideInRight" style={{ animationDelay: '0.3s' }}>
              <div className="card-glass p-8 rounded-3xl animate-scaleIn" style={{ animationDelay: '0.5s' }}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/30 transition-all duration-300">
                    <div className="text-5xl font-black text-white mb-2 animate-glow">10+</div>
                    <div className="text-sm font-semibold text-white/90">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/30 transition-all duration-300">
                    <div className="text-5xl font-black text-white mb-2 animate-glow" style={{ animationDelay: '0.7s' }}>24/7</div>
                    <div className="text-sm font-semibold text-white/90">Available</div>
                  </div>
                  <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/30 transition-all duration-300">
                    <div className="text-5xl font-black text-white mb-2 animate-glow" style={{ animationDelay: '0.9s' }}>500+</div>
                    <div className="text-sm font-semibold text-white/90">Clients Served</div>
                  </div>
                  <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/30 transition-all duration-300">
                    <div className="text-5xl font-black text-white mb-2 animate-glow" style={{ animationDelay: '1.1s' }}>90</div>
                    <div className="text-sm font-semibold text-white/90">Mile Radius</div>
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

      {/* Services Overview - Redesigned with Turquoise Theme */}
      <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-aion-turquoise-50 to-white">
        {/* Beautiful Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-aion-turquoise-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aion-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-aion-mint-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fadeIn">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-aion-turquoise-400 to-aion-teal-500 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg">
                <Sparkles size={16} />
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-aion-navy-500 via-aion-teal-600 to-aion-turquoise-600 bg-clip-text text-transparent mb-8">
              Comprehensive Care Solutions
            </h2>
            <p className="text-xl text-aion-gray-700 max-w-3xl mx-auto leading-relaxed">
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
              color="turquoise"
            />
            <ServiceCard
              icon={<BedDouble size={32} />}
              title="Live-in Care"
              description="Round-the-clock comprehensive care in the comfort and familiarity of your own home"
              link="/services#live-in-care"
              color="teal"
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
              color="mint"
            />
            <ServiceCard
              icon={<Sparkles size={32} />}
              title="Household Tasks"
              description="Home maintenance and cleaning services ensuring a comfortable living environment"
              link="/services#household-tasks"
              color="teal"
            />
            <ServiceCard
              icon={<Heart size={32} />}
              title="Respite Care"
              description="Temporary professional care providing essential relief for family caregivers"
              link="/services#respite-care"
              color="turquoise"
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
              color="turquoise"
            />
            <WhyCard
              icon={<Award size={32} />}
              title="Quality Excellence"
              description="Highest standards maintained through continuous improvement and training"
              color="teal"
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
              color="mint"
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
            <div className="stat-card border border-aion-turquoise-200 hover:border-aion-turquoise-400">
              <div className="bg-gradient-to-br from-aion-turquoise-50 to-aion-turquoise-100 p-4 rounded-2xl inline-block mb-4">
                <MapPin size={48} className="text-aion-turquoise-500" />
              </div>
              <div className="stat-number bg-gradient-to-r from-aion-turquoise-500 to-aion-teal-500 bg-clip-text text-transparent">90</div>
              <div className="text-aion-gray-700 font-semibold text-lg">Mile Coverage Radius</div>
            </div>
            <div className="stat-card border border-aion-teal-200 hover:border-aion-teal-400">
              <div className="bg-gradient-to-br from-aion-teal-50 to-aion-teal-100 p-4 rounded-2xl inline-block mb-4">
                <Building2 size={48} className="text-aion-teal-500" />
              </div>
              <div className="stat-number bg-gradient-to-r from-aion-teal-500 to-aion-navy-500 bg-clip-text text-transparent">500+</div>
              <div className="text-aion-gray-700 font-semibold text-lg">Families Supported</div>
            </div>
            <div className="stat-card border border-aion-navy-200 hover:border-aion-navy-400">
              <div className="bg-gradient-to-br from-aion-navy-50 to-aion-navy-100 p-4 rounded-2xl inline-block mb-4">
                <Clock size={48} className="text-aion-navy-500" />
              </div>
              <div className="stat-number bg-gradient-to-r from-aion-navy-500 to-aion-turquoise-500 bg-clip-text text-transparent">24/7</div>
              <div className="text-aion-gray-700 font-semibold text-lg">Always Available</div>
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

      {/* Stunning Final CTA with Turquoise Gradient */}
      <section className="relative mx-4 sm:mx-6 lg:mx-8 my-20 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aion-turquoise-500 via-aion-teal-600 to-aion-navy-600"></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 30% 50%, rgba(159, 237, 215, 0.2) 0%, transparent 50%)'}}></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 70% 80%, rgba(97, 218, 251, 0.2) 0%, transparent 50%)'}}></div>

        <div className="relative max-w-4xl mx-auto px-8 py-20 text-center z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            Ready to Experience Quality Care?
          </h2>
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Take the first step towards compassionate, professional care. Contact us today
            to discuss your unique needs and discover how we can support you and your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="group relative px-10 py-5 text-lg font-bold bg-white text-aion-teal-600 rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>
            <a href="tel:07368195705" className="px-10 py-5 text-lg font-bold border-2 border-white text-white hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
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
  color: 'turquoise' | 'teal' | 'navy' | 'mint'
}

function ServiceCard({ icon, title, description, link, color }: ServiceCardProps) {
  const colorClasses = {
    turquoise: 'text-aion-turquoise-400 bg-gradient-to-br from-aion-turquoise-50 to-aion-turquoise-100 hover:from-aion-turquoise-100 hover:to-aion-turquoise-200',
    teal: 'text-aion-teal-500 bg-gradient-to-br from-aion-teal-50 to-aion-teal-100 hover:from-aion-teal-100 hover:to-aion-teal-200',
    navy: 'text-aion-navy-500 bg-gradient-to-br from-aion-navy-50 to-aion-navy-100 hover:from-aion-navy-100 hover:to-aion-navy-200',
    mint: 'text-aion-mint-500 bg-gradient-to-br from-aion-mint-50 to-aion-mint-100 hover:from-aion-mint-100 hover:to-aion-mint-200'
  }

  return (
    <a href={link} className="group block bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-aion-turquoise-100 hover:border-aion-turquoise-300">
      <div className="service-card-content">
        <div className={`icon-container mb-6 ${colorClasses[color]} border-2 border-transparent group-hover:border-current/30 group-hover:scale-110 transition-all duration-300`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-aion-navy-700 mb-4 group-hover:text-aion-turquoise-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-aion-gray-600 mb-6 leading-relaxed group-hover:text-aion-gray-700 transition-colors duration-300">{description}</p>
        <div className="flex items-center gap-2 text-aion-turquoise-500 font-semibold group-hover:gap-3 transition-all duration-300">
          <span>Learn More</span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </a>
  )
}

interface WhyCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: 'turquoise' | 'teal' | 'navy' | 'mint'
}

function WhyCard({ icon, title, description, color }: WhyCardProps) {
  const colorClasses = {
    turquoise: 'text-aion-turquoise-500 bg-gradient-to-br from-aion-turquoise-50 to-aion-turquoise-100',
    teal: 'text-aion-teal-500 bg-gradient-to-br from-aion-teal-50 to-aion-teal-100',
    navy: 'text-aion-navy-500 bg-gradient-to-br from-aion-navy-50 to-aion-navy-100',
    mint: 'text-aion-mint-500 bg-gradient-to-br from-aion-mint-50 to-aion-mint-100'
  }

  return (
    <div className="text-center group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-aion-turquoise-100 hover:border-aion-turquoise-300">
      <div className={`icon-container mx-auto mb-6 ${colorClasses[color]} border-2 border-transparent group-hover:border-current/30 group-hover:scale-110 transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-aion-navy-700 mb-4 group-hover:text-aion-turquoise-600 transition-colors duration-300">{title}</h3>
      <p className="text-aion-gray-600 leading-relaxed group-hover:text-aion-gray-700 transition-colors duration-300">{description}</p>
    </div>
  )
}

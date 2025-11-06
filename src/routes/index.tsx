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
      {/* Hero Section - Healthcare Professional Design */}
      <section className="hero-section relative min-h-screen flex items-center pt-20">
        {/* Healthcare Hero Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 43, 127, 0.85), rgba(0, 43, 127, 0.85)), url('https://images.unsplash.com/photo-1559757175-08fd9bb7b2b3?w=1920&h=1080&fit=crop&q=80')`
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-white z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <Shield size={18} className="text-green-300" />
                  <span className="font-semibold text-sm">CQC Registered</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <Heart size={18} className="text-red-300" />
                  <span className="font-semibold text-sm">4.9/5 Star Rating</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <Award size={18} className="text-yellow-300" />
                  <span className="font-semibold text-sm">15+ Years Experience</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Senior Care Is<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aion-secondary-400 to-aion-secondary-300">
                  Our Goal
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
                We're committed to quality senior care. Our team ensures each individual receives 
                compassionate attention, fostering a nurturing environment.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold bg-white text-aion-primary-600 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Book an Appointment
                  <ArrowRight size={20} />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold border-2 border-white text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  About Us
                </a>
              </div>

              {/* Phone */}
              <div>
                <a
                  href="tel:0124 5823 377"
                  className="inline-flex items-center gap-3 text-white/90 hover:text-white font-semibold text-lg transition-colors"
                >
                  <Phone size={22} />
                  <span>Call: 0124 5823 377</span>
                </a>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=800&fit=crop&q=80"
                  alt="Caring healthcare professional"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                {/* Floating Review Cards */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                      alt="Customer review"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Heart key={i} size={14} className="text-red-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-xs text-aion-gray-600">4.9/5 • 47 reviews</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b49c?w=48&h=48&fit=crop&crop=face"
                      alt="Customer review"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Heart key={i} size={14} className="text-red-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-xs text-aion-gray-600">4.9/5 • 26 reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-aion-secondary-400/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Redesigned with New Brand Theme */}
      <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-aion-primary-50 to-white">
        {/* Beautiful Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-aion-primary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aion-secondary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-aion-primary-300/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 animate-fadeIn">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-aion-primary-400 to-aion-secondary-400 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg">
                <Sparkles size={16} />
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-aion-primary-500 via-aion-dark-800 to-aion-secondary-500 bg-clip-text text-transparent mb-8">
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

      {/* Social Proof Section - Reviews and Trust Signals */}
      <section className="py-20 bg-gradient-to-r from-aion-primary-50 to-aion-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aion-navy mb-6">
              Trusted by Families Across Essex
            </h2>
            <p className="text-xl text-aion-gray-600 max-w-3xl mx-auto">
              Real reviews from families who have experienced our compassionate care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Review Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-aion-primary-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                  alt="Customer review"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} size={16} className="text-red-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-aion-gray-600">4.9/5 • 47 reviews</div>
                </div>
              </div>
              <p className="text-aion-gray-700 italic">
                "Aion provided exceptional care for my mother. The team was professional, compassionate, and treated her with utmost respect and dignity."
              </p>
              <div className="text-aion-navy font-semibold mt-4">- Sarah Johnson</div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-aion-secondary-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b49c?w=64&h=64&fit=crop&crop=face"
                  alt="Customer review"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} size={16} className="text-red-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-aion-gray-600">4.9/5 • 26 reviews</div>
                </div>
              </div>
              <p className="text-aion-gray-700 italic">
                "The live-in care service has been life-changing for our family. Professional care that feels like family."
              </p>
              <div className="text-aion-navy font-semibold mt-4">- Michael Roberts</div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-aion-primary-100">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
                  alt="Customer review"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} size={16} className="text-red-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-aion-gray-600">4.9/5 • 31 reviews</div>
                </div>
              </div>
              <p className="text-aion-gray-700 italic">
                "Outstanding support for my father's care needs. The team truly understands dignity and respect in care."
              </p>
              <div className="text-aion-navy font-semibold mt-4">- Emma Williams</div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="text-center">
            <p className="text-aion-gray-600 mb-8 text-lg">
              Trusted by <span className="font-bold text-aion-navy">500+</span> families to empower{' '}
              <span className="font-bold text-aion-navy">2,00,000+</span> people
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['NHS', 'Essex County Council', 'Age UK', 'Care Quality Commission', 'Alzheimer\'s Society'].map((partner) => (
                <div key={partner} className="text-aion-gray-400 font-semibold px-4 py-2 bg-white rounded-lg shadow-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aion-navy mb-6">
              Our Track Record of Excellence
            </h2>
            <p className="text-xl text-aion-gray-600 max-w-3xl mx-auto">
              Years of experience, countless families helped, and trusted centers established
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-aion-primary-50 to-aion-primary-100 p-12 rounded-3xl">
              <div className="text-6xl md:text-7xl font-black text-aion-primary-600 mb-4">15+</div>
              <div className="text-2xl font-bold text-aion-navy mb-2">Years Experience</div>
              <div className="text-aion-gray-600">Dedicated to providing exceptional care</div>
            </div>
            <div className="bg-gradient-to-br from-aion-secondary-50 to-aion-secondary-100 p-12 rounded-3xl">
              <div className="text-6xl md:text-7xl font-black text-aion-secondary-600 mb-4">500+</div>
              <div className="text-2xl font-bold text-aion-navy mb-2">Happy Clients</div>
              <div className="text-aion-gray-600">Families we've supported and empowered</div>
            </div>
            <div className="bg-gradient-to-br from-aion-dark-50 to-aion-dark-100 p-12 rounded-3xl">
              <div className="text-6xl md:text-7xl font-black text-aion-dark-700 mb-4">3</div>
              <div className="text-2xl font-bold text-aion-navy mb-2">Trusted Centers</div>
              <div className="text-aion-gray-600">Locations serving our community</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Process Flow */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aion-navy mb-6">
              How Aion Works
            </h2>
            <p className="text-xl text-aion-gray-600 max-w-3xl mx-auto">
              Simple, clear steps to get you the care you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-aion-primary-400 to-aion-primary-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Stethoscope size={48} className="text-aion-primary-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-aion-navy mb-4">Initial Assessment</h3>
              <p className="text-aion-gray-600 leading-relaxed">
                We conduct a comprehensive assessment of your needs, preferences, and goals to create a personalized care plan
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-aion-secondary-400 to-aion-secondary-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Home size={48} className="text-aion-secondary-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-aion-navy mb-4">Personalized Care Plan</h3>
              <p className="text-aion-gray-600 leading-relaxed">
                Our expert team develops a tailored care strategy that respects your independence while providing essential support
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-aion-dark-500 to-aion-dark-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Heart size={48} className="text-aion-dark-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-aion-navy mb-4">Ongoing Support</h3>
              <p className="text-aion-gray-600 leading-relaxed">
                Continuous monitoring and adjustment of your care plan, with 24/7 support whenever you need it most
              </p>
            </div>
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

      {/* Team Showcase - Meet Our Caring Team */}
      <section className="py-20 bg-gradient-to-br from-aion-primary-50 via-white to-aion-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aion-navy mb-6">
              Meet Our Caring Team
            </h2>
            <p className="text-xl text-aion-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing compassionate, expert care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=128&h=128&fit=crop&crop=face"
                    alt="Dr. Sarah Johnson - Registered Nurse"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-aion-primary-500 text-white p-2 rounded-full">
                    <Stethoscope size={20} />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-aion-navy mb-2">Dr. Sarah Johnson</h3>
              <p className="text-aion-primary-600 font-semibold mb-3">Registered Nurse</p>
              <p className="text-aion-gray-600 text-sm leading-relaxed">
                Over 15 years of experience in elderly care and medical support
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=128&h=128&fit=crop&crop=face"
                    alt="Emma Davis - Care Coordinator"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-aion-secondary-500 text-white p-2 rounded-full">
                    <Users size={20} />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-aion-navy mb-2">Emma Davis</h3>
              <p className="text-aion-secondary-600 font-semibold mb-3">Care Coordinator</p>
              <p className="text-aion-gray-600 text-sm leading-relaxed">
                Specialist in personalized care planning and family support
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=128&h=128&fit=crop&crop=face"
                    alt="Michael Thompson - Senior Care Assistant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-aion-dark-600 text-white p-2 rounded-full">
                    <Heart size={20} />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-aion-navy mb-2">Michael Thompson</h3>
              <p className="text-aion-dark-600 font-semibold mb-3">Senior Care Assistant</p>
              <p className="text-aion-gray-600 text-sm leading-relaxed">
                Expert in live-in care and companionship services
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1594824423026-3fd4d3dcb5d1?w=128&h=128&fit=crop&crop=face"
                    alt="Lisa Anderson - Operations Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-aion-turquoise-500 text-white p-2 rounded-full">
                    <Award size={20} />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-aion-navy mb-2">Lisa Anderson</h3>
              <p className="text-aion-turquoise-600 font-semibold mb-3">Operations Manager</p>
              <p className="text-aion-gray-600 text-sm leading-relaxed">
                Ensuring quality service delivery and client satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aion-navy mb-6">
              What Our Families Say
            </h2>
            <p className="text-xl text-aion-gray-600 max-w-3xl mx-auto">
              Real experiences from families who trust us with their loved ones' care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-aion-primary-50 to-white p-8 rounded-2xl border border-aion-primary-100 shadow-lg">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={20} className="text-red-400 fill-current" />
                ))}
              </div>
              <p className="text-aion-gray-700 italic mb-6 leading-relaxed">
                "Aion provided exceptional care for my mother. The team was professional, compassionate, and treated her with utmost respect and dignity. I highly recommend Aion for top-notch senior care."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-aion-navy">Sarah Johnson</div>
                  <div className="text-sm text-aion-gray-600">Daughter of Client</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-aion-secondary-50 to-white p-8 rounded-2xl border border-aion-secondary-100 shadow-lg">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={20} className="text-red-400 fill-current" />
                ))}
              </div>
              <p className="text-aion-gray-700 italic mb-6 leading-relaxed">
                "The live-in care service has been life-changing for our family. Professional care that feels like family. The team's attention to detail and genuine compassion makes all the difference."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b49c?w=48&h=48&fit=crop&crop=face"
                  alt="Michael Roberts"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-aion-navy">Michael Roberts</div>
                  <div className="text-sm text-aion-gray-600">Son of Client</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-aion-dark-50 to-white p-8 rounded-2xl border border-aion-dark-100 shadow-lg">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} size={20} className="text-red-400 fill-current" />
                ))}
              </div>
              <p className="text-aion-gray-700 italic mb-6 leading-relaxed">
                "Outstanding support for my father's care needs. The team truly understands dignity and respect in care. Their expertise and warmth have given our family peace of mind."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face"
                  alt="Emma Williams"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-aion-navy">Emma Williams</div>
                  <div className="text-sm text-aion-gray-600">Daughter of Client</div>
                </div>
              </div>
            </div>
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
            <div className="stat-card border border-aion-primary-200 hover:border-aion-primary-400">
              <div className="bg-gradient-to-br from-aion-primary-50 to-aion-primary-100 p-4 rounded-2xl inline-block mb-4">
                <MapPin size={48} className="text-aion-primary-500" />
              </div>
              <div className="stat-number bg-gradient-to-r from-aion-primary-500 to-aion-primary-600 bg-clip-text text-transparent">90</div>
              <div className="text-aion-gray-700 font-semibold text-lg">Mile Coverage Radius</div>
            </div>
            <div className="stat-card border border-aion-secondary-200 hover:border-aion-secondary-400">
              <div className="bg-gradient-to-br from-aion-secondary-50 to-aion-secondary-100 p-4 rounded-2xl inline-block mb-4">
                <Building2 size={48} className="text-aion-secondary-500" />
              </div>
              <div className="stat-number bg-gradient-to-r from-aion-secondary-500 to-aion-secondary-600 bg-clip-text text-transparent">500+</div>
              <div className="text-aion-gray-700 font-semibold text-lg">Families Supported</div>
            </div>
            <div className="stat-card border border-aion-dark-200 hover:border-aion-dark-400">
              <div className="bg-gradient-to-br from-aion-dark-50 to-aion-dark-100 p-4 rounded-2xl inline-block mb-4">
                <Clock size={48} className="text-aion-dark-700" />
              </div>
              <div className="stat-number bg-gradient-to-r from-aion-dark-700 to-aion-primary-500 bg-clip-text text-transparent">24/7</div>
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

      {/* Blog Section - Latest Articles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-aion-navy mb-6">
              Latest Care Insights
            </h2>
            <p className="text-xl text-aion-gray-600 max-w-3xl mx-auto">
              Expert advice, tips, and insights to help you and your family navigate care decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Article 1 */}
            <article className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-aion-primary-100 hover:border-aion-primary-300 transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=250&fit=crop"
                  alt="How Aion Support Aging in Place"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-aion-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Care Guide
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-aion-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>By Care Team</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>6 Nov 2024</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-aion-navy mb-3 group-hover:text-aion-primary-600 transition-colors">
                  How Aion Support Aging in Place with Dignity
                </h3>
                <p className="text-aion-gray-600 mb-4 leading-relaxed">
                  Discover how our personalized care services help seniors maintain independence while receiving the support they need...
                </p>
                <a href="/blog/aging-in-place" className="inline-flex items-center gap-2 text-aion-primary-600 font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>

            {/* Blog Article 2 */}
            <article className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-aion-secondary-100 hover:border-aion-secondary-300 transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494756739853-38af1d01c05b?w=400&h=250&fit=crop"
                  alt="Healthy Aging Nutrition Tips"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-aion-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Health & Wellness
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-aion-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>By Care Team</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>4 Nov 2024</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-aion-navy mb-3 group-hover:text-aion-secondary-600 transition-colors">
                  Healthy Aging: Nutrition Tips and Meal Planning
                </h3>
                <p className="text-aion-gray-600 mb-4 leading-relaxed">
                  Learn essential nutrition strategies and meal planning tips to support healthy aging and maintain vitality...
                </p>
                <a href="/blog/healthy-aging-nutrition" className="inline-flex items-center gap-2 text-aion-secondary-600 font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>

            {/* Blog Article 3 */}
            <article className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-aion-dark-100 hover:border-aion-dark-300 transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop"
                  alt="Specialized Care for Seniors"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-aion-dark-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Specialized Care
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-aion-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>By Care Team</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>2 Nov 2024</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-aion-navy mb-3 group-hover:text-aion-dark-600 transition-colors">
                  Specialized Care for Seniors with Dignity and Respect
                </h3>
                <p className="text-aion-gray-600 mb-4 leading-relaxed">
                  Understanding specialized care needs and how to approach them with compassion, expertise, and respect...
                </p>
                <a href="/blog/specialized-care-dignity" className="inline-flex items-center gap-2 text-aion-dark-600 font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <a href="/blog" className="btn-primary text-lg px-10 py-5">
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Stunning Final CTA with Primary Blue Gradient */}
      <section className="relative mx-4 sm:mx-6 lg:mx-8 my-20 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aion-primary-500 via-aion-dark-800 to-aion-primary-600"></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 30% 50%, rgba(0, 0, 113, 0.2) 0%, transparent 50%)'}}></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 70% 80%, rgba(255, 91, 92, 0.2) 0%, transparent 50%)'}}></div>

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
            <a href="tel:0124 5823 377" className="px-10 py-5 text-lg font-bold border-2 border-white text-white hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
              <Phone size={24} />
              Call: 0124 5823 377
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

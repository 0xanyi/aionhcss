import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { createSEOHead, defaultSEOConfigs } from '../utils/seo'

export const Route = createFileRoute('/services')({
  head: () => createSEOHead(defaultSEOConfigs.services),
  component: Services,
})

function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-aion-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading-1 text-aion-navy mb-6">
            Our Comprehensive Services
          </h1>
          <p className="text-body-lg text-aion-gray-700 max-w-4xl mx-auto mb-8">
            We offer a wide range of care services designed to support independence
            and improve quality of life for individuals and families across Essex.
            Our personalized approach ensures that each client receives the exact
            care they need, when they need it.
          </p>
          
          {/* Service Finder */}
          <div className="bg-white rounded-aion-lg shadow-aion p-6 max-w-2xl mx-auto">
            <h3 className="text-heading-3 text-aion-navy mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-body text-aion-gray-600 mb-6">
              Contact us for a free consultation to determine the best care solution for your needs
            </p>
            <a href="#contact" className="btn-primary inline-block">
              Get Personalized Recommendations
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Complete Care Solutions
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              From daily assistance to 24/7 support, we provide comprehensive care services
              that adapt to your changing needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              id="personal-care"
              icon="🏠"
              title="Personal Care"
              description="Assistance with daily living activities including bathing, dressing, and mobility support"
              features={[
                "Hygiene and grooming assistance",
                "Dressing and personal care",
                "Mobility and transfer support",
                "Medication reminders and management",
                "Companionship and social interaction"
              ]}
              priceRange="£25-£35/hour"
            />
            <ServiceCard
              id="live-in-care"
              icon="🛏️"
              title="Live-in Care"
              description="24/7 comprehensive care in the comfort of your own home"
              features={[
                "Round-the-clock support",
                "Meal preparation and nutrition",
                "Household management",
                "Emergency response capabilities",
                "Personalized care plans"
              ]}
              priceRange="From £1,200/week"
            />
            <ServiceCard
              id="supported-living"
              icon="🏘️"
              title="Supported Living"
              description="Independence support for children and adults with additional needs"
              features={[
                "Life skills development",
                "Community integration support",
                "Educational and vocational assistance",
                "Independent living skills",
                "Family and caregiver support"
              ]}
              priceRange="From £1,500/week"
            />
            <ServiceCard
              id="meal-planning"
              icon="🍽️"
              title="Meal Planning & Food Preparation"
              description="Nutritious meal preparation tailored to dietary needs and preferences"
              features={[
                "Personalized meal plans",
                "Special dietary requirements",
                "Grocery shopping and planning",
                "Meal preparation and cooking",
                "Nutritional guidance"
              ]}
              priceRange="From £20/hour"
            />
            <ServiceCard
              id="household-tasks"
              icon="🧹"
              title="Household Tasks & Cleaning"
              description="Home maintenance and cleaning services to ensure a comfortable living environment"
              features={[
                "Light housekeeping and cleaning",
                "Laundry services",
                "Shopping assistance",
                "Home organization and management",
                "Errands and appointments"
              ]}
              priceRange="From £18/hour"
            />
            <ServiceCard
              id="respite-care"
              icon="🔄"
              title="Respite Care"
              description="Temporary care to provide relief for family caregivers"
              features={[
                "Short-term care support",
                "Flexible scheduling",
                "Professional supervision",
                "Family caregiver support",
                "Emergency backup care"
              ]}
              priceRange="From £22/hour"
            />
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Additional Specialized Services
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              We also offer specialized care services to meet specific needs and circumstances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdditionalServiceCard
              icon="💊"
              title="Medication Management"
              description="Professional medication administration and management"
            />
            <AdditionalServiceCard
              icon="🐾"
              title="Pet Care Services"
              description="Care and attention for your beloved pets"
            />
            <AdditionalServiceCard
              icon="🚗"
              title="Transportation Services"
              description="Safe and reliable transportation to appointments and activities"
            />
            <AdditionalServiceCard
              icon="🎉"
              title="Social Event Planning"
              description="Organizing social activities and community engagement"
            />
          </div>
        </section>

        {/* Service Comparison */}
        <section className="mb-20 bg-white rounded-aion-lg shadow-aion p-8">
          <div className="text-center mb-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Service Comparison Guide
            </h2>
            <p className="text-body text-aion-gray-600">
              Compare our core services to find the best fit for your needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-aion-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-aion-navy">Service</th>
                  <th className="text-center py-4 px-6 font-semibold text-aion-navy">Best For</th>
                  <th className="text-center py-4 px-6 font-semibold text-aion-navy">Time Commitment</th>
                  <th className="text-center py-4 px-6 font-semibold text-aion-navy">Cost Range</th>
                  <th className="text-center py-4 px-6 font-semibold text-aion-navy">Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-aion-gray-100 hover:bg-aion-blue/5">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏠</span>
                      <span className="font-semibold text-aion-navy">Personal Care</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">Daily assistance needs</td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">1-4 hours/day</td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">£25-£35/hour</td>
                  <td className="py-4 px-6 text-center">
                    <a href="#contact" className="text-aion-coral hover:text-aion-coral/80 font-semibold">Inquire</a>
                  </td>
                </tr>
                <tr className="border-b border-aion-gray-100 hover:bg-aion-blue/5">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛏️</span>
                      <span className="font-semibold text-aion-navy">Live-in Care</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">24/7 comprehensive support</td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">Full-time</td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">From £1,200/week</td>
                  <td className="py-4 px-6 text-center">
                    <a href="#contact" className="text-aion-coral hover:text-aion-coral/80 font-semibold">Inquire</a>
                  </td>
                </tr>
                <tr className="border-b border-aion-gray-100 hover:bg-aion-blue/5">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏘️</span>
                      <span className="font-semibold text-aion-navy">Supported Living</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">Independence development</td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">Flexible</td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">From £1,500/week</td>
                  <td className="py-4 px-6 text-center">
                    <a href="#contact" className="text-aion-coral hover:text-aion-coral/80 font-semibold">Inquire</a>
                  </td>
                </tr>
                <tr className="border-b border-aion-gray-100 hover:bg-aion-blue/5">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🍽️</span>
                      <span className="font-semibold text-aion-navy">Meal Planning</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">Nutritional support</td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">As needed</td>
                  <td className="py-4 px-6 text-center text-aion-gray-600">From £20/hour</td>
                  <td className="py-4 px-6 text-center">
                    <a href="#contact" className="text-aion-coral hover:text-aion-coral/80 font-semibold">Inquire</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Getting Started */}
        <section className="bg-aion-coral/10 rounded-aion-lg p-12">
          <div className="text-center mb-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Getting Started with Our Services
            </h2>
            <p className="text-body-lg text-aion-gray-700 max-w-3xl mx-auto">
              Our simple 4-step process ensures you receive the right care, quickly and efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <StepCard
              number="1"
              title="Initial Consultation"
              description="Free assessment of your care needs and preferences"
            />
            <StepCard
              number="2"
              title="Care Plan Development"
              description="Personalized plan created by our experienced team"
            />
            <StepCard
              number="3"
              title="Staff Matching"
              description="Caregiver selected based on your specific requirements"
            />
            <StepCard
              number="4"
              title="Service Commencement"
              description="Care begins with ongoing support and adjustments"
            />
          </div>
          
          <div className="text-center">
            <a href="#contact" className="btn-primary inline-block px-8 py-4 text-lg">
              Start Your Care Journey Today
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

/* Component Functions */
interface ServiceCardProps {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  priceRange: string
}

const ServiceCard = React.memo(function ServiceCard({ id, icon, title, description, features, priceRange }: ServiceCardProps) {
  return (
    <a
      href={`#${id}`}
      className="card p-6 hover:shadow-aion-lg transition-all duration-300 group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">{icon}</div>
      <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold group-hover:text-aion-coral text-center">
        {title}
      </h3>
      <p className="text-body text-aion-gray-600 mb-4 leading-relaxed text-center">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-aion-navy mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-aion-gray-500 flex items-center gap-2">
              <span className="text-aion-coral">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="text-center">
        <div className="text-aion-coral font-semibold text-lg mb-4">{priceRange}</div>
        <span className="text-aion-coral font-medium group-hover:underline">
          Learn More →
        </span>
      </div>
    </a>
  )
})

interface AdditionalServiceCardProps {
  icon: string
  title: string
  description: string
}

const AdditionalServiceCard = React.memo(function AdditionalServiceCard({ icon, title, description }: AdditionalServiceCardProps) {
  return (
    <div className="card p-6 text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold">{title}</h3>
      <p className="text-body text-aion-gray-600">{description}</p>
    </div>
  )
})

interface StepCardProps {
  number: string
  title: string
  description: string
}

const StepCard = React.memo(function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-aion-lg shadow-aion">
      <div className="text-2xl font-bold text-aion-coral mb-4 bg-aion-coral/20 rounded-aion w-12 h-12 flex items-center justify-center mx-auto">
        {number}
      </div>
      <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold">{title}</h3>
      <p className="text-body text-aion-gray-600 leading-relaxed">{description}</p>
    </div>
  )
})
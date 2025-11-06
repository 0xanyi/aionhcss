import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import { Link } from '@tanstack/react-router'
import {
  Heart,
  Users,
  Shield,
  Baby,
  UserCheck,
  Clock,
  Home,
  Stethoscope,
  Brain,
  User,
  HeartHandshake,
  ArrowRight,
  Phone,
} from 'lucide-react'
import SEO from '../components/SEO'

const Clients = () => {
  return (
    <>
      <SEO 
        title="Who We Serve - Aion Health Care" 
        description="Comprehensive care services for elderly, dementia care, disability support, children's services, and family caregiver support in Essex and East England."
      />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-aion-navy-50 to-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-aion-navy-900 mb-6">
            Who We Serve
          </h1>
          <p className="text-body-lg text-aion-gray-600 mb-8 max-w-3xl mx-auto">
            Providing compassionate, personalized care across all ages and needs. 
            From elderly care to children's services, we're here to support you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0124 5823 377" className="btn-primary">
              <Phone size={20} />
              Call: 0124 5823 377
            </a>
            <Link to="/contact" className="btn-secondary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Client Categories Grid */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 text-aion-navy-900 mb-4">
              Specialized Care for Every Stage of Life
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Our experienced team provides tailored care solutions for individuals across all age groups and care needs, 
              always maintaining the highest standards of compassion and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Elderly Care */}
            <div className="card p-8 hover:shadow-aion-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-aion-coral-100 p-3 rounded-lg mr-4">
                  <Heart className="w-8 h-8 text-aion-coral-600" />
                </div>
                <h3 className="text-heading-3 text-aion-navy-900">Elderly Care (65+)</h3>
              </div>
              <p className="text-aion-gray-600 mb-6">
                Compassionate support for seniors to maintain independence while receiving essential care services in the comfort of their own homes.
              </p>
              <ul className="space-y-3 text-aion-gray-600">
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Age-related care needs
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Maintaining independence at home
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Family support and involvement
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Safety and mobility considerations
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Social isolation prevention
                </li>
              </ul>
            </div>

            {/* Dementia & Alzheimer's Support */}
            <div className="card p-8 hover:shadow-aion-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-aion-blue-100 p-3 rounded-lg mr-4">
                  <Brain className="w-8 h-8 text-aion-blue-600" />
                </div>
                <h3 className="text-heading-3 text-aion-navy-900">Dementia & Alzheimer's Support</h3>
              </div>
              <p className="text-aion-gray-600 mb-6">
                Specialized memory care approaches with trained professionals who understand the unique challenges of dementia care.
              </p>
              <ul className="space-y-3 text-aion-gray-600">
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Specialized memory care approaches
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Family caregiver education
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Safety modifications and protocols
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Progressive care planning
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Professional training and expertise
                </li>
              </ul>
            </div>

            {/* Disability Support */}
            <div className="card p-8 hover:shadow-aion-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <User className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-heading-3 text-aion-navy-900">Disability Support</h3>
              </div>
              <p className="text-aion-gray-600 mb-6">
                Comprehensive support for individuals with physical disabilities, focusing on independence and accessibility.
              </p>
              <ul className="space-y-3 text-aion-gray-600">
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Physical disability assistance
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Adaptive equipment use
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Accessibility accommodations
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Independence skill building
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Vocational support services
                </li>
              </ul>
            </div>

            {/* Children's Services */}
            <div className="card p-8 hover:shadow-aion-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Baby className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-heading-3 text-aion-navy-900">Children's Services (0-17 years)</h3>
              </div>
              <p className="text-aion-gray-600 mb-6">
                Age-appropriate care and support for children with diverse needs, working closely with families.
              </p>
              <ul className="space-y-3 text-aion-gray-600">
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Age-appropriate care approaches
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Family-centered care model
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Educational support integration
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Social skill development
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Transition planning to adult services
                </li>
              </ul>
            </div>

            {/* Family Caregiver Support */}
            <div className="card p-8 hover:shadow-aion-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <HeartHandshake className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-heading-3 text-aion-navy-900">Family Caregiver Support</h3>
              </div>
              <p className="text-aion-gray-600 mb-6">
                Supporting family members who provide care, offering respite and guidance to prevent caregiver burnout.
              </p>
              <ul className="space-y-3 text-aion-gray-600">
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Respite care options
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Caregiver burnout prevention
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Family education and training
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Emergency backup planning
                </li>
                <li className="flex items-start">
                  <ArrowRight size={16} className="text-aion-coral-500 mt-1 mr-2 flex-shrink-0" />
                  Support group resources
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Journey Examples */}
      <section className="section bg-aion-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading-2 text-aion-navy-900 mb-4">
              Real Client Journeys
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Every care journey is unique. Here are some examples of how we've supported families through different transitions and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hospital Discharge Journey */}
            <div className="card p-8 bg-white">
              <div className="flex items-center mb-6">
                <div className="bg-aion-coral-100 p-3 rounded-lg mr-4">
                  <Home className="w-8 h-8 text-aion-coral-600" />
                </div>
                <h3 className="text-heading-3 text-aion-navy-900">From Hospital to Home</h3>
              </div>
              <p className="text-aion-gray-600 mb-6">
                Supporting recovery and adjustment after hospital discharge with comprehensive home care coordination.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-aion-gray-500">
                  <Clock size={16} className="mr-2" />
                  <span>Typical journey: 4-8 weeks</span>
                </div>
                <p className="text-sm text-aion-gray-600">
                  <strong>Outcome:</strong> Successful transition with reduced readmission risk and improved confidence for both client and family.
                </p>
              </div>
            </div>

            {/* Supported Living Journey */}
            <div className="card p-8 bg-white">
              <div className="flex items-center mb-6">
                <div className="bg-aion-blue-100 p-3 rounded-lg mr-4">
                  <Users className="w-8 h-8 text-aion-blue-600" />
                </div>
                <h3 className="text-heading-3 text-aion-navy-900">Getting Started with Supported Living</h3>
              </div>
              <p className="text-aion-gray-600 mb-6">
                Helping individuals develop independence skills while maintaining the support they need for daily living.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-aion-gray-500">
                  <Clock size={16} className="mr-2" />
                  <span>Typical journey: 3-6 months</span>
                </div>
                <p className="text-sm text-aion-gray-600">
                  <strong>Outcome:</strong> Increased independence and confidence with ongoing support tailored to individual goals.
                </p>
              </div>
            </div>

            {/* Dementia Care Journey */}
            <div className="card p-8 bg-white">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Stethoscope className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-heading-3 text-aion-navy-900">Caring for a Parent with Dementia</h3>
              </div>
              <p className="text-aion-gray-600 mb-6">
                Providing specialized memory care while supporting the entire family through the dementia journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-aion-gray-500">
                  <Clock size={16} className="mr-2" />
                  <span>Ongoing support</span>
                </div>
                <p className="text-sm text-aion-gray-600">
                  <strong>Outcome:</strong> Improved quality of life for both parent and family, with educational support throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-aion-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-body-lg mb-8 text-aion-navy-100">
            Every person and situation is unique. Let's discuss your specific needs and create a personalized care plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0124 5823 377" className="btn-primary">
              <Phone size={20} />
              Call: 0124 5823 377
            </a>
            <Link to="/contact" className="btn-outline">
              Contact Us Today
            </Link>
          </div>
          <p className="text-sm text-aion-navy-200 mt-6">
            Available 24/7 for emergencies and support
          </p>
        </div>
      </section>
    </>
  )
}

export default Clients

export const Route = createFileRoute('/clients')({
  component: Clients,
})

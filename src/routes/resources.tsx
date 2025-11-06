import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { createSEOHead, defaultSEOConfigs } from '../utils/seo'

// Lazy load components for code splitting
const AssessmentForm = lazy(() => import('../components/AssessmentForm'))

export const Route = createFileRoute('/resources')({
  head: () => createSEOHead(defaultSEOConfigs.resources),
  component: Resources,
})

function Resources() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-aion-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading-1 text-aion-navy mb-6">
            Resources & Support
          </h1>
          <p className="text-body-lg text-aion-gray-700 max-w-4xl mx-auto mb-8">
            Find helpful information, guides, and support resources to assist you in making 
            informed decisions about care services for yourself or your loved ones.
          </p>
          
          {/* Quick Links */}
          <div className="bg-white rounded-aion-lg shadow-aion p-6 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <a href="#faq" className="text-aion-coral hover:text-aion-coral/80 font-semibold">
                  📋 Frequently Asked Questions
                </a>
              </div>
              <div className="text-center">
                <a href="#guides" className="text-aion-blue hover:text-aion-blue/80 font-semibold">
                  📖 Care Guides & Downloads
                </a>
              </div>
              <div className="text-center">
                <a href="#contact" className="text-aion-navy hover:text-aion-navy/80 font-semibold">
                  📞 Contact Us for Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* FAQ Section */}
        <section id="faq" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, care process, and what to expect
            </p>
          </div>
          
          <div className="space-y-6">
            <FAQItem
              question="What services do you provide?"
              answer="We offer comprehensive care services including Personal Care, Live-in Care, Supported Living, Meal Planning & Food Preparation, Household Tasks & Cleaning, Respite Care, Medication Management, and Pet Care Services. Our services are designed to support independence and improve quality of life for individuals and families across Essex and the East of England."
            />
            <FAQItem
              question="How much does home care cost?"
              answer="Our pricing varies based on the type and frequency of services needed. Personal Care starts at £25/hour, Live-in Care from £1,200/week, and Supported Living from £1,500/week. We provide transparent pricing and can create a customized care plan that fits your budget and needs."
            />
            <FAQItem
              question="How do I get started with services?"
              answer="Getting started is easy! Contact us for a free consultation where we'll assess your needs, discuss your preferences, and create a personalized care plan. Our team will then match you with the right caregiver and begin services at your convenience."
            />
            <FAQItem
              question="What areas do you serve?"
              answer="We provide care services across a 90-mile radius from our Chelmsford base, serving Essex and the East of England. This includes Chelmsford, Colchester, Southend, Basildon, Brentwood, Cambridge, Norwich, Ipswich, Peterborough, and Bedford. Contact us to confirm availability in your specific area."
            />
            <FAQItem
              question="Are your staff qualified and insured?"
              answer="Absolutely! All our care staff are fully qualified with NVQ Level 2 or 3 in Health & Social Care, hold valid DBS checks, are fully insured, and receive ongoing training. We maintain the highest standards of professionalism and care quality, and we're CQC registered for your peace of mind."
            />
            <FAQItem
              question="How do you match care workers to clients?"
              answer="We use a comprehensive matching process that considers your care needs, personality, preferences, and location. Our team carefully selects caregivers who have the right skills, experience, and personal qualities to provide the best possible care and build a positive relationship with you and your family."
            />
            <FAQItem
              question="What happens in an emergency?"
              answer="We provide 24/7 emergency support. If you need urgent assistance, call us immediately at 0124 5823 377. Our emergency response team is available around the clock to provide immediate help and coordinate additional support as needed."
            />
            <FAQItem
              question="Can services be changed or cancelled?"
              answer="Yes, we understand that care needs can change. You can modify or cancel services with appropriate notice. We work flexibly to accommodate changing circumstances and ensure you always have the right level of support when you need it."
            />
          </div>
        </section>

        {/* Care Guides Section */}
        <section id="guides" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Care Guides & Resources
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Download helpful guides and resources to learn more about care options and support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Getting Started with Home Care"
              description="A comprehensive guide for families new to home care services"
              type="Guide"
              downloadLink="#"
              icon="📖"
            />
            <ResourceCard
              title="Care Assessment Process"
              description="Understanding how we assess care needs and develop personalized plans"
              type="Information"
              downloadLink="#"
              icon="📋"
            />
            <ResourceCard
              title="Rights and Responsibilities"
              description="Your rights as a care recipient and our responsibilities as providers"
              type="Document"
              downloadLink="#"
              icon="⚖️"
            />
            <ResourceCard
              title="Emergency Procedures"
              description="What to do in emergency situations and how to get immediate help"
              type="Handbook"
              downloadLink="#"
              icon="🚨"
            />
            <ResourceCard
              title="Family Communication Best Practices"
              description="Tips for effective communication between families and care providers"
              type="Guide"
              downloadLink="#"
              icon="👨‍👩‍👧‍👦"
            />
            <ResourceCard
              title="Care Planning Worksheet"
              description="A practical tool to help plan and organize care needs"
              type="Worksheet"
              downloadLink="#"
              icon="📝"
            />
          </div>
        </section>

        {/* News & Updates */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              News & Updates
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Stay informed about our company news, care industry updates, and helpful articles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NewsCard
              title="Aion Health Care Launches New Services"
              date="October 2025"
              excerpt="We're excited to announce the expansion of our service offerings to better serve the Essex community with enhanced care options."
              category="Company News"
            />
            <NewsCard
              title="Understanding the Care Quality Commission (CQC)"
              date="September 2025"
              excerpt="Learn about the importance of CQC registration and how it ensures quality care standards for your loved ones."
              category="Care Information"
            />
            <NewsCard
              title="Seasonal Care Tips: Winter Safety"
              date="December 2025"
              excerpt="Essential tips for keeping your loved ones safe and comfortable during the winter months."
              category="Seasonal Tips"
            />
          </div>
        </section>

        {/* Assessment Tools */}
        <section className="bg-aion-blue/10 rounded-aion-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Assessment & Feedback Tools
            </h2>
            <p className="text-body-lg text-aion-gray-700 max-w-3xl mx-auto">
              Use our online tools to assess care needs and provide feedback on our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-aion-lg p-6 shadow-aion">
              <div className="text-3xl mb-4 text-center">📋</div>
              <h3 className="text-heading-3 text-aion-navy mb-3 text-center font-semibold">
                Initial Care Needs Assessment
              </h3>
              <p className="text-body text-aion-gray-600 mb-4 text-center">
                Complete our online assessment to determine the right level of care for your needs
              </p>
              <div className="text-center">
                <a href="#care-assessment" className="btn-primary inline-block">
                  Start Assessment
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-aion-lg p-6 shadow-aion">
              <div className="text-3xl mb-4 text-center">📝</div>
              <h3 className="text-heading-3 text-aion-navy mb-3 text-center font-semibold">
                Feedback & Review Submission
              </h3>
              <p className="text-body text-aion-gray-600 mb-4 text-center">
                Share your experience with our services to help us improve and support others
              </p>
              <div className="text-center">
                <a href="#contact" className="btn-outline inline-block">
                  Submit Feedback
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Care Assessment Form */}
        <section id="care-assessment" className="mt-16 bg-white rounded-aion-lg p-8 shadow-aion">
          <div className="text-center mb-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Care Needs Assessment
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Complete this assessment form to help us understand your care needs and provide personalized recommendations
            </p>
          </div>
          
          <Suspense fallback={<div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-aion-blue"></div></div>}>
            <AssessmentForm
              onSuccess={(response) => {
                // Assessment submitted successfully
              }}
              onError={(error) => {
                // Assessment submission error handled
              }}
            />
          </Suspense>
        </section>
      </div>
    </div>
  )
}

/* Component Functions */
interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="card p-6">
      <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">{question}</h3>
      <p className="text-body text-aion-gray-700 leading-relaxed">{answer}</p>
    </div>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  type: string
  downloadLink: string
  icon: string
}

function ResourceCard({ title, description, type, downloadLink, icon }: ResourceCardProps) {
  return (
    <a href={downloadLink} className="card p-6 hover:shadow-aion-lg transition-all duration-300 block">
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold text-center">{title}</h3>
      <p className="text-body text-aion-gray-600 mb-3 leading-relaxed text-center">{description}</p>
      <div className="text-center">
        <span className="bg-aion-coral/20 text-aion-coral px-3 py-1 rounded-full text-sm">
          {type}
        </span>
      </div>
    </a>
  )
}

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  category: string
}

function NewsCard({ title, date, excerpt, category }: NewsCardProps) {
  return (
    <div className="card p-6">
      <div className="flex justify-between items-start mb-2">
        <span className="bg-aion-blue/20 text-aion-blue px-2 py-1 rounded text-xs font-semibold">
          {category}
        </span>
        <span className="text-aion-gray-500 text-sm">{date}</span>
      </div>
      <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold">{title}</h3>
      <p className="text-body text-aion-gray-600 mb-4 leading-relaxed">{excerpt}</p>
      <a href="#contact" className="text-aion-coral hover:text-aion-coral/80 font-semibold">
        Read More →
      </a>
    </div>
  )
}
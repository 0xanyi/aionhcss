import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { createSEOHead, defaultSEOConfigs } from '../utils/seo'

// Lazy load components for code splitting
const ApplicationForm = lazy(() => import('../components/ApplicationForm'))

export const Route = createFileRoute('/careers')({
  head: () => createSEOHead(defaultSEOConfigs.careers),
  component: Careers,
})

function Careers() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-aion-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading-1 text-aion-navy mb-6">
            Join Our Caring Team
          </h1>
          <p className="text-body-lg text-aion-gray-700 max-w-4xl mx-auto mb-8">
            Be part of a compassionate team dedicated to making a difference in people's lives.
            At Aion Health Care, we offer meaningful work, excellent benefits, and opportunities
            for growth in a supportive and professional environment.
          </p>
          
          {/* Quick Stats */}
          <div className="bg-white rounded-aion-lg shadow-aion p-6 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-aion-coral mb-2">18+</div>
                <div className="text-aion-gray-600">Combined Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-aion-blue mb-2">CQC</div>
                <div className="text-aion-gray-600">Registered & Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-aion-navy mb-2">90</div>
                <div className="text-aion-gray-600">Mile Service Area</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-aion-coral mb-2">24/7</div>
                <div className="text-aion-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Work With Us */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Why Choose Aion Health Care?
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              We're more than just a workplace - we're a community dedicated to compassionate care
              and professional excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <WhyWorkCard
              icon="❤️"
              title="Meaningful Impact"
              description="Make a real difference in people's lives every day through compassionate care"
              details={[
                "Direct client impact",
                "Family gratitude and appreciation",
                "Personal fulfillment",
                "Community contribution"
              ]}
            />
            <WhyWorkCard
              icon="🎓"
              title="Professional Growth"
              description="Comprehensive training and career progression opportunities"
              details={[
                "Ongoing training programs",
                "Certification support",
                "Career advancement paths",
                "Skill development"
              ]}
            />
            <WhyWorkCard
              icon="💰"
              title="Competitive Compensation"
              description="Attractive salary packages and comprehensive benefits"
              details={[
                "Competitive pay rates",
                "Health insurance",
                "Pension scheme",
                "Performance bonuses"
              ]}
            />
            <WhyWorkCard
              icon="🤝"
              title="Supportive Environment"
              description="Join a caring, professional, and supportive work community"
              details={[
                "Team collaboration",
                "Mentorship programs",
                "Regular supervision",
                "Peer support"
              ]}
            />
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Current Career Opportunities
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role to start your journey
              with Aion Health Care
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Care Worker Position */}
            <JobListing
              title="Care Worker"
              department="Direct Care"
              location="Chelmsford, Essex"
              type="Full-time"
              salary="£18,000 - £22,000 per year"
              description="Provide compassionate care and support to clients in their homes, helping them maintain independence and dignity"
              responsibilities={[
                "Provide personal care and support",
                "Assist with daily living activities",
                "Build meaningful relationships with clients",
                "Follow care plans and protocols",
                "Maintain accurate records",
                "Communicate with families and supervisors"
              ]}
              requirements={[
                "NVQ Level 2 in Health & Social Care (or equivalent)",
                "Valid DBS check",
                "Driving license preferred",
                "Compassionate and patient-focused approach",
                "Excellent communication skills"
              ]}
              benefits={[
                "Comprehensive training program",
                "Ongoing supervision and support",
                "Flexible working hours",
                "Travel allowance",
                "Career progression opportunities"
              ]}
            />

            {/* Senior Care Assistant */}
            <JobListing
              title="Senior Care Assistant"
              department="Direct Care"
              location="Chelmsford, Essex"
              type="Full-time"
              salary="£22,000 - £26,000 per year"
              description="Lead and support care teams with advanced responsibilities, ensuring high-quality care delivery"
              responsibilities={[
                "Supervise and mentor care worker teams",
                "Develop and implement care plans",
                "Train and onboard new staff",
                "Ensure quality standards and compliance",
                "Handle complex care situations",
                "Liaise with families and healthcare professionals"
              ]}
              requirements={[
                "NVQ Level 3 in Health & Social Care",
                "2+ years care experience",
                "Valid DBS check",
                "Leadership experience preferred",
                "Excellent organizational skills"
              ]}
              benefits={[
                "Leadership development program",
                "Higher responsibility and impact",
                "Enhanced training opportunities",
                "Career progression to management",
                "Competitive salary and benefits"
              ]}
            />

            {/* Care Coordinator */}
            <JobListing
              title="Care Coordinator"
              department="Operations"
              location="Chelmsford, Essex"
              type="Full-time"
              salary="£20,000 - £24,000 per year"
              description="Coordinate care services and support our clients and staff, ensuring seamless care delivery"
              responsibilities={[
                "Schedule and coordinate care visits",
                "Communicate with clients and families",
                "Support care workers in the field",
                "Manage care records and documentation",
                "Handle client inquiries and concerns",
                "Ensure service quality and compliance"
              ]}
              requirements={[
                "NVQ Level 3 in Health & Social Care",
                "Excellent organizational skills",
                "Strong communication abilities",
                "Valid DBS check",
                "Experience in care coordination preferred"
              ]}
              benefits={[
                "Office-based role with field visits",
                "Professional development opportunities",
                "Team leadership experience",
                "Comprehensive benefits package",
                "Career growth potential"
              ]}
            />

            {/* Administrative Support */}
            <JobListing
              title="Administrative Support Officer"
              department="Administration"
              location="Chelmsford, Essex"
              type="Part-time/Full-time"
              salary="£16,000 - £20,000 per year"
              description="Provide essential administrative support to ensure smooth operations and excellent client service"
              responsibilities={[
                "Answer phones and respond to inquiries",
                "Maintain client and staff records",
                "Process paperwork and documentation",
                "Support care coordination team",
                "Handle office administration tasks",
                "Ensure data accuracy and confidentiality"
              ]}
              requirements={[
                "Excellent administrative skills",
                "Proficiency in Microsoft Office",
                "Strong communication abilities",
                "Attention to detail",
                "Friendly and professional demeanor"
              ]}
              benefits={[
                "Stable office environment",
                "Professional development opportunities",
                "Flexible working arrangements",
                "Team-oriented workplace",
                "Comprehensive benefits"
              ]}
            />
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="mb-20 bg-aion-blue/10 rounded-aion-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              What Our Team Says
            </h2>
            <p className="text-body-lg text-aion-gray-600">
              Hear from our team members about their experiences working at Aion Health Care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah M."
              role="Senior Care Assistant"
              image="👩‍⚕️"
              quote="Working at Aion has been incredibly rewarding. I love making a real difference in people's lives every day."
              experience="2 years with Aion"
            />
            <TestimonialCard
              name="James L."
              role="Care Worker"
              image="👨‍⚕️"
              quote="The training and support here are excellent. I've grown so much professionally since joining."
              experience="1 year with Aion"
            />
            <TestimonialCard
              name="Emma R."
              role="Care Coordinator"
              image="👩‍💼"
              quote="I appreciate the flexible hours and supportive team environment. It's a great place to build a career."
              experience="6 months with Aion"
            />
          </div>
        </section>

        {/* Benefits & Training */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Comprehensive Benefits & Training
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              We invest in our team members with excellent benefits and continuous learning opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon="🏥"
              title="Health & Wellbeing"
              description="Comprehensive health insurance and wellbeing support programs"
              details={[
                "Private health insurance",
                "Mental health support",
                "Wellbeing workshops",
                "Gym membership discounts"
              ]}
            />
            <BenefitCard
              icon="🎓"
              title="Professional Development"
              description="Ongoing training and career advancement opportunities"
              details={[
                "Regular training sessions",
                "Certification support",
                "Conference attendance",
                "Mentorship programs"
              ]}
            />
            <BenefitCard
              icon="🚗"
              title="Travel & Flexibility"
              description="Mileage allowance and flexible scheduling options"
              details={[
                "Mileage reimbursement",
                "Flexible hours",
                "Remote work options",
                "Work-life balance focus"
              ]}
            />
            <BenefitCard
              icon="🎉"
              title="Recognition & Rewards"
              description="Employee recognition and performance-based rewards"
              details={[
                "Employee of the month",
                "Performance bonuses",
                "Service awards",
                "Team events and celebrations"
              ]}
            />
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-aion-coral/10 rounded-aion-lg p-12">
          <div className="text-center mb-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-body-lg text-aion-gray-700 max-w-3xl mx-auto">
              Our simple 4-step application process makes it easy to start your career with Aion Health Care
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <ProcessStep
              number="1"
              title="Application"
              description="Submit your application and CV through our online form"
            />
            <ProcessStep
              number="2"
              title="Interview"
              description="Meet with our team to discuss your experience and goals"
            />
            <ProcessStep
              number="3"
              title="Background Check"
              description="Complete necessary DBS and reference checks"
            />
            <ProcessStep
              number="4"
              title="Onboarding"
              description="Start your journey with comprehensive training and support"
            />
          </div>
          
          <div className="text-center">
            <a href="#application-form" className="btn-primary inline-block px-8 py-4 text-lg">
              Apply Now
            </a>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="mt-16 bg-white rounded-aion-lg p-8 shadow-aion">
          <div className="text-center mb-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Start Your Application
            </h2>
            <p className="text-body-lg text-aion-gray-600 max-w-3xl mx-auto">
              Fill out the application form below to apply for any of our current openings or express interest in joining our team
            </p>
          </div>
          
          <Suspense fallback={<div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-aion-blue"></div></div>}>
            <ApplicationForm
              onSuccess={(response) => {
                // Application submitted successfully
              }}
              onError={(error) => {
                // Application submission error handled
              }}
            />
          </Suspense>
        </section>
      </div>
    </div>
  )
}

/* Component Functions */
interface WhyWorkCardProps {
  icon: string
  title: string
  description: string
  details: string[]
}

function WhyWorkCard({ icon, title, description, details }: WhyWorkCardProps) {
  return (
    <div className="card p-6 text-center hover:shadow-aion-lg transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">{title}</h3>
      <p className="text-body text-aion-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-1">
        {details.map((detail, index) => (
          <li key={index} className="text-sm text-aion-gray-500 flex items-center justify-center gap-2">
            <span className="text-aion-coral">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface JobListingProps {
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

function JobListing({ title, department, location, type, salary, description, responsibilities, requirements, benefits }: JobListingProps) {
  return (
    <div className="card p-8 hover:shadow-aion-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold">{title}</h3>
          <div className="flex flex-wrap gap-4 text-aion-gray-600">
            <span>{department}</span>
            <span>•</span>
            <span>{location}</span>
            <span>•</span>
            <span>{type}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-aion-coral font-bold text-lg mb-1">{salary}</div>
          <button className="btn-primary px-6 py-2 text-sm">
            Apply Now
          </button>
        </div>
      </div>
      
      <p className="text-body text-aion-gray-700 mb-6 leading-relaxed">{description}</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-heading-3 text-aion-navy mb-3 font-semibold">Responsibilities</h4>
          <ul className="space-y-1">
            {responsibilities.map((resp, index) => (
              <li key={index} className="text-sm text-aion-gray-600 flex items-start gap-2">
                <span className="text-aion-coral mt-1">•</span>
                {resp}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-heading-3 text-aion-navy mb-3 font-semibold">Requirements</h4>
          <ul className="space-y-1">
            {requirements.map((req, index) => (
              <li key={index} className="text-sm text-aion-gray-600 flex items-start gap-2">
                <span className="text-aion-blue mt-1">•</span>
                {req}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-heading-3 text-aion-navy mb-3 font-semibold">Benefits</h4>
          <ul className="space-y-1">
            {benefits.map((ben, index) => (
              <li key={index} className="text-sm text-aion-gray-600 flex items-start gap-2">
                <span className="text-aion-navy mt-1">•</span>
                {ben}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  experience: string
}

function TestimonialCard({ name, role, image, quote, experience }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-aion-lg p-6 text-center shadow-aion">
      <div className="text-4xl mb-4">{image}</div>
      <p className="text-body text-aion-gray-600 mb-4 italic">"{quote}"</p>
      <div className="text-aion-navy font-semibold">{name}</div>
      <div className="text-aion-gray-500 text-sm">{role}</div>
      <div className="text-aion-gray-400 text-xs mt-2">{experience}</div>
    </div>
  )
}

interface BenefitCardProps {
  icon: string
  title: string
  description: string
  details: string[]
}

function BenefitCard({ icon, title, description, details }: BenefitCardProps) {
  return (
    <div className="card p-6 text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold">{title}</h3>
      <p className="text-body text-aion-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-1">
        {details.map((detail, index) => (
          <li key={index} className="text-sm text-aion-gray-500 flex items-center justify-center gap-2">
            <span className="text-aion-coral">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="text-center p-6 bg-white rounded-aion-lg shadow-aion">
      <div className="text-2xl font-bold text-aion-coral mb-4 bg-aion-coral/20 rounded-aion w-12 h-12 flex items-center justify-center mx-auto">
        {number}
      </div>
      <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold">{title}</h3>
      <p className="text-body text-aion-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  component: Privacy,
})

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-aion-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading-1 text-aion-navy mb-6">
            Privacy Policy
          </h1>
          <p className="text-body-lg text-aion-gray-700 max-w-4xl mx-auto mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect 
            your personal information in accordance with UK data protection laws.
          </p>
          
          <div className="bg-white rounded-aion-lg shadow-aion p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-aion-gray-600">
              <span className="text-lg">🔒</span>
              <span className="font-semibold text-aion-navy">GDPR Compliant</span>
              <span className="text-lg">🛡️</span>
              <span className="font-semibold text-aion-navy">Secure & Protected</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Introduction
            </h2>
            <p className="text-body text-aion-gray-700 mb-4">
              Aion Health Care & Support Services Ltd is committed to protecting your privacy 
              and ensuring that your personal information is handled in accordance with the 
              General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
            <p className="text-body text-aion-gray-700">
              This privacy policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>
          </div>
        </section>

        {/* Data Collection */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Personal Information
                </h3>
                <p className="text-body text-aion-gray-700 mb-3">
                  When you contact us or use our services, we may collect:
                </p>
                <ul className="text-body text-aion-gray-600 space-y-2 pl-6">
                  <li>• Full name and contact details (address, phone, email)</li>
                  <li>• Date of birth and identification information</li>
                  <li>• Medical and health information (when necessary for care)</li>
                  <li>• Emergency contact details</li>
                  <li>• Care preferences and requirements</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Website Usage Information
                </h3>
                <p className="text-body text-aion-gray-700 mb-3">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="text-body text-aion-gray-600 space-y-2 pl-6">
                  <li>• IP address and browser information</li>
                  <li>• Pages visited and time spent on site</li>
                  <li>• Referring website information</li>
                  <li>• Cookie and tracking data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              How We Use Your Information
            </h2>
            
            <div className="space-y-4">
              <UsageItem
                title="Providing Care Services"
                description="To deliver personalized care and support services, coordinate care plans, and ensure the safety and well-being of our clients."
              />
              <UsageItem
                title="Communication"
                description="To contact you regarding your care, respond to inquiries, provide service updates, and send important notifications."
              />
              <UsageItem
                title="Legal and Regulatory Compliance"
                description="To comply with healthcare regulations, maintain accurate records, and fulfill our legal obligations as a care provider."
              />
              <UsageItem
                title="Quality Improvement"
                description="To analyze service effectiveness, improve our care delivery, and enhance the overall client experience."
              />
              <UsageItem
                title="Marketing and Information"
                description="To send information about our services, updates, and relevant care information (with your consent)."
              />
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Data Protection & Security
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-4 font-semibold">
                  Security Measures
                </h3>
                <ul className="text-body text-aion-gray-600 space-y-2">
                  <li>• Encrypted data storage and transmission</li>
                  <li>• Secure access controls and authentication</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Staff training on data protection</li>
                  <li>• Physical security for paper records</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-4 font-semibold">
                  Your Rights
                </h3>
                <ul className="text-body text-aion-gray-600 space-y-2">
                  <li>• Right to access your personal data</li>
                  <li>• Right to correct inaccurate information</li>
                  <li>• Right to erasure (in certain circumstances)</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                  <li>• Right to object to processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Information Sharing
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  When We Share Information
                </h3>
                <p className="text-body text-aion-gray-700">
                  We may share your information with:
                </p>
                <ul className="text-body text-aion-gray-600 space-y-2 pl-6">
                  <li>• Healthcare professionals involved in your care</li>
                  <li>• Emergency services when necessary for your safety</li>
                  <li>• Legal and regulatory authorities as required by law</li>
                  <li>• Third-party service providers who assist with our operations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Third-Party Service Providers
                </h3>
                <p className="text-body text-aion-gray-700">
                  We may use third-party services for:
                </p>
                <ul className="text-body text-aion-gray-600 space-y-2 pl-6">
                  <li>• IT and website hosting services</li>
                  <li>• Payment processing</li>
                  <li>• Background check services</li>
                  <li>• Professional advisory services</li>
                </ul>
                <p className="text-body text-aion-gray-500 mt-2">
                  All third parties are required to comply with data protection laws and our security standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Cookies & Tracking
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  What Are Cookies?
                </h3>
                <p className="text-body text-aion-gray-700">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us understand how you use our site and improve your experience.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Types of Cookies We Use
                </h3>
                <ul className="text-body text-aion-gray-600 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Managing Cookies
                </h3>
                <p className="text-body text-aion-gray-700">
                  You can manage your cookie preferences through your browser settings. 
                  Disabling essential cookies may affect website functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-aion-coral/10 rounded-aion-lg p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6 text-center">
              Contact Us About Privacy
            </h2>
            
            <div className="text-center">
              <p className="text-body text-aion-gray-700 mb-6">
                If you have questions about this privacy policy or wish to exercise your data rights, 
                please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-aion-navy">
                  <span className="text-lg">📞</span>
                  <span className="font-semibold">07368195705</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-aion-navy">
                  <span className="text-lg">📧</span>
                  <span>info@aionhcss.com</span>
                </div>
                <div className="text-aion-gray-600">
                  <div>Terriers Retreat, Woods Road</div>
                  <div>Ford End, Chelmsford, Essex, CM3 1LJ</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-aion inline-block">
                <p className="text-aion-gray-600">
                  <strong>Data Protection Officer:</strong> Available upon request
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section>
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Policy Updates
            </h2>
            <p className="text-body text-aion-gray-700">
              We may update this privacy policy from time to time to reflect changes in our practices 
              or legal requirements. We will notify you of any significant changes through our website 
              or direct communication.
            </p>
            <p className="text-body text-aion-gray-500 mt-4">
              <strong>Last Updated:</strong> October 2025
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

/* Component Functions */
interface UsageItemProps {
  title: string
  description: string
}

function UsageItem({ title, description }: UsageItemProps) {
  return (
    <div className="border-l-4 border-aion-coral pl-4">
      <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold">{title}</h3>
      <p className="text-body text-aion-gray-600">{description}</p>
    </div>
  )
}
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: Terms,
})

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-aion-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading-1 text-aion-navy mb-6">
            Terms of Service
          </h1>
          <p className="text-body-lg text-aion-gray-700 max-w-4xl mx-auto mb-8">
            Please read these terms carefully before using our website or services. These terms 
            govern your use of Aion Health Care's website and outline our commitments to you.
          </p>
          
          <div className="bg-white rounded-aion-lg shadow-aion p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-aion-gray-600">
              <span className="text-lg">📄</span>
              <span className="font-semibold text-aion-navy">Legal Agreement</span>
              <span className="text-lg">🤝</span>
              <span className="font-semibold text-aion-navy">Mutual Commitment</span>
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
              These Terms of Service ("Terms") govern your use of the Aion Health Care & Support 
              Services Ltd website located at aionhcss.com (the "Site"). By accessing or using 
              our Site, you agree to be bound by these Terms.
            </p>
            <p className="text-body text-aion-gray-700">
              We reserve the right to modify these terms at any time. We will notify users of 
              any significant changes through our website or direct communication.
            </p>
          </div>
        </section>

        {/* Website Usage */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Website Usage
            </h2>
            
            <div className="space-y-4">
              <UsageTerm
                title="License Grant"
                description="We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes related to learning about our care services."
              />
              <UsageTerm
                title="User Responsibilities"
                description="You agree to use our website in accordance with applicable laws and regulations, not to interfere with website functionality, and not to access areas of the site you are not authorized to access."
              />
              <UsageTerm
                title="Prohibited Activities"
                description="You may not: reproduce, distribute, modify, create derivative works of, publicly display, or exploit our website content without our prior written permission."
              />
              <UsageTerm
                title="Account Registration"
                description="If you create an account with us, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account."
              />
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Intellectual Property
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Ownership
                </h3>
                <p className="text-body text-aion-gray-700">
                  The Site and its original content, features, and functionality are owned by 
                  Aion Health Care & Support Services Ltd and are protected by copyright, 
                  trademark, and other intellectual property laws.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Trademarks
                </h3>
                <p className="text-body text-aion-gray-700">
                  "Aion Health Care," the Aion logo, and related marks are trademarks of 
                  Aion Health Care & Support Services Ltd. All other trademarks mentioned 
                  on our site are the property of their respective owners.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Limited License
                </h3>
                <p className="text-body text-aion-gray-700">
                  You may print or download extracts from our site for personal, non-commercial 
                  use, provided you retain all copyright and other proprietary notices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Information */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Medical & Health Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Informational Purpose
                </h3>
                <p className="text-body text-aion-gray-700">
                  The health and medical information contained on this website is for 
                  informational purposes only and is not intended as a substitute for 
                  professional medical advice, diagnosis, or treatment.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  No Medical Advice
                </h3>
                <p className="text-body text-aion-gray-700">
                  Always seek the advice of your physician or other qualified health 
                  provider with any questions you may have regarding a medical condition.
                  Never disregard professional medical advice or delay seeking it because 
                  of something you have read on this website.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Emergency Situations
                </h3>
                <p className="text-body text-aion-gray-700">
                  If you think you may have a medical emergency, call your doctor or emergency 
                  services immediately. Our website content is not designed to address 
                  emergency medical needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Limitation of Liability
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  No Warranty
                </h3>
                <p className="text-body text-aion-gray-700">
                  Our website is provided "as is" and "as available" without any representations 
                  or warranties of any kind, either express or implied, including but not 
                  limited to implied warranties of merchantability and fitness for a 
                  particular purpose.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Limitation of Damages
                </h3>
                <p className="text-body text-aion-gray-700">
                  To the fullest extent permitted by law, Aion Health Care & Support Services 
                  Ltd shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, or any loss of profits or revenues.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  User Responsibility
                </h3>
                <p className="text-body text-aion-gray-700">
                  You acknowledge and agree that your use of our website and any reliance 
                  on information contained herein is at your own risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Links */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Third-Party Links
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  External Links
                </h3>
                <p className="text-body text-aion-gray-700">
                  Our website may contain links to third-party websites or services that 
                  are not owned or controlled by Aion Health Care & Support Services Ltd.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  No Endorsement
                </h3>
                <p className="text-body text-aion-gray-700">
                  We have no control over and assume no responsibility for the content, 
                  privacy policies, or practices of any third-party sites or services. 
                  We do not endorse any third-party content.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  User Responsibility
                </h3>
                <p className="text-body text-aion-gray-700">
                  You acknowledge and agree that we shall not be responsible or liable for 
                  any damage or loss caused by or related to the use of any third-party 
                  websites or services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6">
              Governing Law & Dispute Resolution
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Governing Law
                </h3>
                <p className="text-body text-aion-gray-700">
                  These Terms shall be governed and construed in accordance with the laws 
                  of England and Wales, without regard to its conflict of law provisions.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Dispute Resolution
                </h3>
                <p className="text-body text-aion-gray-700">
                  Any dispute arising out of or in connection with these Terms shall be 
                  subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading-3 text-aion-navy mb-3 font-semibold">
                  Alternative Dispute Resolution
                </h3>
                <p className="text-body text-aion-gray-700">
                  We encourage users to attempt to resolve disputes amicably through 
                  direct communication before pursuing formal legal action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="bg-aion-blue/10 rounded-aion-lg p-8">
            <h2 className="text-heading-2 text-aion-navy mb-6 text-center">
              Contact Us
            </h2>
            
            <div className="text-center">
              <p className="text-body text-aion-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-aion-navy">
                  <span className="text-lg">📞</span>
                  <span className="font-semibold">0124 5823 377</span>
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
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section>
          <div className="bg-white rounded-aion-lg shadow-aion p-8">
            <h2 className="text-heading-2 text-aion-navy mb-4">
              Changes to Terms
            </h2>
            <p className="text-body text-aion-gray-700">
              We reserve the right to modify these Terms of Service at any time. We will 
              provide notice of any changes by posting the new Terms of Service on this page.
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
interface UsageTermProps {
  title: string
  description: string
}

function UsageTerm({ title, description }: UsageTermProps) {
  return (
    <div className="border-l-4 border-aion-coral pl-4">
      <h3 className="text-heading-3 text-aion-navy mb-2 font-semibold">{title}</h3>
      <p className="text-body text-aion-gray-600">{description}</p>
    </div>
  )
}
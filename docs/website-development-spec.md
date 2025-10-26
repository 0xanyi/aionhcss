# Aion Health Care & Support Services - Website Development Specification

     ## Executive Summary

     Based on comprehensive analysis of Aion's business plan, competitor websites
     (Clarion Homecare, FHC Agency, Virtue Care), and brand assets, this specification
     outlines a complete plan for building a professional care services website that
     emphasizes trust, compassion, and reliability.

     ## 1. Project Overview

     ### Client Requirements
     - **Company**: Aion Health Care & Support Services Limited
     - **Business**: New health and social care provider in East England/Chelmsford,
     Essex
     - **Services**: Home care, supported living, personal care, 24/7 support
     - **Target Audience**: Elderly, disabled, children with difficulties, family
     caregivers
     - **Budget Context**: £15,000 total funding (£5,000 savings + £10,000 loan)

     ### Project Goals
     - Establish professional online presence
     - Generate leads for care services
     - Build trust and credibility
     - Provide comprehensive service information
     - Enable easy contact and inquiry process

     ## 2. Technology Framework Selection

     ### Recommended Stack: TanStack Start + React + Bun

     #### Rationale
     - **Performance**: Exceptional speed with Bun runtime and TanStack's optimized architecture
     - **SEO Excellence**: Server-side rendering for better search engine visibility
     - **Accessibility**: Built-in accessibility features and mobile-responsive design
     - **Scalability**: Easy to add features like client portals or online assessments
     - **Modern Stack**: Cutting-edge technology stack with excellent developer experience
     - **TypeScript First**: Native TypeScript support throughout the stack

     #### Technology Details

   Frontend: TanStack Start, React 18, TypeScript
   Runtime: Bun (fast JavaScript runtime and package manager)
   Styling: Tailwind CSS + Custom CSS Variables
   Content: File-based routing with Markdown support
   Forms: React Hook Form + EmailJS
   Analytics: Google Analytics 4
   Deployment: Vercel or Railway (optimized for full-stack applications)


     ## 3. Brand Implementation

     ### Color Palette
     ```css
     :root {
       --primary-navy: #002B7F;
       --secondary-coral: #FF6B6B;
       --accent-blue: #1E40AF;
       --text-dark: #1F2937;
       --text-light: #6B7280;
       --background: #FFFFFF;
       --background-light: #F9FAFB;
       --border-light: #E5E7EB;
     }

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Inter Bold (700) for H1, Inter Semi-Bold (600) for H2-H6
- **Body Text**: Inter Regular (400)
- **Font Sizes**:
  - **H1**: 2.5rem (40px)
  - **H2**: 2rem (32px)
  - **H3**: 1.5rem (24px)
  - **Body**: 1rem (16px)
  - **Small**: 0.875rem (14px)

### Website Architecture

#### Site Structure

     /
     ├── /                    (Homepage)
     ├── /about              (Company story, team, values)
     ├── /services           (Service overview)
     │   ├── /personal-care
     │   ├── /live-in-care
     │   ├── /supported-living
     │   ├── /meal-planning
     │   ├── /household-tasks
     │   └── /respite-care
     ├── /clients            (Who we serve)
     ├── /contact            (Contact form, info)
     ├── /careers            (Join our team)
     ├── /resources          (FAQ, guides, downloads)
     └── /privacy            (Privacy policy, terms)

   5. Content Strategy

#### Tone of Voice Guidelines
   •  Professional yet warm: Balancing expertise with empathy
   •  Trustworthy and reliable: Emphasizing safety and competence
   •  Inclusive and respectful: Reflecting core values
   •  Clear and accessible: Easy to understand for all age groups

#### Key Messaging Pillars
   1. Trust & Safety: "Experienced healthcare professionals you can trust"
   2. Personalized Care: "Tailored to your unique needs and preferences"
   3. Local Focus: "Proudly serving Essex and the East of England"
   4. Family Values: "Treating you like family - because you are family to us"
   5. 24/7 Availability: "Support when you need it, day or night"

   6. Project Timeline

   Phase 1: Foundation (Weeks 1-3)
   •  Week 1: Project setup, TanStack Start configuration, brand implementation
   •  Week 2: Core layout development, navigation, component library
   •  Week 3: Responsive design implementation, basic styling

   Phase 2: Core Pages (Weeks 4-6)
   •  Week 4: Homepage development with all sections
   •  Week 5: About and Services pages, service detail templates
   •  Week 6: Contact and Careers pages, form integration

   Phase 3: Advanced Features (Weeks 7-8)
   •  Week 7: SEO optimization, analytics integration, performance optimization
   •  Week 8: Accessibility compliance, cross-browser testing, mobile optimization

   Phase 4: Content & Launch (Week 9)
   •  Week 9: Content population, final testing, client review, launch preparation

   7. Budget Considerations

   Development Costs
   •  Design & Development: £8,000 - £12,000
   •  Content Creation: £1,000 - £2,000
   •  Testing & QA: £500 - £1,000
   •  Training & Documentation: £500
   •  Total Estimated Range: £10,000 - £15,000

   Ongoing Costs (Annual)
   •  Hosting: £200 - £400 (Vercel Pro)
   •  Domain: £15 - £30
   •  Maintenance: £1,200 - £2,400
   •  Total Annual: £1,415 - £2,830

   8. Success Metrics & KPIs

   Primary Conversion Goals
   •  Contact Form Submissions: Target 25+ per month
   •  Phone Inquiries: Track call volume and conversion
   •  Service Page Engagement: Time spent and bounce rate
   •  Local Search Visibility: Google My Business performance

   Secondary Metrics
   •  Newsletter Signups: 50+ per month
   •  Resource Downloads: Track guide and form downloads
   •  Career Applications: Monthly recruitment metrics

   9. Next Steps
   1. Client Review: Detailed review of this specification
   2. Requirements Finalization: Finalize any specific requirements or preferences
   3. Project Kickoff: Begin development phase
   4. Regular Progress Reviews: Weekly check-ins during development
   5. Launch and Optimization: Deploy and continuously improve based on data
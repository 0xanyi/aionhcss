# Aion Health Care & Support Services Website

A modern, accessible healthcare services website built for Aion Health Care & Support Services Ltd, providing comprehensive care services and support information.

## 🏥 About

Aion Health Care & Support Services Ltd is a registered healthcare provider offering personalized care services across the UK. This website serves as the primary digital presence for:

- Care service information and assessments
- Contact and communication with potential clients
- Job applications for care professionals
- Accessibility-compliant healthcare information
- GDPR-compliant data handling and privacy management

## ✨ Features

### Core Functionality
- **Care Assessments**: Online forms for care needs assessment
- **Job Applications**: Career opportunities and application system
- **Contact Forms**: Multiple communication channels for different services
- **Service Information**: Comprehensive details about available care services

### Healthcare Compliance
- **GDPR Compliance**: Full data protection and privacy management
- **Healthcare Data Security**: Secure handling of sensitive health information
- **Audit Logging**: Comprehensive audit trails for data access and modifications
- **Consent Management**: Granular consent system for different data types and purposes
- **Data Retention Policies**: Automated retention and deletion based on legal requirements

### Accessibility & Performance
- **WCAG 2.1 AA Compliance**: Full accessibility support for users with disabilities
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **SEO Optimized**: Search engine friendly structure and metadata

### Technical Features
- **Modern React 19.2**: Latest React features with concurrent rendering
- **TypeScript**: Full type safety and development experience
- **TanStack Router**: File-based routing with SSR support
- **Comprehensive Testing**: Unit, integration, and accessibility testing
- **Security Headers**: Content Security Policy, HSTS, and other security measures
- **Authentication**: Role-based access control for healthcare data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun 1.0+
- npm, yarn, or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd aionhcss

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```

### Build and Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run serve

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.tsx       # Navigation header with accessibility features
│   ├── FormField.tsx    # Accessible form field component
│   ├── ContactForm.tsx  # Contact form for service inquiries
│   ├── ApplicationForm.tsx # Job application form
│   ├── AssessmentForm.tsx  # Care needs assessment form
│   └── SEO.tsx          # SEO metadata component
├── routes/              # TanStack file-based routing
│   ├── api/            # API endpoints with authentication
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About us page
│   ├── services.tsx    # Care services information
│   ├── contact.tsx     # Contact information and forms
│   ├── careers.tsx     # Job opportunities
│   ├── resources.tsx   # Care resources and assessments
│   ├── privacy.tsx     # Privacy policy
│   └── terms.tsx       # Terms of service
├── utils/              # Utility functions and helpers
│   ├── formUtils.ts    # Form validation and submission utilities
│   ├── auth.ts         # Authentication and authorization
│   ├── healthcareCompliance.ts # GDPR and healthcare compliance
│   ├── accessibility.ts # Accessibility utilities
│   ├── performance.ts  # Performance monitoring
│   ├── seo.ts          # SEO utilities
│   └── testing.ts      # Cross-browser testing utilities
├── styles/             # CSS and styling
├── init.ts            # Application initialization
└── test/              # Test setup and utilities
    └── setup.ts        # Vitest configuration
```

## 🏥 Healthcare Services

### Care Services Offered
1. **Personal Care**: Assistance with daily living activities
2. **Medication Management**: Support with medication administration
3. **Companionship**: Social support and conversation
4. **Respite Care**: Temporary care relief for family carers
5. **Specialist Care**: Condition-specific care services

### Assessment Process
- Online care needs assessment
- Initial consultation
- Personalized care plan development
- Care service matching
- Ongoing review and adjustment

## 🔒 Privacy & Security

### Data Protection
This website implements comprehensive data protection measures in compliance with:
- UK GDPR (General Data Protection Regulation)
- Data Protection Act 2018
- Healthcare data handling standards

### Security Measures
- Content Security Policy (CSP) headers
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options protection
- Input validation and sanitization
- Rate limiting on API endpoints
- Secure authentication and authorization

### Your Rights
Under GDPR, you have the right to:
- Access your personal data
- Rectify inaccurate information
- Request erasure of your data
- Restrict processing
- Data portability
- Object to processing
- Withdraw consent at any time

For privacy inquiries: privacy@aionhealthcare.co.uk

## ♿ Accessibility

This website is designed to be fully accessible to all users, including those using assistive technologies.

### Accessibility Features
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast color schemes
- Scalable text and interface elements
- Alternative text for images
- Proper heading structure and landmarks

### Testing
Accessibility is tested using:
- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader testing
- Color contrast validation

## 🧪 Testing

The project includes comprehensive testing coverage:

### Test Types
- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API endpoint and form testing  
- **Accessibility Tests**: WCAG compliance validation
- **Performance Tests**: Core Web Vitals monitoring
- **Cross-browser Tests**: Compatibility validation

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run accessibility tests
npm run test:a11y
```

## 🌐 API Endpoints

### Protected Endpoints
All API endpoints require authentication and are rate-limited:

- `POST /api/contact` - Contact form submissions
- `POST /api/application` - Job applications
- `POST /api/assessment` - Care assessments

### Authentication
API endpoints use Bearer token authentication with role-based access control:
- `admin` - Full access to all endpoints
- `staff` - Access to contact and assessment endpoints
- `patient` - Limited access for self-service features

## 📊 Performance

### Optimization Features
- Route-based code splitting
- Image optimization with lazy loading
- Bundle size optimization
- Critical rendering path optimization
- Web Vitals monitoring

### Performance Targets
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

## 🚀 Deployment

The website can be deployed to various platforms:

### Recommended Platforms
- Vercel (recommended for React applications)
- Netlify
- AWS Amplify
- Traditional web hosting with Node.js support

### Build Commands
```bash
# Production build
npm run build

# Preview production build locally
npm run serve
```

### Environment Variables
```env
NODE_ENV=production
# Add other environment-specific variables
```

## 🤝 Contributing

While this is a healthcare-specific implementation, contributions that improve:
- Healthcare data handling
- Accessibility features
- Performance optimization
- Security measures
- Testing coverage

are welcome. Please ensure all contributions maintain healthcare compliance standards.

## 📞 Contact

**Aion Health Care & Support Services Ltd**

- **Website**: [www.aionhealthcare.co.uk](https://www.aionhealthcare.co.uk)
- **Email**: info@aionhealthcare.co.uk
- **Phone**: 0800 123 4567
- **Emergency Contact**: 24/7 helpline available

**Registered Address:**
[Company registration details would be provided]

**CQC Registration:**
[Care Quality Commission registration details would be provided]

## 📜 Legal

### Privacy Policy
This website's privacy policy is available at `/privacy` and complies with UK GDPR requirements.

### Terms of Service
Terms of service are available at `/terms` and govern the use of this website and services.

### Healthcare Disclaimer
The information provided on this website is for general guidance only and should not be considered as medical advice. Always consult with qualified healthcare professionals for medical decisions.

## 📈 Analytics & Monitoring

The website includes:
- Google Analytics for usage statistics
- Performance monitoring with Web Vitals
- Error tracking and reporting
- Healthcare-specific compliance monitoring
- Accessibility monitoring

---

**Built with ❤️ for healthcare professionals and those needing care services**

*This website is designed to be a supportive digital resource for both care providers and those seeking healthcare services, with accessibility and privacy at its core.*

# Building For Production

To build this application for production:

```bash
bun --bun run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
bun --bun run test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.




## Routing
This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add another a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you use the `<Outlet />` component.

Here is an example layout that includes a header:

```tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
```

The `<TanStackRouterDevtools />` component is not required so you can remove it if you don't want it in your layout.

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).


## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
const peopleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/people",
  loader: async () => {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json() as Promise<{
      results: {
        name: string;
      }[];
    }>;
  },
  component: () => {
    const data = peopleRoute.useLoaderData();
    return (
      <ul>
        {data.results.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    );
  },
});
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

### React-Query

React-Query is an excellent addition or alternative to route loading and integrating it into you application is a breeze.

First add your dependencies:

```bash
bun install @tanstack/react-query @tanstack/react-query-devtools
```

Next we'll need to create a query client and provider. We recommend putting those in `main.tsx`.

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ...

const queryClient = new QueryClient();

// ...

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
```

You can also add TanStack Query Devtools to the root route (optional).

```tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools />
    </>
  ),
});
```

Now you can use `useQuery` to fetch your data.

```tsx
import { useQuery } from "@tanstack/react-query";

import "./App.css";

function App() {
  const { data } = useQuery({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => data.results as { name: string }[]),
    initialData: [],
  });

  return (
    <div>
      <ul>
        {data.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

You can find out everything you need to know on how to use React-Query in the [React-Query documentation](https://tanstack.com/query/latest/docs/framework/react/overview).

## State Management

Another common requirement for React applications is state management. There are many options for state management in React. TanStack Store provides a great starting point for your project.

First you need to add TanStack Store as a dependency:

```bash
bun install @tanstack/store
```

Now let's create a simple counter in the `src/App.tsx` file as a demonstration.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

function App() {
  const count = useStore(countStore);
  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
    </div>
  );
}

export default App;
```

One of the many nice features of TanStack Store is the ability to derive state from other state. That derived state will update when the base state updates.

Let's check this out by doubling the count using derived state.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store, Derived } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

const doubledStore = new Derived({
  fn: () => countStore.state * 2,
  deps: [countStore],
});
doubledStore.mount();

function App() {
  const count = useStore(countStore);
  const doubledCount = useStore(doubledStore);

  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
      <div>Doubled - {doubledCount}</div>
    </div>
  );
}

export default App;
```

We use the `Derived` class to create a new store that is derived from another store. The `Derived` class has a `mount` method that will start the derived store updating.

Once we've created the derived store we can use it in the `App` component just like we would any other store using the `useStore` hook.

You can find out everything you need to know on how to use TanStack Store in the [TanStack Store documentation](https://tanstack.com/store/latest).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).

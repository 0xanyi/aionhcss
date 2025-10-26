# Aion Health Care Website - Deployment Guide

## Overview

This guide provides step-by-step instructions for deploying the Aion Health Care website to production using Coolify or other deployment platforms.

## Prerequisites

- Node.js 18+ or Bun runtime installed
- Git repository access
- Domain name registered (aionhcss.com)
- SSL certificate (Let's Encrypt recommended)
- Coolify account (or alternative deployment platform)

## Deployment Options

### Option 1: Coolify Deployment (Recommended)

1. **Prepare Coolify Configuration**
   - The `coolify.json` file is already configured for automatic deployment
   - Ensure your Coolify account has access to the repository

2. **Connect Repository**
   - In Coolify, create a new application
   - Connect to your Git repository (GitHub, GitLab, or Bitbucket)
   - Select the `coolify.json` configuration file

3. **Configure Environment Variables**
   - `NODE_ENV`: `production`
   - `ANALYTICS_ID`: Your Google Analytics measurement ID (optional)
   - `CONTACT_EMAIL`: `info@aionhcss.com`
   - `PHONE_NUMBER`: `07368195705`

4. **Set Up Domain**
   - Add your domain: `aionhcss.com` and `www.aionhcss.com`
   - Enable SSL certificate (Let's Encrypt)
   - Configure DNS records as instructed by Coolify

5. **Deploy**
   - Click "Deploy" in Coolify
   - Monitor the deployment logs
   - Verify successful deployment

### Option 2: Manual Deployment

1. **Build the Application**
   ```bash
   # Install dependencies
   bun install
   
   # Build for production
   bun run build
   ```

2. **Serve the Application**
   ```bash
   # Using Bun
   bun run start
   
   # Or using a static server
   npx serve -s dist
   ```

3. **Configure Web Server**
   - Set up Nginx or Apache to serve the `dist` directory
   - Configure SSL certificates
   - Set up proper caching headers

## Environment Variables

### Required Variables
- `NODE_ENV`: Set to `production` for production builds

### Optional Variables
- `ANALYTICS_ID`: Google Analytics measurement ID for tracking
- `CONTACT_EMAIL`: Primary contact email address
- `PHONE_NUMBER`: Primary phone number

## Performance Optimization

### Build-Time Optimizations
- Automatic code splitting and tree shaking
- Image optimization (WebP format)
- CSS minification and purging
- JavaScript minification

### Runtime Optimizations
- Lazy loading for images and components
- Service worker for offline functionality
- Resource hints for critical assets
- Font loading optimization

## SEO Configuration

### Automatic SEO Features
- Dynamic meta tags for each page
- Open Graph and Twitter cards
- Structured data (JSON-LD)
- XML sitemap generation
- Canonical URLs

### Manual SEO Setup
1. **Google Search Console**
   - Verify domain ownership
   - Submit XML sitemap
   - Monitor search performance

2. **Google Analytics**
   - Set up Google Analytics 4
   - Configure goals and events
   - Enable enhanced measurement

3. **Local SEO**
   - Create Google Business Profile
   - Verify NAP (Name, Address, Phone) consistency
   - Set up local citations

## Monitoring and Maintenance

### Health Checks
- Automatic health checks every 30 seconds
- Uptime monitoring with email alerts
- Performance monitoring

### Backups
- Daily automated backups
- 30-day retention period
- Manual backup capability

### Updates
- Regular dependency updates
- Security patch monitoring
- Performance optimization reviews

## Troubleshooting

### Common Issues

**Build Fails**
- Check Node.js/Bun version compatibility
- Verify all dependencies are installed
- Check for TypeScript compilation errors

**Deployment Fails**
- Verify environment variables are set correctly
- Check domain DNS configuration
- Review deployment logs for errors

**Performance Issues**
- Monitor Web Vitals metrics
- Check image optimization
- Review third-party script loading

**SEO Issues**
- Verify meta tags are rendering correctly
- Check structured data validation
- Monitor Google Search Console for errors

### Support

For technical issues:
- Check the deployment logs in Coolify
- Review browser developer tools
- Contact hosting provider support

For content issues:
- Verify SEO configurations
- Check analytics data
- Review accessibility compliance

## Security Considerations

### HTTPS
- SSL certificates are automatically configured
- Force HTTPS redirects
- Secure cookies and headers

### Content Security
- Implement CSP headers
- Sanitize user inputs
- Regular security audits

### Data Protection
- GDPR compliance for forms
- Secure data handling
- Privacy policy implementation

## Post-Deployment Checklist

- [ ] Website loads correctly on all devices
- [ ] All forms submit successfully
- [ ] Contact information is accurate
- [ ] SEO metadata is correct
- [ ] Analytics are tracking properly
- [ ] SSL certificate is valid
- [ ] Performance meets targets (<3s load time)
- [ ] Accessibility compliance verified
- [ ] Mobile responsiveness confirmed
- [ ] Cross-browser compatibility tested

## Support and Maintenance

### Regular Tasks
- Weekly: Monitor analytics and performance
- Monthly: Review and update content
- Quarterly: Security and performance audits
- Annually: Full website review and updates

### Emergency Procedures
- Immediate response for downtime
- Backup restoration procedures
- Security incident response

---

For additional support, refer to the project documentation or contact the development team.
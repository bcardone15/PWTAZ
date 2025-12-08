# Precision Window Tint - Landing Page

A highly converting, modern landing page for Precision Window Tint, Las Vegas's premier window tinting service.

## 🎯 Features

- **13 Conversion-Optimized Blocks** - Each section designed to guide visitors toward taking action
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Fast Loading** - Optimized for performance with minimal dependencies
- **SEO Friendly** - Semantic HTML with proper meta tags
- **Interactive Elements** - Smooth animations, countdown timer, FAQ accordion
- **Modern Design** - Clean, professional aesthetic matching your brand

## 📦 What's Included

### HTML Structure (`index.html`)
1. **Hero Section** - Eye-catching headline with clear CTAs
2. **Trust Bar** - Social proof with key statistics
3. **Problem/Solution** - Addresses customer pain points
4. **Services Overview** - 4 main service offerings
5. **Why Choose Us** - 6 key benefits
6. **Before/After Gallery** - Visual proof of quality work
7. **Testimonials** - Customer reviews with carousel
8. **Process Timeline** - 4-step customer journey
9. **Pricing Options** - 3-tier pricing comparison
10. **Limited Time Offer** - Urgency with countdown timer
11. **FAQ Section** - Interactive accordion
12. **Contact/Quote Form** - Lead generation form
13. **Final CTA** - Last chance conversion section

### Styling (`css/style.css`)
- Custom CSS variables for easy branding updates
- Smooth animations and transitions
- Mobile-responsive breakpoints
- Print-friendly styles
- Accessibility considerations

### JavaScript (`js/main.js`)
- Smooth scroll navigation
- Mobile menu toggle
- Countdown timer
- FAQ accordion
- Testimonial carousel
- Form handling
- Back-to-top button
- Intersection Observer animations
- Performance monitoring

## 🚀 Quick Start

1. **Clone or Download** this repository
2. **Open `index.html`** in your web browser
3. **Customize the content** with your actual information

That's it! No build process or dependencies required.

## ✏️ Customization Guide

### Update Contact Information

Search for these placeholders and replace with your actual info:

```html
<!-- Phone Number -->
(702) 123-4567

<!-- Address -->
123 Industrial Rd
Las Vegas, NV 89109

<!-- Email -->
info@precisionwindowtint.com
```

### Update Pricing

Edit the pricing cards in the "Film Options" section:

```html
<div class="pricing-price">
    <span class="currency">$</span>
    <span class="amount">199</span>
</div>
```

### Change Brand Colors

Update CSS variables in `css/style.css`:

```css
:root {
    --primary-blue: #00a6de;
    --dark-navy: #0e3465;
    --accent-orange: #ff6b35;
}
```

### Add Real Images

Replace the gallery placeholders:

```html
<div class="gallery-item">
    <img src="assets/images/your-image.jpg" alt="Description">
</div>
```

### Customize Countdown Timer

Edit the timer duration in `js/main.js`:

```javascript
// Change from 30 days to your desired duration
countdownDate.setDate(countdownDate.getDate() + 30);
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design System

### Colors
- **Primary Blue**: `#00a6de` - CTAs, links, accents
- **Dark Navy**: `#0e3465` - Headers, text
- **Accent Orange**: `#ff6b35` - Urgency, highlights
- **White**: `#ffffff` - Backgrounds, text on dark
- **Light Gray**: `#f5f5f5` - Section backgrounds

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: DM Sans (sans-serif)

### Spacing
- **Section Padding**: 80px vertical, 20px horizontal
- **Container Max-Width**: 1200px

## 📊 Conversion Optimization Tips

### Already Implemented
✅ Clear value proposition above the fold
✅ Multiple CTAs throughout the page
✅ Social proof (reviews, statistics)
✅ Urgency (countdown timer, limited offer)
✅ Trust signals (warranties, certifications)
✅ Mobile-responsive design
✅ Fast loading time

### Recommended Additions
- **Live Chat Widget** - Answer questions in real-time
- **Exit-Intent Popup** - Capture abandoning visitors
- **A/B Testing** - Test different headlines/CTAs
- **Analytics Tracking** - Google Analytics, Facebook Pixel
- **Heat Mapping** - Track user behavior
- **Video Testimonials** - More engaging social proof

## 🔧 Advanced Customization

### Connect to Backend

The quote form is currently set up for client-side only. To connect it to your backend:

1. Update the form submission in `js/main.js`:

```javascript
fetch('/api/quote', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
```

2. Create a backend endpoint to handle form submissions
3. Set up email notifications or CRM integration

### Add Google Analytics

Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Facebook Pixel

Add before the closing `</head>` tag:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 📈 SEO Optimization

### Current SEO Features
- Semantic HTML5 markup
- Meta description
- Proper heading hierarchy (H1, H2, H3)
- Alt text placeholders for images
- Mobile-friendly design
- Fast loading speed

### Recommended SEO Enhancements
1. Add schema markup for local business
2. Create XML sitemap
3. Add Open Graph tags for social sharing
4. Optimize images with descriptive filenames
5. Add robots.txt file
6. Set up Google Search Console
7. Get listed on Google My Business

## 🔒 Security Considerations

- Form validation (client-side implemented)
- Add server-side validation for production
- Use HTTPS in production
- Implement rate limiting on form submissions
- Add CAPTCHA to prevent spam
- Sanitize all user inputs on backend

## 📞 Support & Contact

For questions about this landing page:
- Email: info@precisionwindowtint.com
- Phone: (702) 123-4567

## 📄 License

This landing page was created specifically for Precision Window Tint. All rights reserved.

## 🎯 Next Steps

1. ✅ **Review all content** - Make sure everything is accurate
2. ✅ **Update contact information** - Add your real phone, email, address
3. ✅ **Add real images** - Replace placeholders with actual photos
4. ✅ **Test all links** - Ensure navigation works properly
5. ✅ **Test on mobile** - Check responsive design
6. ✅ **Set up analytics** - Track visitors and conversions
7. ✅ **Deploy to hosting** - Upload to your web server
8. ✅ **Test form submissions** - Ensure leads are being captured
9. ✅ **Monitor performance** - Check loading speed
10. ✅ **Gather feedback** - Get customer input and iterate

## 📝 Changelog

### Version 1.0.0 (Initial Release)
- Complete landing page with 13 conversion-optimized blocks
- Fully responsive design
- Interactive elements (countdown, carousel, accordion)
- Contact form
- SEO-friendly markup

---

**Built with ❤️ for Precision Window Tint**

*Last Updated: December 2025*

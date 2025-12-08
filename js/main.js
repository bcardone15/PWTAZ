/**
 * Precision Window Tint - Landing Page JavaScript
 * Interactive functionality for landing page
 */

// ===========================
// SMOOTH SCROLLING
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        navCta.classList.toggle('active');
    });
}

// ===========================
// STICKY HEADER
// ===========================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===========================
// COUNTDOWN TIMER
// ===========================
function initCountdown() {
    // Set the countdown date (30 days from now)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 30);
    const countdownTime = countdownDate.getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownTime - now;

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the display
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

        // If countdown is finished
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = '<p style="font-size: 1.5rem;">Offer Expired!</p>';
        }
    }, 1000);
}

// Initialize countdown on page load
initCountdown();

// ===========================
// FAQ ACCORDION
// ===========================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===========================
// TESTIMONIAL CAROUSEL
// ===========================
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

function updateTestimonialDisplay() {
    if (testimonialCards.length === 0) return;

    // For simplicity, we'll just cycle through visibility
    // In a production environment, you'd want a more sophisticated carousel
    testimonialCards.forEach((card, index) => {
        if (window.innerWidth > 768) {
            // Show 3 at a time on desktop
            card.style.display = (index >= currentTestimonial && index < currentTestimonial + 3) ? 'block' : 'none';
        } else {
            // Show 1 at a time on mobile
            card.style.display = (index === currentTestimonial) ? 'block' : 'none';
        }
    });
}

if (carouselNext) {
    carouselNext.addEventListener('click', () => {
        const maxIndex = window.innerWidth > 768 ? testimonialCards.length - 3 : testimonialCards.length - 1;
        currentTestimonial = (currentTestimonial + 1) > maxIndex ? 0 : currentTestimonial + 1;
        updateTestimonialDisplay();
    });
}

if (carouselPrev) {
    carouselPrev.addEventListener('click', () => {
        const maxIndex = window.innerWidth > 768 ? testimonialCards.length - 3 : testimonialCards.length - 1;
        currentTestimonial = (currentTestimonial - 1) < 0 ? maxIndex : currentTestimonial - 1;
        updateTestimonialDisplay();
    });
}

// Auto-rotate testimonials every 5 seconds
setInterval(() => {
    if (carouselNext) {
        carouselNext.click();
    }
}, 5000);

// Initial display
updateTestimonialDisplay();

// Update on window resize
window.addEventListener('resize', updateTestimonialDisplay);

// ===========================
// BACK TO TOP BUTTON
// ===========================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// FORM HANDLING
// ===========================
const quoteForm = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(quoteForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Log form data (in production, you'd send this to a server)
        console.log('Form submitted with data:', data);

        // Show success message
        quoteForm.style.display = 'none';
        formSuccess.style.display = 'block';

        // Reset form after 3 seconds and show it again
        setTimeout(() => {
            quoteForm.reset();
            quoteForm.style.display = 'block';
            formSuccess.style.display = 'none';
        }, 3000);

        // In production, you would send data to your server here:
        /*
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
            formSuccess.style.display = 'block';
            quoteForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again.');
        });
        */
    });
}

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animations
const animateOnScroll = document.querySelectorAll(
    '.service-card, .benefit-card, .problem-card, .testimonial-card, .process-step, .pricing-card, .gallery-item'
);

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// PHONE NUMBER TRACKING
// ===========================
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked:', link.href);
        // In production, you'd track this with analytics
        // gtag('event', 'phone_click', { 'event_category': 'contact' });
    });
});

// ===========================
// LAZY LOADING PLACEHOLDER
// ===========================
// If you add actual images to the gallery, implement lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// ===========================
// DYNAMIC YEAR IN FOOTER
// ===========================
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = currentYear;
});

// ===========================
// CONSOLE WELCOME MESSAGE
// ===========================
console.log(
    '%c🚗 Welcome to Precision Window Tint! 🚗',
    'font-size: 20px; font-weight: bold; color: #00a6de;'
);
console.log(
    '%cInterested in our code? Visit our GitHub or contact us!',
    'font-size: 14px; color: #666;'
);

// ===========================
// PERFORMANCE MONITORING
// ===========================
window.addEventListener('load', () => {
    // Log page load time
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);

    // Check if performance is good (under 3 seconds)
    if (loadTime > 3000) {
        console.warn('Page load time is slow. Consider optimizing images and scripts.');
    }
});

// ===========================
// SERVICE WORKER REGISTRATION (Optional)
// ===========================
// Uncomment if you want to add PWA capabilities
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
*/

// ===========================
// PREVENT ORPHANS IN HEADINGS
// ===========================
function preventOrphans() {
    const headings = document.querySelectorAll('h1, h2, h3, .hero-title, .section-title');

    headings.forEach(heading => {
        const text = heading.innerHTML;
        const words = text.split(' ');

        if (words.length > 2) {
            words[words.length - 2] += '&nbsp;' + words[words.length - 1];
            words.pop();
            heading.innerHTML = words.join(' ');
        }
    });
}

preventOrphans();

// ===========================
// INITIALIZE ALL FUNCTIONS
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Landing page initialized successfully!');

    // Add any additional initialization here

    // Track page view (in production with analytics)
    // gtag('event', 'page_view', { 'page_title': 'Landing Page' });
});

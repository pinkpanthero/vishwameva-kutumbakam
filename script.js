// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    let scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.info-card, .zen-card, .membership-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Sign In button functionality
document.querySelector('.sign-in-btn').addEventListener('click', () => {
    alert('Sign In functionality will be implemented soon!');
});

// Learn More buttons
document.querySelectorAll('.learn-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('More information coming soon!');
    });
});

// Zen card click handlers
document.querySelectorAll('.zen-card').forEach(card => {
    card.addEventListener('click', () => {
        const locationName = card.querySelector('h3').textContent;
        alert(`Learn more about ${locationName} - Details coming soon!`);
    });
});

// Info card click handlers
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', () => {
        const cardTitle = card.querySelector('h3').textContent;
        alert(`${cardTitle} - More information coming soon!`);
    });
});

// Add parallax effect to hero image
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

console.log('Vishwameva Kutumbakam website loaded successfully!');

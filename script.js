// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const mailtoLink = `mailto:sumanthdev03@gmail.com?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`)}`;
    window.location.href = mailtoLink;
    alert('Thank you for your message! Your default email client will open to send the email.');
    this.reset();
});

// Back to top button functionality
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add scroll animations
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    if (!section.classList.contains('skills')) {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-in-out';
        observer.observe(section);
    }
});

// Animate skill categories
const skillCategories = document.querySelectorAll('.skill-category');
const skillCategoryObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

skillCategories.forEach(category => {
    skillCategoryObserver.observe(category);
});

// Animate skill tags when they come into view
const skillTags = document.querySelectorAll('.skill-tag');
const skillTagObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 50);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

skillTags.forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px) scale(0.8)';
    tag.style.transition = 'all 0.3s ease';
    skillTagObserver.observe(tag);
});
/* ==========================================
   Navigation & Smooth Scrolling
   ========================================== */

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

/* ==========================================
   Contact Form Validation
   ========================================== */

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Validation Functions
const validateName = (name) => {
    return name.trim().length >= 2;
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
};

const validateSubject = (subject) => {
    return subject.trim().length >= 3;
};

const validateMessage = (message) => {
    return message.trim().length >= 10;
};

// Show/Hide Error Messages
const showError = (input, errorId, message) => {
    const errorElement = document.getElementById(errorId);
    input.style.borderColor = '#fee2e2';
    errorElement.textContent = message;
    errorElement.classList.add('show');
};

const hideError = (input, errorId) => {
    const errorElement = document.getElementById(errorId);
    input.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    errorElement.classList.remove('show');
};

// Real-time Validation
nameInput.addEventListener('blur', () => {
    if (!validateName(nameInput.value)) {
        showError(nameInput, 'nameError', 'Name must be at least 2 characters');
    } else {
        hideError(nameInput, 'nameError');
    }
});

emailInput.addEventListener('blur', () => {
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'emailError', 'Please enter a valid email address');
    } else {
        hideError(emailInput, 'emailError');
    }
});

subjectInput.addEventListener('blur', () => {
    if (!validateSubject(subjectInput.value)) {
        showError(subjectInput, 'subjectError', 'Subject must be at least 3 characters');
    } else {
        hideError(subjectInput, 'subjectError');
    }
});

messageInput.addEventListener('blur', () => {
    if (!validateMessage(messageInput.value)) {
        showError(messageInput, 'messageError', 'Message must be at least 10 characters');
    } else {
        hideError(messageInput, 'messageError');
    }
});

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset all errors
    document.querySelectorAll('.error').forEach(error => {
        error.classList.remove('show');
    });

    // Validate all fields
    let isValid = true;

    if (!validateName(nameInput.value)) {
        showError(nameInput, 'nameError', 'Name must be at least 2 characters');
        isValid = false;
    } else {
        hideError(nameInput, 'nameError');
    }

    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'emailError', 'Please enter a valid email address');
        isValid = false;
    } else {
        hideError(emailInput, 'emailError');
    }

    if (!validateSubject(subjectInput.value)) {
        showError(subjectInput, 'subjectError', 'Subject must be at least 3 characters');
        isValid = false;
    } else {
        hideError(subjectInput, 'subjectError');
    }

    if (!validateMessage(messageInput.value)) {
        showError(messageInput, 'messageError', 'Message must be at least 10 characters');
        isValid = false;
    } else {
        hideError(messageInput, 'messageError');
    }

    // If all validations pass, submit the form
    if (isValid) {
        // Create mailto link
        const mailtoLink = `mailto:vrushabhpatel833@gmail.com?subject=${encodeURIComponent(subjectInput.value)}&body=From: ${encodeURIComponent(nameInput.value)} (${encodeURIComponent(emailInput.value)})%0A%0A${encodeURIComponent(messageInput.value)}`;
        
        // Show success message
        const formNotice = document.getElementById('formNotice');
        formNotice.textContent = '✓ Thank you for your message! Opening your email client...';
        formNotice.classList.add('success');
        formNotice.classList.remove('error');

        // Reset form
        contactForm.reset();

        // Open email client
        window.location.href = mailtoLink;

        // Hide success message after 5 seconds
        setTimeout(() => {
            formNotice.classList.remove('success');
        }, 5000);
    }
});

/* ==========================================
   Interactive Elements
   ========================================== */

// Add hover effects to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add animation to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mousedown', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
    });
});

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and education items for animation
document.querySelectorAll('.project-card, .education-item, .skill-category').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

/* ==========================================
   Profile Image Interaction
   ========================================== */

const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('click', () => {
        profileImage.style.transform = 'scale(1.05)';
        setTimeout(() => {
            profileImage.style.transform = 'scale(1)';
        }, 300);
    });
}

/* ==========================================
   Loading Animation
   ========================================== */

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initially set opacity to handle fade in
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

/* ==========================================
   Prevent Default Link Behavior for Hash Links
   ========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ==========================================
   Responsive Menu Handler
   ========================================== */

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

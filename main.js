// ===== CONTACT FORM VALIDATION =====
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Clear previous errors
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('subjectError').textContent = '';
        document.getElementById('messageError').textContent = '';

        let isValid = true;

        // Validate name
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }

        // Validate email
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            document.getElementById('emailError').textContent = 'Please enter a valid email';
            isValid = false;
        }

        // Validate subject
        if (subject === '') {
            document.getElementById('subjectError').textContent = 'Subject is required';
            isValid = false;
        }

        // Validate message
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
            isValid = false;
        }

        // If all valid — show success
        if (isValid) {
            document.getElementById('successMessage').textContent = '✅ Message sent successfully! I will get back to you soon.';
            form.reset();
        }
    });
}

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.color = '#64B5F6';
        link.style.borderBottom = '2px solid #64B5F6';
    }
});

// ===== SCROLL ANIMATION FOR STAT CARDS =====
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.stat-card, .skill-card, .project-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
// Preloader
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Typed.js
var typed = new Typed('.typed-text', {
    strings: ["مرحباً! أنا محمد,", "مطور ويب محترف ✨", "مصمم مواقع 🎨", "مبرمج تطبيقات 💻"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|',
});

// ScrollReveal
ScrollReveal().reveal('.fade-in', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false,
});
ScrollReveal().reveal('.slide-in', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false,
});
ScrollReveal().reveal('.hover-image', {
    duration: 1000,
    reset: false,
    beforeReveal: (el) => {
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.05)';
            el.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
            el.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    }
});

// Circular Progress Bars
const progressBars = document.querySelectorAll('.circular-progress');
progressBars.forEach(bar => {
    const value = parseInt(bar.querySelector('.circular-progress-value').textContent);
    const progressBar = bar.querySelector('.circular-progress-bar');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.transform = `rotate(${progress * 3.6}deg)`;
        if (progress >= value) {
            clearInterval(interval);
        }
    }, 10);
});

// Project Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.remove('bg-gray-600', 'ring-2', 'ring-gray-500'));
        button.classList.add('bg-gray-600', 'ring-2', 'ring-gray-500');
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formStatus = document.getElementById('form-status');

function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'الاسم مطلوب';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'البريد الإلكتروني مطلوب';
        return false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'بريد إلكتروني غير صالح';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validateMessage() {
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'الرسالة مطلوبة';
        return false;
    } else {
        messageError.textContent = '';
        return true;
    }
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateName() && validateEmail() && validateMessage()) {
        formStatus.textContent = 'جاري الإرسال...';
        // Simulate sending data
        setTimeout(() => {
            formStatus.textContent = 'تم إرسال رسالتك بنجاح!';
            formStatus.style.color = 'green';
            contactForm.reset();
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.style.color = '';
            }, 3000);
        }, 2000);
    } else {
        // Form is invalid, do nothing (errors are displayed by validation functions)
    }
});

// Mobile Menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        });
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
    });
});

// Dark/Light Mode
const themeToggleButtons = document.querySelectorAll('[id*="theme-toggle"]');
const themeIcon = document.getElementById('theme-icon');
const mobileThemeIcon = document.getElementById('mobile-theme-icon');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    mobileThemeIcon.classList.remove('fa-moon');
    mobileThemeIcon.classList.add('fa-sun');
}

themeToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            mobileThemeIcon.classList.remove('fa-moon');
            mobileThemeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            mobileThemeIcon.classList.remove('fa-sun');
            mobileThemeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});

// Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
            },
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

// AI Chatbot
const chatButton = document.getElementById('chat-button');
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const chatSendButton = document.getElementById('chat-send-button');
const chatMessages = document.getElementById('chat-messages');

chatButton.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
});

chatSendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    chatMessages.innerHTML += `
        <div class="message user-message">${message}</div>
    `;
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        chatMessages.innerHTML += `
            <div class="message bot-message">${botResponse}</div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

function getBotResponse(message) {
    message = message.toLowerCase();
    if (message.includes('مرحبا')) {
        return 'أهلاً بك! كيف يمكنني مساعدتك؟';
    } else if (message.includes('ما هي مهاراتك؟')) {
        return 'لدي مهارات في تطوير الويب، تصميم المواقع، وبرمجة تطبيقات الويب.';
    } else if (message.includes('مشاريعك')) {
        return 'يمكنك الاطلاع على مشاريعي في قسم "مشاريعي".';
    } else if (message.includes('تواصل')) {
        return 'يمكنك التواصل معي عبر وسائل التواصل الاجتماعي أو عن طريق ملء النموذج في قسم "تواصل معي".';
    } else {
        return 'أنا آسف، لم أفهم سؤالك. يرجى المحاولة مرة أخرى.';
    }
}
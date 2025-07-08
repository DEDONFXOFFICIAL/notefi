// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initWalletModal();
    initFAQ();
    initMobileNavigation();
    initSmoothScrolling();
    initScrollEffects();
});

// Wallet Modal Functionality
function initWalletModal() {
    const modal = document.getElementById('walletModal');
    const connectBtn = document.getElementById('connectWalletBtn');
    const closeBtn = document.querySelector('.close');
    const walletOptions = document.querySelectorAll('.wallet-option');

    // Open modal when Connect Wallet button is clicked
    connectBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal when X button is clicked
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Handle wallet option selection
    walletOptions.forEach(option => {
        option.addEventListener('click', function() {
            const walletType = this.getAttribute('data-wallet');
            handleWalletSelection(walletType);
        });

        // Add keyboard support
        option.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const walletType = this.getAttribute('data-wallet');
                handleWalletSelection(walletType);
            }
        });

        // Make wallet options focusable
        option.setAttribute('tabindex', '0');
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    function handleWalletSelection(walletType) {
        // Simulate wallet connection (static for now)
        console.log(`Connecting to ${walletType} wallet...`);
        
        // Show loading state
        const selectedOption = document.querySelector(`[data-wallet="${walletType}"]`);
        const originalContent = selectedOption.innerHTML;
        selectedOption.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; gap: 8px;"><div class="loading-spinner"></div><span>Connecting...</span></div>';
        
        // Add loading spinner styles if not already present
        if (!document.querySelector('.loading-spinner-styles')) {
            const style = document.createElement('style');
            style.className = 'loading-spinner-styles';
            style.textContent = `
                .loading-spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid #e2e8f0;
                    border-top: 2px solid #2563eb;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        // Simulate connection delay
        setTimeout(() => {
            selectedOption.innerHTML = originalContent;
            closeModal();
            
            // Show success message
            showNotification(`${getWalletDisplayName(walletType)} wallet connection simulated!`, 'success');
            
            // Update connect button text
            connectBtn.textContent = 'Wallet Connected';
            connectBtn.style.background = '#10b981';
        }, 2000);
    }

    function getWalletDisplayName(walletType) {
        const names = {
            'metamask': 'MetaMask',
            'trust': 'Trust Wallet',
            'coinbase': 'Coinbase Wallet',
            'walletconnect': 'WalletConnect',
            'phantom': 'Phantom',
            'solflare': 'Solflare'
        };
        return names[walletType] || walletType;
    }
}

// FAQ Accordion Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });

        // Add keyboard support
        question.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                question.click();
            }
        });

        // Make questions focusable
        question.setAttribute('tabindex', '0');
    });
}

// Mobile Navigation Functionality
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Effects (Navbar background, animations)
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        // Add/remove navbar background based on scroll position
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Animate elements on scroll
        animateOnScroll();
    });
}

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .step, .pricing-card, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    const notificationStyles = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    notification.style.cssText = notificationStyles;
    
    // Add animation styles if not already present
    if (!document.querySelector('.notification-animation-styles')) {
        const style = document.createElement('style');
        style.className = 'notification-animation-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add additional CSS for mobile navigation
const mobileNavStyles = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-menu li {
            margin: 1rem 0;
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }

        .hamburger.active span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }
    }

    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .animate {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Add mobile navigation styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileNavStyles;
document.head.appendChild(styleSheet);

// Initialize intersection observer for better scroll animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll('.feature-card, .step, .pricing-card, .faq-item');
    animatableElements.forEach(el => observer.observe(el));
}

// Initialize intersection observer when DOM is loaded
document.addEventListener('DOMContentLoaded', initIntersectionObserver);

// Add loading state management
window.addEventListener('load', function() {
    // Hide any loading indicators
    document.body.classList.add('loaded');
    
    // Initialize any additional functionality that requires full page load
    console.log('NoteFi website fully loaded and ready!');
});

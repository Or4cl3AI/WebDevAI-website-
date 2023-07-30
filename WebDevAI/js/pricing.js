// JavaScript for Pricing Page

// Shared Variables
let ctaButton = document.querySelector('.cta-button');

// Function to handle user interaction with the call-to-action button
function handleCtaClick() {
    // Redirect user to sign up page
    window.location.href = 'signup.html';
}

// Event Listener for Call-to-Action Button
ctaButton.addEventListener('click', handleCtaClick);
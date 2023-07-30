// JavaScript for Pricing Page

// Handle Pricing Plan Selection
function handlePlanSelection(plan) {
    let selectedPlan = document.getElementById(plan);
    selectedPlan.classList.add('selected');
}

// Handle Sign Up Button Click
function handleSignUp() {
    let ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        window.location.href = 'signup.html';
    });
}

// Initialize Page
function initPricingPage() {
    handleSignUp();
}

// Call Initialization Function
document.addEventListener('DOMContentLoaded', initPricingPage);
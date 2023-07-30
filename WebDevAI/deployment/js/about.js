// Shared Variables
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let menuBar = document.querySelector('.menu-bar');
let ctaButton = document.querySelector('.cta-button');

// Function to handle navigation
function handleNavigation(event) {
    let target = event.target;
    if (target.tagName === 'A') {
        let sectionId = target.getAttribute('href').slice(1);
        let section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
        event.preventDefault();
    }
}

// Add event listener to menu bar
menuBar.addEventListener('click', handleNavigation);

// Function to handle CTA button click
function handleCTAClick() {
    window.location.href = 'signup.html';
}

// Add event listener to CTA button
ctaButton.addEventListener('click', handleCTAClick);
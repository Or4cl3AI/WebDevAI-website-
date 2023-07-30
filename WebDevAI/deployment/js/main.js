// Shared Variables
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let menuBar = document.querySelector('.menu-bar');
let ctaButton = document.querySelectorAll('.cta-button');
let chatbot = document.querySelector('.chatbot');

// Shared Functions
function handleNavigation(event) {
    let targetPage = event.target.getAttribute('href');
    window.location.href = targetPage;
}

function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    // Process form data
}

function handleChatbotInteraction(event) {
    let userInput = event.target.value;
    // Process user input and generate bot response
}

// Event Listeners
menuBar.addEventListener('click', handleNavigation);
ctaButton.forEach(button => button.addEventListener('click', handleSubmit));
chatbot.addEventListener('input', handleChatbotInteraction);
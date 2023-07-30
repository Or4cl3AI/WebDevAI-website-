// Import shared dependencies
import { handleNavigation, handleSubmit, handleChatbotInteraction } from './main.js';

// DOM Elements
const chatbot = document.getElementById('chatbot');
const userInput = document.getElementById('userInput');
const botResponse = document.getElementById('botResponse');

// Event Listener for user input
userInput.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target.value;
  handleChatbotInteraction(input);
});

// Function to handle chatbot interaction
function handleChatbotInteraction(input) {
  // Generate code based on user input
  const codeSnippet = WebDevAI.generateCode(input);

  // Display code snippet in bot response
  botResponse.textContent = codeSnippet;

  // Clear user input
  userInput.value = '';
}

// Function to handle navigation
function handleNavigation() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      const page = event.target.getAttribute('data-page');
      navigateTo(page);
    });
  });
}

// Function to navigate to a specific page
function navigateTo(page) {
  window.location.href = `${page}.html`;
}

// Initialize functions
handleNavigation();
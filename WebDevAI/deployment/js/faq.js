// Shared Variables
var faqData = [
    {
        question: "How does WebDevAI work?",
        answer: "WebDevAI uses advanced natural language processing and code generation models to turn your ideas into reality."
    },
    {
        question: "What programming languages are supported?",
        answer: "WebDevAI supports HTML, CSS, and JavaScript."
    },
    {
        question: "How to get started with WebDevAI?",
        answer: "Just sign up for our free plan and start creating your visually stunning and fully reactive landing page."
    }
];

// Function to display FAQ
function displayFAQ() {
    var faqContainer = document.getElementById('faq-container');
    faqData.forEach(function(faq) {
        var faqElement = document.createElement('div');
        faqElement.className = 'faq-element';

        var questionElement = document.createElement('h3');
        questionElement.textContent = faq.question;
        faqElement.appendChild(questionElement);

        var answerElement = document.createElement('p');
        answerElement.textContent = faq.answer;
        faqElement.appendChild(answerElement);

        faqContainer.appendChild(faqElement);
    });
}

// Call the function when the page loads
window.onload = displayFAQ;
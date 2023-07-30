```javascript
// Importing shared dependencies
import { appFAQ } from '../shared_dependencies.js';

// Function to display FAQ
function displayFAQ() {
    const faqSection = document.getElementById('faqSection');

    appFAQ.forEach(faq => {
        const faqContainer = document.createElement('div');
        const question = document.createElement('h3');
        const answer = document.createElement('p');

        question.textContent = faq.question;
        answer.textContent = faq.answer;

        faqContainer.appendChild(question);
        faqContainer.appendChild(answer);
        faqSection.appendChild(faqContainer);
    });
}

// Call the function to display FAQ on page load
window.onload = displayFAQ;
```
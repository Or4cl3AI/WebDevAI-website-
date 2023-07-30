```javascript
// Define the app name
const appName = 'WebDevAI';

// Define the demo message
const demoMessage = 'Enter your natural language descriptions and receive code snippets in response.';

// Function to display the demo message
function displayDemoMessage() {
    document.getElementById('demoMessage').innerText = demoMessage;
}

// Function to generate code based on user input
function generateCode() {
    const userInput = document.getElementById('userInput').value;
    // Here, we would use the WebDevAI's advanced natural language processing and code generation models to generate code based on the user input
    // For the purpose of this demo, we will just return a simple HTML code snippet
    const codeSnippet = `<h1>Welcome to ${appName}</h1>\n<p>${userInput}</p>`;
    document.getElementById('codeOutput').innerText = codeSnippet;
}

// Event listener for the 'Generate Code' button
document.getElementById('generateCodeButton').addEventListener('click', generateCode);

// Display the demo message when the page loads
window.onload = displayDemoMessage;
```
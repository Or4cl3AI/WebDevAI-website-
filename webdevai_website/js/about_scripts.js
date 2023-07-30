```javascript
// JavaScript for About Page

// Variables
var appName = "WebDevAI";
var appFeatures = ["Advanced natural language processing", "Code generation models", "Effortless idea-to-reality transformation"];
var appBenefits = ["Visually stunning and fully reactive landing page for free", "Full multi-page interactive and reactive website for just $15 a month", "Integration of your own AI into your website for $30 a month"];
var appTargetAudience = ["Web developers", "AI enthusiasts", "Businesses looking to create a strong online presence"];
var appDevelopmentTeam = ["John Doe - Lead Developer", "Jane Doe - AI Specialist", "Sam Smith - UI/UX Designer"];

// Function to display app information
function displayAppInfo() {
    document.getElementById('appName').textContent = appName;
    document.getElementById('appFeatures').textContent = appFeatures.join(', ');
    document.getElementById('appBenefits').textContent = appBenefits.join(', ');
    document.getElementById('appTargetAudience').textContent = appTargetAudience.join(', ');
    document.getElementById('appDevelopmentTeam').textContent = appDevelopmentTeam.join(', ');
}

// Call function on page load
window.onload = displayAppInfo;
```
```javascript
// Shared Variables
var appName = "WebDevAI";
var appLogo = "assets/logo.png";
var appFeatures = ["Advanced NLP", "Code Generation", "Interactive Design"];
var appBenefits = ["Effortless Development", "Stunning Designs", "AI Integration"];
var appTargetAudience = ["Developers", "Designers", "Businesses"];
var appPricing = [
  {tier: "Free", features: ["Landing Page"], price: 0},
  {tier: "Basic", features: ["Multi Page", "Interactive"], price: 15},
  {tier: "Pro", features: ["AI Integration"], price: 30}
];
var appFAQ = [
  {question: "How does it work?", answer: "Through advanced NLP and code generation."},
  {question: "What languages are supported?", answer: "HTML, CSS, JavaScript."},
  {question: "How to get started?", answer: "Sign up and start describing your website."}
];
var appBlog = ["Blog Post 1", "Blog Post 2", "Blog Post 3"];
var appDemo = "demo.html";

// Function Definitions
function displayFeatures() {
  var featureList = document.getElementById('featureList');
  appFeatures.forEach(function(feature) {
    var listItem = document.createElement('li');
    listItem.textContent = feature;
    featureList.appendChild(listItem);
  });
}

function displayBenefits() {
  var benefitList = document.getElementById('benefitList');
  appBenefits.forEach(function(benefit) {
    var listItem = document.createElement('li');
    listItem.textContent = benefit;
    benefitList.appendChild(listItem);
  });
}

function displayPricing() {
  var pricingTable = document.getElementById('pricingTable');
  appPricing.forEach(function(tier) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var featureCell = document.createElement('td');
    var priceCell = document.createElement('td');
    nameCell.textContent = tier.tier;
    featureCell.textContent = tier.features.join(', ');
    priceCell.textContent = '$' + tier.price;
    row.appendChild(nameCell);
    row.appendChild(featureCell);
    row.appendChild(priceCell);
    pricingTable.appendChild(row);
  });
}

function displayFAQ() {
  var faqList = document.getElementById('faqList');
  appFAQ.forEach(function(faq) {
    var listItem = document.createElement('li');
    listItem.textContent = faq.question + ' ' + faq.answer;
    faqList.appendChild(listItem);
  });
}

function displayBlogPosts() {
  var blogList = document.getElementById('blogList');
  appBlog.forEach(function(post) {
    var listItem = document.createElement('li');
    listItem.textContent = post;
    blogList.appendChild(listItem);
  });
}

function displayDemo() {
  var demoLink = document.getElementById('demoLink');
  demoLink.href = appDemo;
}

function signUp() {
  var signUpButton = document.getElementById('signUpButton');
  signUpButton.addEventListener('click', function() {
    alert('Thank you for signing up!');
  });
}

// Function Calls
displayFeatures();
displayBenefits();
displayPricing();
displayFAQ();
displayBlogPosts();
displayDemo();
signUp();
```
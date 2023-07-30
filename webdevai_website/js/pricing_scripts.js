```javascript
// Pricing Data
const appPricing = [
  {
    tier: "Free",
    price: 0,
    features: ["Visually stunning landing page", "Fully reactive"]
  },
  {
    tier: "Basic",
    price: 15,
    features: ["Full multi page interactive website", "Reactive design"]
  },
  {
    tier: "Premium",
    price: 30,
    features: ["AI integration into your website"]
  }
];

// Function to display pricing
function displayPricing() {
  const pricingSection = document.getElementById('pricingSection');

  appPricing.forEach((plan) => {
    const planDiv = document.createElement('div');
    const planTitle = document.createElement('h2');
    const planPrice = document.createElement('p');
    const planFeatures = document.createElement('ul');
    const signUpButton = document.createElement('button');

    planTitle.textContent = plan.tier;
    planPrice.textContent = `$${plan.price} per month`;
    signUpButton.textContent = 'Sign Up';
    signUpButton.addEventListener('click', signUp);

    plan.features.forEach((feature) => {
      const featureItem = document.createElement('li');
      featureItem.textContent = feature;
      planFeatures.appendChild(featureItem);
    });

    planDiv.appendChild(planTitle);
    planDiv.appendChild(planPrice);
    planDiv.appendChild(planFeatures);
    planDiv.appendChild(signUpButton);

    pricingSection.appendChild(planDiv);
  });
}

// Function to sign up a user
function signUp() {
  const signUpMessage = 'Thank you for signing up! Please check your email for further instructions.';
  alert(signUpMessage);
}

// Call the function to display pricing on page load
window.onload = displayPricing;
```
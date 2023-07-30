// Shared Variables
let ctaButton = document.querySelector('.cta-button');

// Function to handle CTA button click
function handleCtaClick() {
    window.location.href = '/signup.html';
}

// Event Listener for CTA button
ctaButton.addEventListener('click', handleCtaClick);

// Function to load blog posts
function loadBlogPosts() {
    // Fetch blog posts from server (placeholder URL)
    fetch('https://webdevai.com/api/blog')
        .then(response => response.json())
        .then(data => {
            let blogContainer = document.querySelector('.blog-container');
            data.forEach(post => {
                let postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <a href="${post.url}">Read More</a>
                `;
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Call function to load blog posts on page load
window.onload = loadBlogPosts;
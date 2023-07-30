// Shared Variables
let blogPosts = [];

// Function to fetch blog posts from API
async function fetchBlogPosts() {
    try {
        const response = await fetch('https://api.example.com/blog');
        blogPosts = await response.json();
        displayBlogPosts();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display blog posts
function displayBlogPosts() {
    const blogContainer = document.getElementById('blog-container');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="${post.link}" target="_blank">Read More</a>
        `;
        blogContainer.appendChild(postElement);
    });
}

// Function to handle sign up button click
function handleSignUp() {
    const signUpButton = document.getElementById('cta-button');
    signUpButton.addEventListener('click', () => {
        window.location.href = '/signup.html';
    });
}

// Call functions on page load
window.onload = () => {
    fetchBlogPosts();
    handleSignUp();
};
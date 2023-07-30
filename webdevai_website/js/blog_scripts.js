```javascript
// Shared Variables
var appBlog = [
    {
        title: "Getting Started with WebDevAI",
        content: "This is a tutorial on how to get started with WebDevAI...",
        link: "https://www.webdevai.com/blog/getting-started"
    },
    // More blog posts...
];

// Function to display blog posts
function displayBlogPosts() {
    var blogSection = document.getElementById('blogSection');

    for (var i = 0; i < appBlog.length; i++) {
        var blogPost = document.createElement('div');
        blogPost.className = 'blogPost';

        var title = document.createElement('h2');
        title.textContent = appBlog[i].title;
        blogPost.appendChild(title);

        var content = document.createElement('p');
        content.textContent = appBlog[i].content;
        blogPost.appendChild(content);

        var readMore = document.createElement('a');
        readMore.textContent = 'Read More';
        readMore.href = appBlog[i].link;
        blogPost.appendChild(readMore);

        blogSection.appendChild(blogPost);
    }
}

// Function to handle sign up button click
function handleSignUpClick() {
    var signUpMessage = "Sign up for WebDevAI to turn your ideas into reality!";
    alert(signUpMessage);
}

// Add event listener to sign up button
var signUpButton = document.getElementById('signUpButton');
signUpButton.addEventListener('click', handleSignUpClick);

// Display blog posts on page load
window.onload = displayBlogPosts;
```
// JavaScript for About Page

document.addEventListener('DOMContentLoaded', function() {
    handleNavigation();
    loadAboutContent();
});

function handleNavigation() {
    const menuBar = document.getElementById('menu-bar');
    menuBar.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'A') {
            const page = target.getAttribute('href').slice(1);
            loadPageContent(page);
        }
    });
}

function loadAboutContent() {
    const aboutSection = document.getElementById('about-section');
    aboutSection.innerHTML = `
        <h2>About WebDevAI</h2>
        <p>WebDevAI is an innovative web development assistant powered by advanced natural language processing and code generation models. With WebDevAI, users can effortlessly turn their ideas into reality.</p>
        <h3>Our Team</h3>
        <p>Our team consists of experienced developers and AI researchers who are passionate about making web development accessible to everyone.</p>
    `;
}

function loadPageContent(page) {
    switch (page) {
        case 'home':
            window.location.href = 'index.html';
            break;
        case 'pricing':
            window.location.href = 'pricing.html';
            break;
        case 'faq':
            window.location.href = 'faq.html';
            break;
        case 'blog':
            window.location.href = 'blog.html';
            break;
        case 'demo':
            window.location.href = 'demo.html';
            break;
        default:
            break;
    }
}
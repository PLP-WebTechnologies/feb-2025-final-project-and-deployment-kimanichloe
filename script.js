// Simple JavaScript interactivity - adding a dynamic message to the homepage

document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const dynamicMessage = document.createElement('p');
        dynamicMessage.textContent = 'This message was added dynamically with JavaScript!';
        dynamicMessage.classList.add('dynamic-message');
        heroContent.appendChild(dynamicMessage);
    }

    console.log('Page loaded and script.js executed from Kitengela!');
});
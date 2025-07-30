function waveHi() {
    const greeting = document.querySelector('.greeting');
    const button = document.querySelector('.wave-button');
    
    // Disable button temporarily
    button.disabled = true;
    
    // Animate the greeting
    greeting.style.animation = 'none';
    greeting.offsetHeight; // Trigger reflow
    greeting.style.animation = 'bounce 1s ease-out';
    
    // Update the message
    const message = document.querySelector('.message');
    message.textContent = 'Thanks for waving back! 👋';
    
    // Re-enable button after animation
    setTimeout(() => {
        button.disabled = false;
        message.textContent = 'Click the button to wave back!';
    }, 2000);
}
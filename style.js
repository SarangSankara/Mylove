const envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
    const isOpen = envelope.classList.toggle('open');
    
    if (isOpen) {
        createHearts(15);
    }
});

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        
        // Random horizontal position and animation delay
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.left = (50 + (Math.random() * 40 - 20)) + '%'; 
        heart.style.animationDelay = Math.random() * 0.5 + 's';
        
        envelope.appendChild(heart);
        
        // Remove heart from DOM after animation finishes
        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}

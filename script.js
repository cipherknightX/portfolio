document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

const likeButton = document.getElementById('likeButton');
const emojis = ['👨‍💻', '👩‍💻', '🔥', '💡', '🚀', '🌟', '📚', '🎨', '✨'];

likeButton.addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        createFallingEmoji();
    }
});

function createFallingEmoji() {
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.classList.add('emoji');
    emoji.style.left = `${Math.random() * 100}vw`;
    const duration = Math.random() * 2 + 3; // random duration between 3s and 5s
    emoji.style.animationDuration = `${duration}s`;
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, duration * 1000); // remove emoji after it falls
}



// contact me 
function contactMe() {
    alert("Links are in the footer! 😂");

    for (let i = 0; i < 50; i++) {  // Increase number for more emojis
        createLaughingEmoji();
    }

    setTimeout(() => {
        const emojis = document.querySelectorAll('.emoji');
        emojis.forEach(emoji => emoji.remove());
    }, 3000); // Emojis will be removed from the page after 3 seconds
}

function createLaughingEmoji() {
    const emoji = document.createElement('div');
    emoji.textContent = '😂';  // Laughing emoji
    emoji.classList.add('emoji');
    emoji.style.left = `${Math.random() * 100}vw`;
    const duration = Math.random() * 3 + 1; // random duration between 1s and 3s
    emoji.style.animationDuration = `${duration}s`;
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, duration * 1000); // remove emoji after it falls
}

document.addEventListener('DOMContentLoaded', () => {
    const entryVideo = document.getElementById('entry-video');
    const enterButton = document.getElementById('enter-button');
    const entryContainer = document.querySelector('.entry-container');
    const aiInterface = document.getElementById('ai-interface');
    const aiOutput = document.getElementById('ai-output');
    const clickSound = document.getElementById('click-sound');

    const messages = [
        "Initializing Deep Fud Neural Protocol...",
        "Analyzing blockchain memetics...",
        "Simulating fear, uncertainty, and doubt...",
        "Deploying 'too smart to fail' routines...",
        "FUD metrics now at maximum efficiency...",
        "Welcome to the depths of the Deep Fud."
    ];

    const displayAIOutput = () => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < messages.length) {
                const message = document.createElement('p');
                message.textContent = messages[index];
                aiOutput.appendChild(message);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 2000);
    };

    // Show the button 2-3 seconds before the video ends
    entryVideo.addEventListener('timeupdate', () => {
        const videoDuration = entryVideo.duration;
        const currentTime = entryVideo.currentTime;

        // Show button 2 seconds before the video ends
        if (currentTime >= videoDuration - 3) {
            enterButton.classList.remove('hidden');
            enterButton.classList.add('show');
        }
    });

    enterButton.addEventListener('click', () => {
        clickSound.play();
        entryContainer.classList.add('hidden');
        aiInterface.classList.remove('hidden');
        displayAIOutput();
    });
});

const updateMetrics = () => {
    const fearBar = document.getElementById("fear-bar");
    const uncertaintyBar = document.getElementById("uncertainty-bar");
    const doubtBar = document.getElementById("doubt-bar");

    const fearValue = document.getElementById("fear-value");
    const uncertaintyValue = document.getElementById("uncertainty-value");
    const doubtValue = document.getElementById("doubt-value");

    setInterval(() => {
        fearBar.value = Math.floor(Math.random() * 100);
        uncertaintyBar.value = Math.floor(Math.random() * 100);
        doubtBar.value = Math.floor(Math.random() * 100);

        fearValue.textContent = `${fearBar.value}%`;
        uncertaintyValue.textContent = `${uncertaintyBar.value}%`;
        doubtValue.textContent = `${doubtBar.value}%`;
    }, 3000); // Update every 3 seconds
};

updateMetrics();


document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter');
    const textToType = "We're Coming Soon...";
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            textElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Handle form submission
    const form = document.getElementById('waitlistForm');
    const messageElement = document.getElementById('formMessage');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        messageElement.textContent = "Thank you! You're on the list.";
        form.reset();
        setTimeout(() => {
            messageElement.textContent = "";
        }, 5000);
    });
});
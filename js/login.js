document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Valid credentials
    const validUserIds = ['20071208', '2009109'];
    const validPassword = '1337';

    // Check if entered user ID is valid and password matches
    if (validUserIds.includes(userId) && password === validPassword) {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0';

        setTimeout(() => {
            window.location.href = 'welcome.html'; // Redirect after animation
        }, 500);
    } else {
        alert('Incorrect User ID or Password');
    }
});
// Select elements
const loginCard = document.querySelector('.lg-card');
const passwordInput = document.getElementById('password');

// Add focus and blur events to password input
passwordInput.addEventListener('focus', () => {
    document.body.classList.add('blurred'); // Blur the background
    loginCard.classList.add('active');      // Zoom the login card
});

passwordInput.addEventListener('blur', () => {
    document.body.classList.remove('blurred'); // Remove blur
    loginCard.classList.remove('active');      // Return login card to normal
});


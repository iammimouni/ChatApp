document.getElementById('chatForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    // User profile image
    const userProfileImage = document.createElement('img');
    userProfileImage.src = 'images/BackgroundFront.png'; // Replace with user profile image path

    // Message text container
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-text');

    // Check for emoji in the message
    const textWithEmoji = messageText.replace(/:smile:/g, '😊')
                                       .replace(/:thumbsup:/g, '👍')
                                       .replace(/:heart:/g, '❤️')
                                       .replace(/:laugh:/g, '😂')
                                       .replace(/:wink:/g, '😉')
                                       .replace(/:sad:/g, '😢')
                                       .replace(/:angry:/g, '😡')
                                       .replace(/:kiss:/g, '😘')
                                       .replace(/:party:/g, '🥳')
                                       .replace(/:star:/g, '⭐');

    messageContent.innerHTML = textWithEmoji;

    // Append elements
    messageElement.appendChild(userProfileImage);
    messageElement.appendChild(messageContent);
    document.getElementById('messages').appendChild(messageElement);

    // Clear the input
    messageInput.value = '';

    // Scroll to the bottom of the messages
    const messagesContainer = document.getElementById('messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

// Emoji functionality
const emojiPicker = document.getElementById('emojiPicker');
const messageInput = document.getElementById('messageInput');

// Toggle emoji picker visibility
messageInput.addEventListener('focus', () => {
    emojiPicker.style.display = 'flex';
});

document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', () => {
        messageInput.value += emoji.innerText; // Append emoji to input
        messageInput.focus(); // Keep focus on input
    });
});

// Hide emoji picker when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('#emojiPicker') && !event.target.closest('#messageInput')) {
        emojiPicker.style.display = 'none';
    }
});

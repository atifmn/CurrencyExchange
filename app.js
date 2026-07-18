// Locate elements in the DOM (Document Object Model)
const actionButton = document.getElementById('action-btn');
const statusText = document.getElementById('status-text');

// Track the state of the GUI application
let clickCount = 0;

// Listen for a click event on the button
actionButton.addEventListener('click', () => {
    clickCount++;
    statusText.innerText = `Success! The GUI button has been clicked ${clickCount} times.`;
    statusText.style.color = '#28a745'; // Change text to green
});
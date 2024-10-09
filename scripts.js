// scripts.js

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the "Start Watching" button and add a click event
    const startButton = document.querySelector('.hero button');
    startButton.addEventListener('click', function() {
        // Redirect to the Movies section when button is clicked
        window.location.href = '#';
        alert("Redirecting to the Movies section!");  // Placeholder action
    });

    // Simulate loading movie data
    const movieItems = document.querySelectorAll('.movie-item');
    movieItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Simulate showing details for the selected movie
            alert(`You selected Movie ${index + 1}!`);
        });
    });
});

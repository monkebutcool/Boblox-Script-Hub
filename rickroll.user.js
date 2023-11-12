/**
 * Function to open a specified link when the user goes into anytime.
 *
 * @param {string} link - The URL of the specified link to be opened.
 */
function openLinkOnAnytime(link) {
    // Check if the browser supports the 'beforeunload' event
    if (window.addEventListener) {
        // Add an event listener to the 'beforeunload' event
        window.addEventListener('beforeunload', function() {
            // Open the specified link when the user goes into anytime
            window.open(link);
        });
    } else {
        // For older browsers that do not support the 'beforeunload' event
        window.onbeforeunload = function() {
            // Open the specified link when the user goes into anytime
            window.open(link);
        };
    }
}

// Example Usage
const specifiedLink = 'https://youtu.be/dQw4w9WgXcQ?si=LMVIiEaTVyFClmo9';
openLinkOnAnytime(specifiedLink);

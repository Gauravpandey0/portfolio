const elements = document.querySelectorAll('.fade-in');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
} 
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});
const image1 = document.getElementById('avt1');
const image2 = document.getElementById('avt2');
let currentImage = image1;

function toggleImages() {
    currentImage.classList.add('hidden'); // Hide the current image
    currentImage.style.transform = 'rotate(180deg)';

    if (currentImage === image1) {
        currentImage = image2;
    } else {
        currentImage = image1;
    }

    setTimeout(() => {
        currentImage.classList.remove('hidden'); // Show the other image
        currentImage.style.transform = 'rotate(0deg)';
    }, 10); // Delay for smoother transition
}

// Set an interval to toggle between images every 1 minute (adjust as needed)
setInterval(toggleImages, 3500); 

// Function to create a typing animation
function typeHeading(text, elementId, delay) {
    const element = document.getElementById(elementId);
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }

    // Start the typing animation
    type();
}

// Call the function when the page is loaded
window.onload = function() {
    // Delay between each letter (adjust as needed)
    const typingDelay = 150; // 250 milliseconds
    const headingText = "I am Priyanshu Singh"; // Text to be typed
    const headingElementId = "typing-heading"; // ID of the heading element
    const welcomeText = "Welcome!";
    const welcomeElementId = "typing-welcome";

    // Start the typing animation for the heading
    typeHeading(headingText, headingElementId, typingDelay);
    typeHeading(welcomeText, welcomeElementId, typingDelay)
};

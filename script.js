document.addEventListener("DOMContentLoaded", () => {
    // Select all doodles
    const doodles = document.querySelectorAll('.doodle');
    
    // We use window.innerWidth and window.innerHeight to cover the whole screen
    // We subtract 60 to ensure doodles don't get cut off at the edges
    const pageWidth = window.innerWidth - 60;
    const pageHeight = window.innerHeight - 60;

    doodles.forEach(doodle => {
        // Generate random X and Y coordinates for the entire page
        const randomX = Math.floor(Math.random() * pageWidth);
        const randomY = Math.floor(Math.random() * pageHeight);
        
        // Random Rotation between -30 and 30 degrees
        const randomRotate = Math.floor(Math.random() * 60) - 30;

        // Apply styles to position them absolutely relative to the window
        doodle.style.left = `${randomX}px`;
        doodle.style.top = `${randomY}px`;
        doodle.style.transform = `rotate(${randomRotate}deg)`;
    });
});

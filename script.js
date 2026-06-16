document.addEventListener("DOMContentLoaded", () => {
    const doodles = document.querySelectorAll('.doodle');
    const container = document.getElementById('doodle-container');
    
    // Set container height based on how far down you want doodles to scatter
    // Using window.innerHeight ensures they spread across the whole screen
    container.style.height = (window.innerHeight - 100) + 'px';

    const containerWidth = container.offsetWidth - 80;
    const containerHeight = container.offsetHeight - 80;

    doodles.forEach(doodle => {
        // Random X and Y position
        const randomX = Math.floor(Math.random() * containerWidth);
        const randomY = Math.floor(Math.random() * containerHeight);
        
        // Random Rotation between -30 and 30 degrees
        const randomRotate = Math.floor(Math.random() * 60) - 30;

        // Apply styles
        doodle.style.left = `${randomX}px`;
        doodle.style.top = `${randomY}px`;
        doodle.style.transform = `rotate(${randomRotate}deg)`;
    });
});

document.querySelectorAll('.doodle').forEach(doodle => {
    // Random position within the section
    doodle.style.top = Math.random() * 80 + '%'; 
    doodle.style.left = Math.random() * 80 + '%';
    // Random rotation
    doodle.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
});

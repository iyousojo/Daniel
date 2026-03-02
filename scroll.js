// Scroll Reveal Initialization
ScrollReveal({
    distance: '20px',
    duration: 2000,
    delay: 200,
    reset: true
});
    
// Corrected ScrollReveal calls
ScrollReveal().reveal(' .about', { origin: 'bottom' });
ScrollReveal().reveal('#contactus', { origin: 'left' });
ScrollReveal().reveal('.card', { origin: 'right' });
document.querySelectorAll('.ai-card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.open(url, '_blank'); // Opens the link in a new tab
    });
});

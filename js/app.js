baguetteBox.run('.gallery', {
    captions: true
});

const searchInput = document.getElementById('search'); 
searchInput.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let links = document.querySelectorAll('a');
    
    links.forEach(link => {
        if (link.getAttribute('data-caption').toLowerCase().includes(currentValue)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    })
});
(function(){
    let dubaitext = document.getElementbyId('dubaitext');
    let burjkhalifa = document.getElementbyId('burjkhalifa');
    let stars = document.getElementbyId('stars');

    window.addEventListener('scroll', () => {
    let value = window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';
    stars.style.top = value * 1 + 'px';
    });
})();
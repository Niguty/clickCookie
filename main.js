document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += '<div id="counter">Cliques: 0</div>';

    const cookie = new Cookie({
        x: window.innerWidth / 2 - 50, 
        y: window.innerHeight / 2 - 50, 
        count: 0
    });

    console.log('Aplicação iniciada!');
});

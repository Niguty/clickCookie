class Cookie {
    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.count = initial.count || 0
        this.element = this.createElement()
        this.addClickListener() 
    }

    createElement(){
        const cookie = document.createElement('div')
        cookie.classList.add('cookie')
        cookie.style.position = 'absolute';
        cookie.style.left = `${this.x}px`
        cookie.style.top = `${this.y}px`
        cookie.style.width = '100px'
        cookie.style.height = '100px'
        cookie.style.background = 'url("https://img.freepik.com/psd-gratuitas/cozinhar-deliciosos-biscoitos-de-chocolate-isolados-em-fundo-transparente_191095-16881.jpg?t=st=1733414280~exp=1733417880~hmac=a5c29a9b1f44a1c93778322624cbd332ff75b7d44d7086b61778b6d3bf42da10&w=740") no-repeat center';
        cookie.style.cursor = 'pointer'
        document.body.appendChild(cookie);
        return cookie
    }

    addClickListener(){
        this.element.addEventListener('click', () => {
            this.count++
            this.updateCounter();
            console.log(`número de clicks: ${this.count}`)
        })
    }

    updateCounter(){
        const counterElement = document.getElementById('counter');
            if(counterElement){
                counterElement.textContent = `Clicks: ${this.count}`
            }
    }
}
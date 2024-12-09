class Cookie {
    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.count = initial.count || 0
        this.element = this.createElement()
        this.addClickListener();
    }

    createElement(){
             const cookie = document.createElement('div')
             cookie.classList.add('cookie')
             cookie.style.position = 'absolute'
             cookie.style.left = `${this.x}px`
             cookie.style.top = `${this.y}px`
             cookie.style.width = '100px'
             cookie.style.height = '100px'
             cookie.style.cursor = 'pointer'

             const img = this.createImageElement()
             cookie.appendChild(img)
             document.body.appendChild(cookie)
             return cookie
    }
    
    createImageElement() {
             const img = document.createElement('img')
             img.src = './cookie.png'
             img.alt = 'Cookie'
             img.style.position = 'fixed'
             img.style.top = '50%'
             img.style.left = '50%'
             img.style.transform = 'translate(-85%, -50%)'
             img.style.maxWidth = '90vw'
             img.style.maxHeight = '90vh'
             img.style.objectFit = 'contain'
             img.style.position = 'pointer'
             img.style.borderRadius = '50%'

        return img;
    }

    addClickListener() {
        this.element.addEventListener('click', () => {
            this.incrementCounter()
        });
    }

    incrementCounter() {
        this.count++;
        this.updateCounter();
        console.log(`Número de clicks: ${this.count}`);
    }

    updateCounter() {
        const counter = document.getElementById('counter')
        if(counter){
            counter.textContent = `Clicks: ${this.count}`
        }
    }
}
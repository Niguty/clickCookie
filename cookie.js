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
             cookie.style.position = 'absolute';
             cookie.style.left = `${this.x}px`
             cookie.style.top = `${this.y}px`
             cookie.style.width = '100px'
             cookie.style.height = '100px'
             cookie.style.cursor = 'pointer'
             cookie.style.left = `calc(40% - 60px)`;
             cookie.style.top = `calc(15% - 1px)`;
        
        const img = document.createElement('img');
             img.src = './cookie.png'; 
             img.alt = 'Cookie';
             img.style.width = '500%'; 
             img.style.height = '500%'; 
             img.style.objectFit = 'contain'; 
             img.style.borderRadius = '50%'; 
        
        const som = document.createElement('som'
        )

        cookie.appendChild(img)
        document.body.appendChild(cookie);
        return cookie
    }

    addClickListener() {
        this.element.addEventListener('click', () => {
            this.count++;
            this.updateCounter();
            console.log(`Número de cliques: ${this.count}`);
        });
    }

    updateCounter() {
        const counterElement = document.getElementById('counter');
        if (counterElement) {
            counterElement.textContent = `Cliques: ${this.count}`;
        }
    }
}
class Cookie {
    constructor(initial){
        this.x = initial.x
        this.y = initial.y
        this.count = initial.count || 0
        this.element = this.createElement()
        this.addClickListener() 
    }

    createElement(element){
        const cookie = document.createElement('div')
        cookie.classList.add('cookie')
        return cookie
    }

    

}
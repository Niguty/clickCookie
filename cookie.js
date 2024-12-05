class Cookie {
    constructor(x, y, count){
        this.x = initial.x
        this.y = initial.y
        this.count = initial.count
        this.element = this.createElement() 
    }

    createElement(element){
        const cookie = document.createElement('div')
        cookie.classList.add('cookie')
        return cookie
    }

    update(){
        this.OnClick()
        this.OnPressedAnimation()
    }

    OnClick(){}
    OnPressedAnimation(){}

}
class Cookie {
    constructor(initial){
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

    OnClick(){
        document.body.addEventListener('mouse', (event) => {
            
            if(key == 'mouse tap') {this.mouseTab.left = true}
            if(key == 'mouse tap') {this.mouseTab.right = true}
        })
        count = counter++
    }


    OnPressedAnimation(){
        if(onPressMouse == true && count > 0){
            cookie da um pulinho
        } else {
            cookie permanece parado
        }
    }

}
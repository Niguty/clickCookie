class Game {
    constructor(){
        this.map = document.querySelector('.map');
        this.instance = []
    }

    addObject(instance){
        this.map.insertAdjacentElement('beforeend', instance.element)
        this.instances.push(instance)
    }
}
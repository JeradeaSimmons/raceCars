export class Racer {



    constructor(name, picture, number, distance) {
        this.name = name
        this.picture = picture
        this.number = number
        this.distance = distance
    }



    get Template() {
        return `
        <div class="row bg-dark text-light mt-3">
    <div class="col"><h3>${this.name}</h3><p>${this.number}</p><p>${this.distance}</p>
                        <p class="carSize">${this.picture}</p>
                    </div></div>
    
    `
    }

}
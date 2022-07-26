import { AppState } from "./AppState.js";
console.log(AppState);


function _drawRacers() {
    let racers = AppState.racers
    let template = ''
    racers.forEach(racer => template += racer.Template)
    document.getElementById('racers').innerHTML = template
}
_drawRacers()

class Controller {
    constructor() {
        setInterval(this.startRace, 1000)
    }

    startRace() {

        let racers = AppState.racers

        racers.forEach(racer => {
            racer.distance += 1

            startRace()
        })
    }

} 

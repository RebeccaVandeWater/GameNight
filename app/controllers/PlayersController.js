import { AppState } from "../AppState.js"
import { playerServices } from "../services/PlayerServices.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"


function _drawPlayers() {
    let players = AppState.players

    console.log("these are my players:", players)

    let template = ''

    players.forEach(player => template += player.PlayerTemplateCard)

    // console.log(players[0].PlayerTemplateCard)
    console.log("This is my template: ", template)

    setHTML('players', template)
}

export class PlayersController {
    constructor() {
        console.log("Players Controller loaded")
        console.log(AppState.players)
        _drawPlayers()
    }

    testButton() {
        console.log("This button works")
    }

    addPlayer(event) {
        try {
            event.preventDefault()

            const form = event.target

            const formData = getFormData(form)

            console.log('here is my form data!', formData);

            playerServices.createPlayer(formData)

            form.reset()

            _drawPlayers()

        } catch (error) {
            console.error('[addPlayer]', error)
        }
    }
}
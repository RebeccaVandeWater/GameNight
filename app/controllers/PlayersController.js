import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"

export class PlayersController {
    constructor() {
        console.log("Players Controller loaded")
        console.log(AppState.players)
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

            form.reset()

        } catch (error) {
            console.error('[addPlayer]', error)
        }
    }
}
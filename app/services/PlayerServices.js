import { AppState } from "../AppState.js"
import { Player } from "../models/Players.js";


class PlayersService {
    createPlayer(formData) {
        const newPlayer = new Player(formData.name)
        console.log('new player!', newPlayer)

        AppState.players.push(newPlayer)

        console.log(AppState.players);
    }





}

export const playerServices = new PlayersService()
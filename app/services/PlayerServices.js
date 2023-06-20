import { AppState } from "../AppState.js"
import { Player } from "../models/Players.js";


class PlayersService {
    createPlayer(formData) {
        const newPlayer = new Player(formData.name, formData.imgUrl)

        console.log('new player!', newPlayer)

        AppState.players.push(newPlayer)

        console.log(AppState.players);
    }

    increasePlayerScore(playerName) {
        // console.log("player name?", playerName)

        const players = AppState.players

        // console.log("We have players?", players)

        const foundPlayer = players.find(player => player.name == playerName)

        foundPlayer.score++

        console.log("my found player", foundPlayer)
    }

    decreasePlayerScore(playerName) {
        // console.log("player name to decrease?", playerName)

        const players = AppState.players

        // console.log("We have players?", players)

        const foundPlayer = players.find(player => player.name == playerName)

        foundPlayer.score--

        console.log("my found player", foundPlayer)
    }



}

export const playerServices = new PlayersService()
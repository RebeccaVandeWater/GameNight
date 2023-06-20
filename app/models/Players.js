export class Player {
    constructor(imageUrl, name) {
        // debugger
        this.imgUrl = imageUrl;
        this.name = name;
        this.score = 0;
    }

    get PlayerDetails() {
        let details = `Hello, my name is ${this.name} and my score is ${this.score}`
        return details
    }

    get PlayerTemplateCard() {
        return /*html*/`
        <div class="card col-12 col-md-6 d-flex">
          <div class="card-body">
            <img class="img-fluid img-style" src="${this.imgUrl}" alt="${this.name}">
            <p>${this.name}</p>
          </div>
          <div>
            <button onclick="app.PlayersController.increasePlayerScore('${this.name}')">
              ➕
            </button>
          </div>
          <div>
            <p>${this.score}</p>
          </div>
          <div>
            <button onclick="app.PlayersController.decreasePlayerScore('${this.name}')">
              ➖
            </button>
          </div>
        </div>`
    }

}

// TODO grab player id's with a find function
// TODO use player id's to change the HTML with an increased score
// TODO now decrease the score
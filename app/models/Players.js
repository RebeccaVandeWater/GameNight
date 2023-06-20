export class Player {
    constructor(name, imageUrl) {
        // debugger
        this.name = name;
        this.imgUrl = imageUrl;
        this.score = 0;
    }

    // get PlayerDetails() {
    //     let details = `Hello, my name is ${this.name} and my score is ${this.score}`
    //     return details
    // }

    get PlayerTemplateCard() {
        return /*html*/`
        <div class="card col-12 col-md-6 d-flex flex-row align-items-center">
          <div class="card-body d-flex align-items-center">
            <img class="img-fluid img-style" src="${this.imgUrl}" alt="${this.name}">
            <span class="ps-3">${this.name}</span>
          </div>
          <div>
            <button onclick="app.PlayersController.increasePlayerScore('${this.name}')" class="btn btn-outline-dark rounded-pill">
              ➕
            </button>
          </div>
          <div class="px-3 d-flex align-items-center">
            <span>${this.score}</span>
          </div>
          <div>
            <button onclick="app.PlayersController.decreasePlayerScore('${this.name}')" class="btn btn-outline-dark rounded-pill">
              ➖
            </button>
          </div>
        </div>`
    }

}
export class Player {
    constructor(name) {
        // debugger
        this.name = name;
        this.score = 0;
    }

    get PlayerDetails() {
        let details = `Hello, my name is ${this.name} and my score is ${this.score}`
        return details
    }

    get PlayerTemplateCard() {
        return /*html*/`
        <div class="card">
            <div class="card-body">
                ${this.name} - ${this.score}
            </div>
        </div>`
    }

}


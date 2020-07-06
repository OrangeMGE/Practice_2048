
class Game {
    constructor(parentElement, size = 4) {
        let gameFieldElement = createAndAppennd({
            className: "game",
            parentElement
        })
       
        let headerElement = createAndAppennd({
            className: "header",
            parentElement : gameFieldElement
        });

        this.score = 0;
        headerElement.innerHTML = "Счет " + this.score;

        let fieldElement = createAndAppennd({
            className: "field",
            parentElement: gameFieldElement
        });

        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                new Cell(fieldElement)
            }
        }
    }
}
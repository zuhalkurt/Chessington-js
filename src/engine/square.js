export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
export class funcRemSquares {
    removeOffBoardSquares(arrAllAvailMoves) {
        let offBoardSquares = [];
        for (let i=0; i<=arrAllAvailMoves.length-1; i++) {
            if (arrAllAvailMoves[i].row < 0 || arrAllAvailMoves[i].row > 7) {
                offBoardSquares = arrAllAvailMoves.splice(i,1);
            }
            if (arrAllAvailMoves[i].col < 0 || arrAllAvailMoves[i].col > 7) {
                offBoardSquares = arrAllAvailMoves.splice(i,1);
            }
        }
        return arrAllAvailMoves
    }
}
  
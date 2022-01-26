import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
               
        let availableMoves = [];
        let location = board.findPiece(this)
        let rowStartPoint = location.row-2;
        let colStartPoint = location.col-1;

        for (let i=0; i<=1; i++) {

            if (location.row !== 0) {

                for (let j=0; j<=2; j++) { 

                    if (location.row !==0) {
                    
                        if (j!==1) {
                            
                            availableMoves.push(Square.at(rowStartPoint + i, colStartPoint + j));
                        }
                }  
            console.log("Row #1" + availableMoves);
        }
    }
}
    return availableMoves; 
}
}

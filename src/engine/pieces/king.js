import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
               
        let availableMoves = [];
        let location = board.findPiece(this)
        let rowStartPoint = location.row-1;
        let colStartPoint = location.col-1;

        for (let i=0; i<=2; i++) {
            if (location.row !== 0) {
                for (let j=0; j<=2; j++) { 
                    if (location.row !==0) {
                    
                    if (i===1 && j===1) {
                        //skip this square as this is the start point

                    } else {
                
                        availableMoves.push(Square.at(rowStartPoint + i, colStartPoint + j));
                    }
                }  
            //console.log("Row #1" + availableMoves);
        }
    }
}
    return availableMoves; 
}
}

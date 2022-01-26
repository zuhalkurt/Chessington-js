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

        //There are 4 rows of squares
        for (let i=0; i<=3; i++) {

            //if (location.row !== 0) {
            //There are 2 column values for each row value
            for (let j=0; j<=1; j++) { 

                if ((i=== 0 || i===3) && j===1) {
                    //on rows #1&4 the column increases by 2
                    colStartPoint = colStartPoint +1;
                } else if ((i=== 1 || i===2) && j===1) {
                    //on rows #2&3 the column first needs to be decreased by 1
                    colStartPoint = colStartPoint -1;
                } else if ((i=== 1 || i===2) && j===1) {
                    //on rows #2&3 the column increases by 4
                    colStartPoint = colStartPoint +4;
                }
                availableMoves.push(Square.at(rowStartPoint + i, colStartPoint + j));
               
            
        }
   }
   console.log(availableMoves);
   // we need to remove any squares that fall outside the board (<0 or >7)
    return availableMoves; 
}
}

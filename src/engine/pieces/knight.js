import Player from '../player';
import Piece from './piece';
import Square, { funcRemSquares } from '../square';
import { all } from 'express/lib/application';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
               
        let availableMoves = [];
        let location = board.findPiece(this)
        
        //There are 4 rows of squares
        
        //row #1 is 2 rows behind the start and the column value is 1 to the left
        let rowStartPoint = location.row-2;
        let colStartPoint = location.col-1;

        //There are 2 column values for each row value
        availableMoves.push(Square.at(rowStartPoint, colStartPoint));
        availableMoves.push(Square.at(rowStartPoint, colStartPoint+2));

        //row #2 is 1 row behind the start and the column value is 2 to the left
        rowStartPoint = location.row-1;
        colStartPoint = location.col-2;

        availableMoves.push(Square.at(rowStartPoint, colStartPoint));
        availableMoves.push(Square.at(rowStartPoint, colStartPoint+4));

        //row #3 is 1 row ahead of the start and the column value is still 2 to the left
        rowStartPoint = location.row+1;
        
        availableMoves.push(Square.at(rowStartPoint, colStartPoint));
        availableMoves.push(Square.at(rowStartPoint, colStartPoint+4));
        
        //row #4 is 2 rows ahead of the start and the column value is now 1 to the left
        rowStartPoint = location.row+2;
        colStartPoint = location.col-1;

        availableMoves.push(Square.at(rowStartPoint, colStartPoint));
        availableMoves.push(Square.at(rowStartPoint, colStartPoint+2));

        //console.log(availableMoves);
        // we need to remove any squares that fall outside the board (<0 or >7)
        const callFunc = new funcRemSquares();
        callFunc.removeOffBoardSquares(availableMoves);   
        
    return availableMoves; 
    }
}

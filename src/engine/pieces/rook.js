import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let location = board.findPiece(this);
        let endPoint = 7;
        let startPoint = location.row;
        console.log("endPoint = " + endPoint + " startPoint = " + startPoint);
        //console.log("Player = " + player);
        if (this.player === Player.WHITE) {
            //VERTICAL
            //check if any other piece on our column
            let rowStartPoint = location.row;
            for (let i=rowStartPoint; i<=endPoint-1; i++) {
                console.log("i = " + i)
                
                if (board.getPiece(Square.at(i, location.col)) !== null) {
                    //console.log("startPoint + i = " + startPoint + i);
                    //add all squares from current square to end or other piece
                    availableMoves.push(Square.at(rowStartPoint++, location.col));
                }
            }
            //HORIZONTAL
            //check if any other piece on our column
            let colStartPoint = location.col;
            for (let i=colStartPoint; i<=endPoint-1; i++) {
                console.log("i = " + i)
                
                if (board.getPiece(Square.at(location.row, i,)) !== null) {
                                      
                    //add all squares from current square to end or other piece
                    availableMoves.push(Square.at(location.row, colStartPoint++));
                } else {
                    console.log("found another piece");
                }
            }
            
        } else {
            /* availableMoves.push(Square.at(location.row - 1, location.col))
            if(location.row === 6) {
                availableMoves.push(Square.at(location.row - 2, location.col))
            } */
       
        }
        console.log(availableMoves);
        return availableMoves; 
    }
    }

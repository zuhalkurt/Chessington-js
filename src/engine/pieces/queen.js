import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
       
        let availableMoves = [];
        let location = board.findPiece(this)

        for(let i = 1; i <= 7; i++) {
            if(location.row + i >= 0 && location.row + i <= 7) {
                if(location.col + i >= 0 && location.col + i <= 7){
                    availableMoves.push(Square.at(location.row + i, location.col + i))
                }
            }
            if(location.row + i >= 0 && location.row + i <= 7){
                if(location.col - i >= 0 && location.col -i <= 7){
                    availableMoves.push(Square.at(location.row + i, location.col - i))
                }
            }
            if(location.row - i >= 0 && location.row - i <= 7) {
                if(location.col + i >= 0 && location.col + i <= 7){
                    availableMoves.push(Square.at(location.row - i, location.col + i))
                }
            }
            if(location.row - i >= 0 && location.row - i <= 7 ){
                if(location.col - i >= 0 && location.col - i <= 7){
                    availableMoves.push(Square.at(location.row - i, location.col - i))
                }
            }
            if(location.col + i >= 0 && location.col + i <= 7) {
                availableMoves.push(Square.at(location.row, location.col + i));
            }
            if(location.row + i >=0 && location.row + i <= 7) {
                availableMoves.push(Square.at(location.row + i, location.col));
            }
            if(location.row - i >=0 && location.row - i <= 7) {
                availableMoves.push(Square.at(location.row - i, location.col));
            }
            if(location.col -i >= 0 && location.col -i <= 7){
                availableMoves.push(Square.at(location.row, location.col - i));
            }         
        }
    return availableMoves;
}
}
       
    
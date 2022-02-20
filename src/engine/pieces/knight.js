import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let location = board.findPiece(this);
        if(location.row + 1 >= 0 && location.row + 1 <= 7){
            availableMoves.push(Square.at(location.row + 1, location.col + 2));
        }
        if(location.row + 1 >= 0 && location.row <= 7) {
            availableMoves.push(Square.at(location.row + 1, location.col - 2));
        }
        if(location.row - 1 >= 0 && location.row - 1 <= 7) {
            availableMoves.push(Square.at(location.row - 1, location.col + 2));
        }
        if(location.row -1 >= 0 && location.row - 1 <= 7) {
            availableMoves.push(Square.at(location.row - 1, location.col - 2));
        } 
        if(location.col + 1 >= 0 && location.col + 1 <= 7) {
            availableMoves.push(Square.at(location.row + 2 , location.col + 1));
        }
        if(location.col + 1 >=0 && location.col + 1 <= 7) {
            availableMoves.push(Square.at(location.row - 2, location.col + 1));
        }
        if(location.col - 1 >=0 && location.col - 1 <= 7) {
            availableMoves.push(Square.at(location.row - 2, location.col - 1));
        }
        if(location.col -1 >= 0 && location.col -1 <= 7){
            availableMoves.push(Square.at(location.row + 2, location.col - 1));
        }
        return availableMoves;
    }
}

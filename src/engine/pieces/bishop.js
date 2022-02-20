import Player from '../player';
import Piece from './piece';
import Square from '../square';
import { ids } from 'webpack';



export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }
    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves = [];
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
                   
        }
    return availableMoves;
         
    }
}
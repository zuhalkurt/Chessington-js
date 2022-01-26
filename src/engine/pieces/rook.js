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
        let colStartPoint = location.col;
        let rowStartPoint = location.row;
<<<<<<< HEAD
        console.log("location.row = " + rowStartPoint + " location.col = " + location.col);   
            
       // if (this.player === Player.WHITE) {
=======
        // console.log("location.row = " + rowStartPoint + " location.col = " + location.col);   
      
          
               // if (this.player === Player.WHITE) {
>>>>>>> ea0d153f635c365a0d04df0a345dfb397533775f

            //HORIZONTAL
          
            for (let i=0; i<=endPoint; i++) {
            
                if(i !== colStartPoint) {
                    availableMoves.push(Square.at(rowStartPoint, i));
                    }                
               
            }

             //VERTICAL
                                  
            for (let j=0; j<=endPoint; j++) {
                  
                if(j !== rowStartPoint) {
                    availableMoves.push(Square.at(j, colStartPoint));
                }                   
              
            }
            
        //console.log(availableMoves);
        return availableMoves; 
    }
<<<<<<< HEAD
   }
=======
   }
>>>>>>> ea0d153f635c365a0d04df0a345dfb397533775f

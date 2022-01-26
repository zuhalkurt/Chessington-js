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
        let colStartPoint = location.col;
        let rowStartPoint = location.row;
        let endPoint = 7 ;


        let j = colStartPoint - rowStartPoint;
        endPoint = 7 - j;
        for(let i = 0; i <= endPoint; i++){
            
        //    moves to up right
            
        if(j !== colStartPoint && i !== rowStartPoint) {
           
            availableMoves.push(Square.at( i, j));
            }  
            j++
        }
        j = (rowStartPoint + colStartPoint) 
        //console.log(`console log J ${j}`)
        endPoint = j;
        for (let i=0; i<=endPoint; i++) {
                 
            if(i !== rowStartPoint && j !== colStartPoint) {
               
                availableMoves.push(Square.at( i ,  j)); 
            }                   
            j--
        } 
        endPoint = 7
        for (let i=0; i<=endPoint; i++) {
            
            if(i !== colStartPoint) {
                availableMoves.push(Square.at(rowStartPoint, i));
                }                
           
        }

         //VERTICAL
                              
        for (let i=0; i<=endPoint; i++) {
              
            if(i !== rowStartPoint) {
                availableMoves.push(Square.at(i, colStartPoint));
            }                   
          
        }
        
    //console.log(availableMoves);
    return availableMoves; 
}
}
       
    

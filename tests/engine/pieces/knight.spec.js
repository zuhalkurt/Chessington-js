import Knight from '../../../src/engine/pieces/knight';
import 'chai/register-should';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import GameSettings from '../../../src/engine/gameSettings';


describe('Knight', () => {let board;

    beforeEach(() => board = new Board());

    
    it('can move one square diagonally or laterally',  () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(4, 6), knight);

        const moves = knight.getAvailableMoves(board);

        const expectedMoves = [
            // row #1
            Square.at(2, 5), Square.at(2, 7), 
            // row #2
            Square.at(3, 4), 
            // row #3
            Square.at(5, 4), 
            //row #4
            Square.at(6, 5), Square.at(6, 7)
        ];

        moves.should.deep.include.members(expectedMoves);

    });
    
    it('cannot make any other moves', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(4, 6),knight);

        const moves =knight.getAvailableMoves(board);

        moves.should.have.length(6);
    });


})
import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());

    
    it('can only move one square to every direction', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(2, 5), king);

        const moves = king.getAvailableMoves(board);
        
        const expectedMoves = [
            // Vertical
            Square.at(3, 6), Square.at(3, 4), Square.at(1, 6), Square.at(1, 4),
            //Horizonal
            Square.at(3,5), Square.at(1,5), Square.at(2,4), Square.at(2,6)
        ]
        moves.should.deep.include.members(expectedMoves);

    });
    
    it('cannot make any other moves', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(2, 5),king);

        const moves =king.getAvailableMoves(board);

        moves.should.have.length(8);
    });
});



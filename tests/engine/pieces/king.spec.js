import King from '../../../src/engine/pieces/king';
import 'chai/register-should';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import GameSettings from '../../../src/engine/gameSettings';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());

    
    it('can move one square diagonally or laterally',  () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(3, 4), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            // row #1
            Square.at(2, 3), Square.at(2, 4), Square.at(2, 5), 
            // row #2
            Square.at(3, 3), Square.at(3, 5),
            // row #3
            Square.at(4, 3), Square.at(4, 4), Square.at(4, 5)
        ];

        moves.should.deep.include.members(expectedMoves);

    });
    
    it('cannot make any other moves', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(3, 4),king);

        const moves =king.getAvailableMoves(board);

        moves.should.have.length(8);
    });


})



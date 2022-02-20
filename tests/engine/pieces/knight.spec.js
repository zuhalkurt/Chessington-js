import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import GameSettings from '../../../src/engine/gameSettings';
import Pawn from '../../../src/engine/pieces/pawn';


describe('Knight', () => {
    let board;
    beforeEach(() => board = new Board());

    it('can move in L shape',  () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(4, 4), knight);
    
        const moves = knight.getAvailableMoves(board);
    
        const expectedMoves = [
            Square.at(2, 5), Square.at(2, 3), Square.at(3, 2), Square.at(5, 2), Square.at(6, 3), Square.at(6, 5),
            Square.at(3, 6), Square.at(5, 6) 
        ];
    
        moves.should.deep.include.members(expectedMoves);
    });
    
    it('cannot make any other moves', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(4, 4),knight);

        const moves =knight.getAvailableMoves(board);

        moves.should.have.length(8);
    });

    it('can jump over other pieces', () => {
        const knight = new Knight(Player.WHITE);
        const firstPawn = new Pawn(Player.WHITE);
        const secondPawn = new Pawn(Player.BLACK);
        board.setPiece(Square.at(4, 4), knight);
        board.setPiece(Square.at(3, 4), firstPawn);
        board.setPiece(Square.at(3, 5), secondPawn);

        const moves = knight.getAvailableMoves(board);

        moves.should.deep.include(Square.at(2, 5));
    });

});


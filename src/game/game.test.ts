import { Game } from "./game";
import { Board } from "./board";
import { Player } from "./player";

describe("Game", () => {
    const player1 = new Player("player1", 1500);
    const player2 = new Player("player2", 1500);
    const player3 = new Player("player3", 1500);
    const game = new Game([player1, player2, player3]);

    test("has Players", () => {
        expect(game.turnOrder).toContain(player1);
        expect(game.turnOrder).toContain(player2);
        expect(game.turnOrder).toContain(player3);
    });

    test("has Board", () => {
        expect(game.board).toBeInstanceOf(Board);
    });

    test("endTurn adjusts turn order", () => {
        expect(game.turnOrder).toStrictEqual([player1, player2, player3]);
        game.endTurn();
        expect(game.turnOrder).toStrictEqual([player2, player3, player1]);
        game.endTurn();
        expect(game.turnOrder).toStrictEqual([player3, player1, player2]);
        game.endTurn();
        expect(game.turnOrder).toStrictEqual([player1, player2, player3]);
    });

    test("Cannot endTurn if current player has a payOrder", () => {
        player1.addPayOrder({ owes: player2, amount: 100 });
        expect(() => game.endTurn()).toThrowError("player1 owes player2 100 money.");
    });
});

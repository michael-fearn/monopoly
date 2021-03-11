import { Player } from "./player";

describe("Player", () => {
    test("Has Money", () => {
        const player1 = new Player("player1", 100);

        expect(typeof player1.money).toBe("number");
    });
    test("Has Name", () => {
        const player1 = new Player("player1", 100);

        expect(typeof player1.name).toBe("string");
    });
    test("can owe player", () => {
        const player1 = new Player("player1", 100);
        const player2 = new Player("player2", 100);

        player1.addPayOrder({ owes: player2, amount: 100 });

        expect(player1.payOrder).toEqual({ owes: player2, amount: 100 });
    });
    test("can pay player", () => {
        const player1 = new Player("player1", 100);
        const player2 = new Player("player2", 100);

        expect(player1.payOrder).toEqual(null);

        player1.addPayOrder({ owes: player2, amount: 100 });
        player1.completePayOrder();

        expect(player1.money).toEqual(0);
        expect(player2.money).toEqual(200);
        expect(player1.payOrder).toEqual(null);
    });
    test("has to have enough money to pay", () => {
        const player1 = new Player("player1", 100);
        const player2 = new Player("player2", 100);

        player1.addPayOrder({ owes: player2, amount: 200 });
        expect(() => player1.completePayOrder()).toThrowError(
            "player1 does not have enough to pay player2"
        );
    });
});

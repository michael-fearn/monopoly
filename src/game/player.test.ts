import { Player } from "./player";

describe("Player", () => {
    test("Has Name", () => {
        const player1 = new Player("player1", 100);

        expect(typeof player1.name).toBe("string");
    });

    test("Has Money", () => {
        const player1 = new Player("player1", 100);

        expect(typeof player1.money).toBe("number");
    });

    test("Can Add Money", () => {
        const player1 = new Player("player1", 100);
        expect(player1.money).toEqual(100);
        player1.addMoney(10);
        expect(player1.money).toEqual(110);
    });
    test("Can Remove Money", () => {
        const player1 = new Player("player1", 100);
        expect(player1.money).toEqual(100);
        player1.removeMoney(10);
        expect(player1.money).toEqual(90);
    });

    test("Can Owe Player", () => {
        const player1 = new Player("player1", 100);
        const player2 = new Player("player2", 100);

        player1.addPayOrder({ owes: player2, amount: 100 });

        expect(player1.payOrder).toEqual({ owes: player2, amount: 100 });
    });

    test("Can Pay Player", () => {
        const player1 = new Player("player1", 100);
        const player2 = new Player("player2", 100);

        expect(player1.payOrder).toEqual(null);

        player1.addPayOrder({ owes: player2, amount: 100 });
        player1.completePayOrder();

        expect(player1.money).toEqual(0);
        expect(player2.money).toEqual(200);
        expect(player1.payOrder).toEqual(null);
    });

    test("Cant Have negative Money", () => {
        const player1 = new Player("player1", 100);
        const player2 = new Player("player2", 100);

        player1.addPayOrder({ owes: player2, amount: 200 });
        expect(() => player1.completePayOrder()).toThrowError("player1 does not have enough money");
    });
});

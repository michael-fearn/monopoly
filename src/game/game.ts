import { Player } from "./player";
import { Board } from "./board";

export class Game {
    public board: Board;
    constructor(public turnOrder: Player[]) {
        this.board = new Board();
    }

    public endTurn() {
        const [currentPlayer, ...players] = this.turnOrder;
        
        if (currentPlayer.payOrder) {
            const { owes, amount } = currentPlayer.payOrder;
            throw new Error(`${currentPlayer.name} owes ${owes.name} ${amount} money.`);
        }
        
        this.turnOrder = [...players, currentPlayer];
    }
}

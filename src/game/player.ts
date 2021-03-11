type PayOrder = { owes: Player; amount: number } | null;

export class Player {
    private _payOrder: PayOrder = null;

    constructor(public name: string, public money: number) {}

    get payOrder(): PayOrder {
        return this._payOrder;
    }

    public addPayOrder(payOrder: PayOrder): void {
        this._payOrder = payOrder;
    }
    public completePayOrder(): void {
        if (!this._payOrder) return;
        const otherPlayer = this._payOrder.owes;

        if (this.money < this._payOrder.amount)
            throw new Error(`${this.name} does not have enough to pay ${otherPlayer.name}`);

        this.money -= this._payOrder.amount;
        otherPlayer.money += this._payOrder.amount;

        this._payOrder = null;
    }
}

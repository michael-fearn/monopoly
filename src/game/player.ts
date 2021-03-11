type PayOrder = { owes: Player; amount: number };

export class Player {
    protected _payOrder: PayOrder = null;

    constructor(public name: string = "", public money: number = 0) {}

    get payOrder() {
        return this._payOrder;
    }

    public addPayOrder(payOrder: PayOrder) {
        this._payOrder = payOrder;
    }
    public completePayOrder() {
        const otherPlayer = this._payOrder.owes;
        if (this.money < this._payOrder.amount) {
            throw new Error(`${this.name} does not have enough to pay ${otherPlayer.name}`);
        }
        this.money = this.money - this._payOrder.amount;
        otherPlayer.money = otherPlayer.money + this._payOrder.amount;

        this._payOrder = null;
    }
}

type PayOrder = { owes: Player; amount: number } | null;

export class Player {
    private _payOrder: PayOrder = null;
    properties = [];

    constructor(public name: string, public money: number) {}

    public addMoney(amount: number): void {
        this.money += amount;
    }

    public removeMoney(amount: number): void {
        if (this.money - amount < 0) throw new Error(`${this.name} does not have enough money.`);

        this.money -= amount;
    }

    public get payOrder(): PayOrder {
        return this._payOrder;
    }

    public addPayOrder(payOrder: PayOrder): void {
        this._payOrder = payOrder;
    }

    public completePayOrder(): void {
        if (!this._payOrder) return;
        const { owes: otherPlayer, amount } = this._payOrder;

        this.removeMoney(amount);
        otherPlayer.addMoney(amount);

        this._payOrder = null;
    }
}

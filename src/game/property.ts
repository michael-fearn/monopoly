import { Player } from "./player";

// this is money yo. Now test it you goon.

// type ResidentialConfig = { a: number }; //price tiering information;

type ResidentialConfig = { a: number }; //price tiering information;
// class Structure {}
class Property {}
export class Railroad extends Property {}

export class Utility extends Property {}
class Residential extends Property {
    owner: Player | null = null;
    // structures: Structure[] = []; // houses, hotels. reduce structure type against pricing in config

    constructor(private residentialConfig: ResidentialConfig, private neighborhood: Neighborhood) {
        super();
        this.neighborhood.register(this);
    }

    // public visit(player: Player): void {}

    // public build(structure: Structure): void {}

    // public get canBuild() {
    //     return this.neighborhood.hasSameOwner();
    // }
}

export class Neighborhood {
    private properties: Residential[] = [];

    public register(neighbor: Residential): void {
        this.properties.push(neighbor);
    }
    public hasSameOwner(): boolean {
        if (!this.properties.some((neighbor) => neighbor.owner)) {
            // if any neighbors are unowned return false.
            return false;
        }

        const firstOwner = this.properties[0].owner;
        return this.properties.every((neighbor) => neighbor.owner === firstOwner);
    }
}

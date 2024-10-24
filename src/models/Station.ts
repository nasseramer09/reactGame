import { Player } from './Player'; // Importera Player från models

export class Station {
    x: number;
    y: number;
    isOccupied: boolean;
    occupiedBy: Player | null;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.isOccupied = false;
        this.occupiedBy = null;
    }

    occupyStation(player: Player) {
        this.isOccupied = true;
        this.occupiedBy = player;
    }
}

import { Player } from './Player'; // Importera Player från models-mappen
import { Station } from './Station'; // Importera Station från samma models-mapp

export class PlayGround {
    stations: Station[];
    players: Player[];
    currentPlayer: Player | null;
    isWin: boolean;

    constructor(players: Player[]) {
        this.players = players;
        this.currentPlayer = players[0];
        this.isWin = false;

        this.stations = [];
        this.createStations();
    }

    createStations() {
        this.stations = [];
    
        // Första raden (3 stationer)
        this.stations.push(new Station(0, 0)); // Vänster
        this.stations.push(new Station(1, 0)); // Mitten
        this.stations.push(new Station(2, 0)); // Höger
    
        // Andra raden (2 stationer + 1 tom plats)
        this.stations.push(new Station(0, 1)); // Vänster
        this.stations.push(new Station(1, 1)); // Mitten
        this.stations.push(new Station(-1, -1)); // Tom plats
    
        // Tredje raden (2 stationer + 1 tom plats)
        this.stations.push(new Station(0, 2)); // Vänster
        this.stations.push(new Station(1, 2)); // Mitten
        this.stations.push(new Station(-1, -1)); // Tom plats
    
        // Fjärde raden (3 stationer)
        this.stations.push(new Station(0, 3)); // Vänster
        this.stations.push(new Station(1, 3)); // Mitten
        this.stations.push(new Station(2, 3)); // Höger
    }
    
    

    movePlayer(player: Player, toStation: Station) {
        if (!toStation.isOccupied) {
            toStation.occupyStation(player);
            this.checkWinCondition();
            this.switchPlayer();
        }
    }

    switchPlayer() {
        const currentIndex = this.players.indexOf(this.currentPlayer!);
        const nextPlayer = this.players[(currentIndex + 1) % this.players.length];
        this.currentPlayer = nextPlayer;
    }
    

    checkWinCondition() {
        const winningCombinations = [
            // Horisontella
            [0, 1, 2],  // Översta raden
            [6, 7, 8],  // Nedersta raden

            // Vertikala
            [0, 3, 6],  // Första kolumnen
            [1, 4, 7],  // Andra kolumnen
            [2, 5, 8],  // Tredje kolumnen

            // Diagonala
            [0, 4, 8],  // Vänster till höger
            [2, 4, 6],  // Höger till vänster
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                this.stations[a].isOccupied &&
                this.stations[a].occupiedBy === this.stations[b].occupiedBy &&
                this.stations[a].occupiedBy === this.stations[c].occupiedBy
            ) {
                this.isWin = true;
                break;
            }
        }
    }
}

export default PlayGround;

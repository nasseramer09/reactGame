// src/classes/Player.ts
export class Player {
    playerName: string;
    playerScore: number;
    playerColor: string;

    constructor(playerName: string, playerScore: number, playerColor: string) {
        this.playerName = playerName;
        this.playerScore = playerScore;
        this.playerColor = playerColor;
    }

    // Eventuella metoder för att uppdatera spelarens information
    updateScore(newScore: number) {
        this.playerScore = newScore;
    }
}


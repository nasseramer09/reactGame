import  { useState } from 'react';
import PlayGround from '../models/PlayGroundType'; // Importera från models
import { Player } from '../models/Player'; // Importera Player från models
import { StationComponent } from './StationComponents'; // Importera StationComponent från components

const PlayGroundComponent = () => {
    const player1 = new Player('Player 1', 0, 'red');
    const player2 = new Player('Player 2', 0, 'blue');
    
    const playGround = new PlayGround([player1, player2]);

    const [stations, setStations] = useState(playGround.stations);
    const [currentPlayer, setCurrentPlayer] = useState(playGround.currentPlayer);

    const handleStationClick = (index: number) => {
        const station = stations[index];
        if (!station.isOccupied && currentPlayer) {
            playGround.movePlayer(currentPlayer, station);
            setStations([...playGround.stations]);  // Uppdatera stations
            setCurrentPlayer(playGround.currentPlayer); // Uppdatera currentPlayer efter drag
        }
    };
    

    return (
        <div style={{ display: 'table', width: '160px' }}>
        <div style={{ display: 'table-row' }}>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[0]} onClick={() => handleStationClick(0)} />
            </div>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[1]} onClick={() => handleStationClick(1)} />
            </div>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[2]} onClick={() => handleStationClick(2)} />
            </div>
        </div>
        <div style={{ display: 'table-row' }}>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[3]} onClick={() => handleStationClick(3)} />
            </div>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[4]} onClick={() => handleStationClick(4)} />
            </div>
            <div style={{ display: 'table-cell', visibility: 'hidden' }}>
                {/* Tom cell */}
            </div>
        </div>
        <div style={{ display: 'table-row' }}>
              <div style={{ display: 'table-cell', visibility: 'hidden' }}>
                {/* Tom cell */}
            </div>
            <div style={{ display: 'table-cell', visibility:'visible' }}>
                <StationComponent station={stations[5]} onClick={() => handleStationClick(3)} />
            </div>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[6]} onClick={() => handleStationClick(4)} />
            </div>
          
        </div>
        <div style={{ display: 'table-row' }}>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[7]} onClick={() => handleStationClick(0)} />
            </div>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[8]} onClick={() => handleStationClick(1)} />
            </div>
            <div style={{ display: 'table-cell' }}>
                <StationComponent station={stations[9]} onClick={() => handleStationClick(2)} />
            </div>
        </div>
        {/* Fortsätt med fler rader */}
    </div>
    
    
    
    );
};

export default PlayGroundComponent;

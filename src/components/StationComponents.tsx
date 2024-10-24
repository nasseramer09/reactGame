import React from 'react';
import { Station } from '../models/Station'; // Importera Station från models

type StationProps = {
    station: Station;
    onClick: () => void;
};

export const StationComponent: React.FC<StationProps> = ({ station, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: '50px',
                height: '50px',
                backgroundColor: station.isOccupied
                    ? station.occupiedBy?.playerColor
                    : 'lightgray',
                margin: '5px',
                textAlign: 'center',
                lineHeight: '50px',
                cursor: 'pointer',
            }}
        >
            {station.isOccupied ? station.occupiedBy?.playerName : 'O'}
        </div>
    );
};

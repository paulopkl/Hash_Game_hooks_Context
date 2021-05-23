import React from "react";
import t from 'prop-types';

export const GameContext = React.createContext();

export default function GameContextProvider({ children }) {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = React.useState(true);
    const [whoIsWinner, setWhoIsWinner] = React.useState(false);
    const [history, setHistory] = React.useState([]);

    const state = {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        whoIsWinner,
        setWhoIsWinner,
        history,
        setHistory
    }

    return (
        <GameContext.Provider value={state}>
            {children}
        </GameContext.Provider>
    );
}

GameContextProvider.propTypes = {
    children: t.node.isRequired
}
import React from "react";
import t from 'prop-types';

export const GameContext = React.createContext();

const INITIAL_STATE = {
    squares: Array(9).fill(null),
    isXNext: true,
    whoIsWinner: '',
    history: []
}

const reducer = (actualState, action) => {

    switch (action.type) {
        case 'UPDATE_SQUARES': {
            const newHistory = [
              ...actualState.history,
              {
                squares: actualState.squares,
                isXNext: actualState.isXNext,
                whoIsWinner: actualState.whoIsWinner,
              },
            ];

            const newState = { ...actualState };

            newState.squares = action.payload;
            newState.isXNext = !actualState.isXNext;
            newState.whoIsWinner = actualState.whoIsWinner;
            newState.history = newHistory;

            return newState;
        }
        case "SET_SQUARES": return { ...actualState, squares: [ ...action.payload] };
        case "SET_ISXNEXT": return { ...actualState, isXNext: action.payload };
        case "SET_WHOISWINNER": return { ...actualState, whoIsWinner: action.payload };
        case "SET_HISTORY": return { ...actualState, history: [ ...actualState.history, ...action.payload] };
        case "RESET": return INITIAL_STATE;
        default: return actualState;
    }
}

export default function GameContextProvider({ children }) {

    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
}

GameContextProvider.propTypes = {
    children: t.node.isRequired
}
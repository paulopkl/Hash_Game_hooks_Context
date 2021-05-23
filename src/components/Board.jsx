import React from "react";
import uuid from "uuid/dist/v4";

// Utils Functions
import { GameContext } from "../contexts/GameContext";
import { calculateWinner } from "../utils/calculateWinner";

// Components
import Square from "./Square";
import Player from "./Player";
import Reset from "./Reset";
import Winner from "./Winner";
import History from "./History";

export default function Board() {
    const context = React.useContext(GameContext);

    React.useEffect(() => {
        const winner = calculateWinner(context.state.squares);

        if (winner)
            context.dispatch({ type: "SET_WHOISWINNER", payload: winner });
    }, [context.state.squares]);

    return (
        <div className="board-container">
            <Player />
            <Winner />
            <Reset />
            <div className="board">
                {context.state.squares.map((square, i) => (
                    <Square key={uuid()} value={square} index={i} />
                ))}
            </div>
            <History />
        </div>
    );
}

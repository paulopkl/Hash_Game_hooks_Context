import React from "react";

import { GameContext } from "../contexts/GameContext";
import Square from "./Square";
import Player from "./Player";
import Reset from "./Reset";
import Winner from "./Winner";
import History from "./History";

import uuid from "uuid/dist/v4";
import { calculateWinner } from "../utils/calculateWinner";

export default function Board() {
    const context = React.useContext(GameContext);

    React.useEffect(() => {
        const winner = calculateWinner(context.squares);

        if (winner) context.setWhoIsWinner(winner);
    }, [context.squares, context.setWhoIsWinner]);

    return (
        <div className="board-container">
            <Player />
            <Winner />
            <Reset />
            <div className="board">
                {context.squares.map((square, i) => (
                    <Square key={uuid()} value={square} index={i} />
                ))}
            </div>
            <History />
        </div>
    );
}

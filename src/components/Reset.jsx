import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

export default function Board() {
    const context = useContext(GameContext);

    function handleClick() {
        context.setSquares(Array(9).fill(null));
        context.setIsXNext(true);
        context.setWhoIsWinner("");
        context.setHistory([]);
    }

    return (
        <p className="reset">
            <button type="button" onClick={handleClick}>
                Reset
            </button>
        </p>
    );
}

import React from "react";
import uuid from "uuid/dist/v4";

import { GameContext } from "../contexts/GameContext";

export default function Board() {
    const context = React.useContext(GameContext);

    function handleClick(index) {
        const newHistory = [...context.history];
        newHistory.splice(index, Number.MAX_SAFE_INTEGER);

        context.setHistory(newHistory);

        context.setSquares(context.history[index].squares);
        context.setIsXNext(context.history[index].isXNext);
        context.setWhoIsWinner(context.history[index].whoIsWinner);
    }

    return (
        <div>
            {context.history.map((time, i) => (
                <div key={uuid()} className="history">
                    <button type="button" onClick={() => handleClick(i)}>
                        Back to play {i}
                    </button>
                </div>
            ))}
        </div>
    );
}

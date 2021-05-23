import React from "react";
import uuid from "uuid/dist/v4";

import { GameContext } from "../contexts/GameContext";

export default function Board() {
    const context = React.useContext(GameContext);

    function handleClick(index) {
        const newHistory = [...context.state.history];
        newHistory.splice(index, Number.MAX_SAFE_INTEGER);

        context.dispatch(
            { type: "SET_HISTORY", payload: newHistory },
            {
                type: "SET_SQUARES",
                payload: context.state.history[index].squares,
            },
            {
                type: "SET_ISXNEXT",
                payload: context.state.history[index].isXNext,
            },
            {
                type: "SET_WHOISWINNER",
                payload: context.state.history[index].whoIsWinner,
            }
        );
    }

    return (
        <div>
            {context.state.history.map((time, i) => (
                <div key={uuid()} className="history">
                    <button type="button" onClick={() => handleClick(i)}>
                        Back to play {i}
                    </button>
                </div>
            ))}
        </div>
    );
}

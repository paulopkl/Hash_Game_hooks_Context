import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

export default function Board() {
    const context = useContext(GameContext);

    function handleClick() {
        context.dispatch({ type: "RESET" });
    }

    return (
        <p className="reset">
            <button type="button" onClick={handleClick}>
                Reset
            </button>
        </p>
    );
}

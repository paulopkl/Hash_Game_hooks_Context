import React, { useContext } from "react";
import t from "prop-types";

import { GameContext } from "../contexts/GameContext";

export default function Square({ value, index }) {
    const context = useContext(GameContext);

    const handleClick = () => {
        if (context.state.squares[index]) return;
        if (context.state.whoIsWinner) return;

        const newSquares = [...context.state.squares];
        newSquares[index] = context.state.isXNext ? "X" : "O";

        context.dispatch({ type: "UPDATE_SQUARES", payload: newSquares });
    };

    return (
        <button type="button" onClick={handleClick}>
            {value}
        </button>
    );
}

Square.defaultProps = {
    value: null,
};

Square.propTypes = {
    value: t.string,
    index: t.number.isRequired,
};

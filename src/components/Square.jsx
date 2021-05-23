import React, { useContext } from "react";
import t from "prop-types";

import { GameContext } from "../contexts/GameContext";

export default function Square({ value, index }) {
    const context = useContext(GameContext);

    const handleClick = () => {
        if (context.squares[index]) return;

        if (context.whoIsWinner) return;

        const newSquares = [...context.squares];

        newSquares[index] = context.isXNext ? "X" : "O";

        context.setSquares(newSquares);

        context.setIsXNext(!context.isXNext);

        context.setHistory([
            ...context.history,
            {
                squares: context.squares,
                isNext: !context.isXNext,
                whoIsWinner: context.whoIsWinner,
            },
        ]);
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

import React from "react";

import { GameContext } from "../contexts/GameContext";

export default function Board() {
    const context = React.useContext(GameContext);

    if (!context.state.whoIsWinner) return <></>;

    return <p className="winner">{context.state.whoIsWinner} wins!!</p>;
}

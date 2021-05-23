import React from "react";

import { GameContext } from "../contexts/GameContext";

export default function Board() {
    const context = React.useContext(GameContext);

    if (!context.whoIsWinner) return <></>;

    return <p className="winner">{context.whoIsWinner} wins!!</p>;
}

import React from "react";

import { GameContext } from "../contexts/GameContext";

export default function Board() {
    const context = React.useContext(GameContext);

    return <h1>Player ? {context.state.isXNext ? "X" : "O"}</h1>;
}

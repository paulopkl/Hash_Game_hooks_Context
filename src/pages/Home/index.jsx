import React from "react";
import "./index.css";

import GameContextProvider from "../../contexts/GameContext";
import Board from "../../components/Board";

const Home = () => {
    return (
        <GameContextProvider>
            <Board />
        </GameContextProvider>
    );
};

export default Home;

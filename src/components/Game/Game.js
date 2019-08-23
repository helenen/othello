import React from "react";


class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    playPawn(i, j, player) {
        let board = this.state.board;

        if (board[i][j] !== player) {
            board[i][j] = player
        } else {
            throw new Error("can't play when a pawn is already played");
        }

    }
}

export default Game
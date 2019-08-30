import React from 'react';


import Board from '../Board/Board'

class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: props.board
        }

    }

    render() {
        return (
            <div>
                <Board board={this.props.board} />
            </div >
        )
    }
}

export default Grid;


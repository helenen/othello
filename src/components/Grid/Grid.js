import React from 'react';


import Board from './Board'

const styles = {
    tbody: {
        display: 'flex',
        margin: '2rem',
        flexWrap: 'wrap',
        justifyContent: "center",
        border: '0.5px solid',

    },
    pawn: {
        height: '25px',
        width: '25px',
        backgroundColor: 'black',
        borderRadius: '100%',
        display: 'inlineBlock'
    },
    td: {
        borderSpacing: '0'
    }

}
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
                <Board board={this.state.board} />
            </div >)
    }
}

export default Grid;


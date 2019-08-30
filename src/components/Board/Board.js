import React from "react";

import Square from '../Square/Square'


class InitializeBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            board: [
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "black", "white", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "white", "black", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"]
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(rowIndex, cellIndex) {
        this.setState(prevState => {

            prevState.board[cellIndex][rowIndex] = "black"

        })

    }

    render() {
        const styles = {
            container: {
                height: '50vh',
                verticalAlign: 'top'
            }
        }

        return (
            <div className='container' style={styles.container}>

                {this.state.board.map((row, rowIndex) => {

                    return <td className="row" style={styles.container} key={rowIndex}>

                        {row.map((cell, cellIndex) => {
                            return <Square className="column" key={cellIndex} value={cell} onClick={() => this.handleClick(rowIndex, cellIndex)} />
                        })}


                    </td>
                })}
            </div>
        )
    }

}
export default InitializeBoard;
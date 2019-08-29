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
                ["vide", "vide", "vide", "noir", "blanc", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "blanc", "noir", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"],
                ["vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"]
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState(prevState => ({

            // board: [prevState.board[rowIndex][cellIndex] ]

        }))

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

                            return <Square className="column" key={cellIndex} value={cell} onClick={e => this.handleClick(e)} />
                        })}
                    </td>
                })}
            </div>
        )
    }

}
export default InitializeBoard;
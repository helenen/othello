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
    handleClick(rowIndex, columnIndex) {
        this.setState(prevState => ({
            board: [
                ...prevState.board,
                e.target.board

            ]
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
                        {row.map((cell, columnIndex) => {
                            return <Square className="column" key={columnIndex} value={cell} onClick={this.handleClick} />
                        })}
                    </td>
                })}
            </div>
        )
    }

}
export default InitializeBoard;
import React from "react";

import Square from '../Square/Square'


class InitializeBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            board: [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 2, 0, 0, 0],
                [0, 0, 0, 2, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ]
        };
    }
    render() {
        const styles = {
            td: {
                borderSpacing: '0'
            }
        }
        return (
            <div>
                {this.state.board.map((row, index) => {
                    return <td className="row" style={styles.td} key={index}>
                        {row.map((column, index) => {
                            return <Square className="column" key={index} value={column} />
                        })}
                    </td>
                })}
            </div>
        )
    }

}
export default InitializeBoard;
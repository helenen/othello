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
            container: {
                height: '50vh'
            }
        }
        return (
            <div className='container' style={styles.container}>
                {this.state.board.map((row, rowIndex) => {
                    return <td className="row" key={rowIndex}>
                        {row.map((column, columnIndex) => {
                            // if ((rowIndex === 3 && columnIndex === 3) || (rowIndex === 4 && columnIndex === 3)) {
                            //     return <Square className="column" key={columnIndex} value={column} initialSquare={true} />
                            // } else if ((rowIndex === 3 && columnIndex === 4) || (rowIndex === 4 && columnIndex === 4)) {
                            //     return <Square className="column" key={columnIndex} value={column} initialSquare={true} />
                            // }
                            return <Square className="column" key={columnIndex} value={column} />
                        })}
                    </td>
                })}
            </div>
        )
    }

}
export default InitializeBoard;
import React from "react";

import Square from '../Square/Square'
import { tsPropertySignature } from "@babel/types";

class InitializeBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            isBlack: true,
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
        //console.log(this.state.board, "board")
    }


    // let columns = [];
    // for (let i = 0; i < 8; i++) {

    //     let rows = []

    //     for (let j = 0; j < 8; j++) {

    //         if ((j === 4 && i === 4) || (j === 3 && i === 3)) {
    //             rows.push(<Square key={j} id={j} initialSquare={true} />)
    //         } else if ((j === 4 && i === 3) || (j === 3 && i === 4)) {
    //             rows.push(<Square key={j} id={j} initialSquare={true} />)
    //         } else {
    //             rows.push(<Square key={j} id={j} />)
    //         }
    //     }
    //     columns.push(<tr key={i} id={i}>{rows}</tr>)
    // }
    render(state) {
        const boardProps = state.board;

        let grid = boardProps.map(() => {
            return <Square />
        })
        return (
            <div>

                {grid}
            </div>
        )
    }

}
export default InitializeBoard;
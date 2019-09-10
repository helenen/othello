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
        const newBoard = this.state.board.slice()

        if (newBoard[rowIndex][cellIndex]) {
            newBoard[rowIndex][cellIndex] = "black"

        }
        this.setState({ newBoard })

    }
    aiPlay() {

        let emptyIndex = [];
        const newBoard = this.state.board

        for (let i = 0; i < newBoard.length; i++) {
            for (let j = 0; j < newBoard[i].length; j++) {

                if (newBoard[i][j] === "vide") {
                    emptyIndex.push({ row: i, column: j })

                }
            }
        }
        let randIndex = Math.floor(Math.random() * emptyIndex.length);
        console.log(newBoard[randIndex].row);
        // if (newBoard[randIndex]) {
        //     console.log("pilou");
        // }
        // this.setState({ newBoard })
        // console.log(newBoard[rowRandIndex][cellRandIndex], 'r');
        //newBoard[rowRandIndex][cellRandIndex] = "white"
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
                            return <Square className="column" key={cellIndex} value={cell} onClick={() => { this.handleClick(rowIndex, cellIndex); this.aiPlay() }} />
                        })}


                    </td>

                })}

            </div>
        )
    }

}
export default InitializeBoard;
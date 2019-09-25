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
        this.playAPawn = this.playAPawn.bind(this);
        //this.aiPlay = this.aiPlay.bind(this);
        this.turnPawn = this.turnPawn.bind(this)
    }

    handleClick(rowIndex, cellIndex, color) {
        const boardAfterPlayePlay = this.playAPawn(rowIndex, cellIndex, "black");
        //const boardAfterAIPlay = this.aiPlay(boardAfterPlayePlay);
        this.setState({ board: boardAfterPlayePlay })
    }

    playAPawn(rowIndex, cellIndex, color) {
        const newBoard = this.state.board.slice();

        if (newBoard[rowIndex][cellIndex]) {
            newBoard[rowIndex][cellIndex] = color;

        }
        this.turnPawn(newBoard, rowIndex, cellIndex, color)
        return newBoard;
    }
    // aiPlay(newBoard) {
    //     let emptyIndex = [];
    //     for (let i = 0; i < newBoard.length; i++) {
    //         for (let j = 0; j < newBoard[i].length; j++) {
    //             if (newBoard[i][j] === "vide") {
    //                 emptyIndex.push({ row: i, column: j })

    //             }
    //         }
    //     }
    //     let randIndex = emptyIndex[Math.floor(Math.random() * emptyIndex.length)];

    //     return this.playAPawn(randIndex.row, randIndex.column, "white");
    // }

    turnPawn(newBoard, rowIndex, cellIndex, color) {
        const colorOponent = color === 'white' ? "black" : 'white';
        for (
            let i = cellIndex + 1;
            i < newBoard[rowIndex].length && newBoard[rowIndex][i] === colorOponent;
            i++
        ) {

            //si dernier pion === noir alors nesting

            console.log(newBoard[rowIndex].length - 1, i, "last");



            // //let count = 0
            // Tu arrête la boucle quand = (case === couleur || case === vide || i > plateau)
            // Tu continue la boucle tant que = !((case === couleur || case === vide) || (i > plateau))
            //                                = !(case === couleur || case === vide) && i < plateau)
            //                                = case !== couleur && case !== vide && i < plateau
            //                                = case === couleurAdverse && i < plateau


            //console.log(newBoard[rowIndex][i], i, "i");
            // if (newBoard[rowIndex][i] === "black") {
            //     count += 1
            //     console.log(count, "count");
            // }

        }

    }


    render() {
        const styles = {
            container: {
                display: 'flex',
                height: '7.9vh',
                verticalAlign: 'top'
            }
        }


        return (
            <table className='container' style={styles.container}>
                <tbody>
                    {this.state.board.map((row, rowIndex) => {

                        return <tr className="row" style={styles.container} key={rowIndex}>

                            {row.map((cell, cellIndex) => {
                                return <Square className="column" key={cellIndex} value={cell} onClick={() => { this.handleClick(rowIndex, cellIndex); }} />
                            })}


                        </tr>

                    })}
                </tbody>
            </table>
        )
    }

}
export default InitializeBoard;
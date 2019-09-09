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
        const aiNewBoard = this.setState({ newBoard })
        return aiNewBoard
    }
    aiPlay(rowIndex, cellIndex, aiNewBoard) {


        console.log(aiNewBoard, "new");
        //const emptyIndex = [];
        // if (newBoard[rowIndex][cellIndex] === "vide") {
        //     emptyIndex.push(newBoard[rowIndex][cellIndex])
        //     console.log(emptyIndex, "empty");
        // }
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
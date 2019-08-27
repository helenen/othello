import React from 'react';
let styles = {
    square: {
        margin: 'auto',
        color: 'black',
        border: "0.1px solid",
        height: '3rem',
        width: "6rem"
    },
    pawn: {
        height: '25px',
        width: '25px',
        backgroundColor: 'black',
        borderRadius: '100%',
        display: 'inlineBlock'
    }

}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pawn: props.initialSquare
        };

    }

    render() {

        return (
            <div className="square" style={styles.square} onClick={() => this.setState({ pawn: true })} >
                {this.state.pawn ? (<div className="pawn" style={styles.pawn} />) : ""}
            </div>
        )
    }
}








// const Square = props => {
//     const changeColor = event => props.value === 0 ? styles = { pawn: { color: 'black' } } : styles = { pawn: { color: 'white' } }
//     return <td className="square" style={styles.pawn} onClick={this.props.onClick}>
//         {props.value ? <td ></td> : ''}
//     </td>
// }

export default Square
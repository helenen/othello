import React from 'react';
let styles = {
    square: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        color: 'black',
        border: "0.1px solid",
        height: '3rem',
        width: "6rem"
    },
    isBlack: {
        height: '25px',
        width: '25px',
        backgroundColor: 'black',
        borderRadius: '100%'
    },
    isWhite: {
        height: '25px',
        width: '25px',
        backgroundColor: 'white',
        borderRadius: '100%',
        border: '1px solid'
    }

}

class Square extends React.Component {

    render() {
        return (
            <div className="square" style={styles.square} onClick={this.props.onClick} >

                {this.props.value === "black" ? (<div className="pawn" style={styles.isBlack} value={this.props.column} />) : this.props.value === "white" ? (<div className="pawn" style={styles.isWhite} value={this.props.column} />) : ""}
            </div>
        )
    }
}


export default Square
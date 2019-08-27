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
    pawn: {
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
    constructor(props) {
        super(props);
        this.state = {
            pawn: props.initialSquare,
            value: props.value
        };

    }
    render() {

        return (
            <div className="square" style={styles.square} onClick={() => this.setState({ pawn: 1, value: 1 })} >
                {this.state.pawn === 1 ? (<div className="pawn" style={styles.pawn} />) : this.state.pawn === 2 ? (<div className="pawn" style={styles.isWhite} />) : ""}
            </div>
        )
    }
}


export default Square
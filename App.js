import React from 'react';
import './App.css';

class GuitarFretboard extends React.Component {
    render() {
        return (
            <div className="fretboard">
                <canvas id="guitarFretboard" width="800" height="200"></canvas>
            </div>
        );
    }
}

export default GuitarFretboard;

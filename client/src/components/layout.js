import React, { useState } from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';


const Compass = () => {
  const [rotation, setRotation] = useState(0);

  const handleRotationChange = (event) => {
    setRotation(event.target.value);
  };

  return (
      <Container>
    <div className="triangle-app">
      <div className="triangle-container" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="triangle">
          <div className="north-label">N</div>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="360"
        value={rotation}
        onChange={handleRotationChange}
        className="rotation-slider"
      />
      <h2>North</h2>
    </div>
    </Container>
  );
};

function Layout() {
  const [grid, setGrid] = useState([]);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  const createGrid = () => {
    const newGrid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push({ color: 'green', clicks: 0 });
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };

  const handleClick = (rowIndex, colIndex) => {
    const updatedGrid = [...grid];
    const square = updatedGrid[rowIndex][colIndex];
    square.clicks += 1;
    if (square.clicks === 1) {
      square.color = 'white';
    } else if (square.clicks === 2) {
      square.color = 'black';
    } else {
      square.color = 'green';
      square.clicks = 0;
    }
    setGrid(updatedGrid);
  };

  return (
    <div className="App">
      <Compass orientation="North" />
      <h1>Garden Layout</h1>
      <div>
        <label>
          Garden Length:
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
          />
        </label>
        <label>
          Garden Width:
          <input
            type="number"
            value={cols}
            onChange={(e) => setCols(parseInt(e.target.value))}
          />
        </label>
        <button onClick={createGrid}>Create Garden Grid</button>
      </div>
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((square, colIndex) => (
            <div
              className="square"
              key={colIndex}
              style={{ background: square.color }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Layout;

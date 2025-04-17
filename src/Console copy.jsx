import React, { useState } from 'react'
import './App.css'
import Steering from './steering.jsx'
import Seats from './seats.jsx'
import { useHistory } from 'react-router-dom'

function Console() {
  const [selectedConsole, setSelectedConsole] = useState('');
  const [selectedSeat, setSelectedSeat] = useState('');
  const history = useHistory();

    const handleSeatSelection = (seat) => {
        setSelectedSeat(seat);
        history.push('/stoel.html');
    };
    
  return (
      <>
          {!selectedConsole && (
              <>
                  <h1>Kies je console</h1>
                  <div className='buttons'>
                      <button key={"playstation"} onClick={() => setSelectedConsole("playstation")}>Playstation</button>
                      <button key={"xbox"} onClick={() => setSelectedConsole("xbox")}>Xbox</button>
                      <button key={"pc"} onClick={() => setSelectedConsole("pc")}>PC</button>
                  </div>
              </>
          )}
          {selectedConsole && !selectedSeat && (
              <>
                  <Steering name={selectedConsole} />
                  <div className='buttons'>
                      <button key={"seat1"} onClick={() => setSelectedSeat("seat1")}>Seat 1</button>  
                  </div>
              </>
          )}
          {selectedSeat && <Seats name={selectedSeat} />}

      </>
  );
}

export default Console;
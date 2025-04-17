import React, { useState, useEffect, use } from 'react';
import './App.css';
import Steering from './steering.jsx';
import Seats from './seats.jsx';
import useLocalStorage from 'use-local-storage';

function Console() {
    const [Console,setSelectedConsole] = useState("");
    const [count, setcount] = useLocalStorage("count",0);
    
    function countUp() {
        setcount(count + 1);
    }
    function countDown() {
        setcount(count - 1);
    }
    return (
        <>
            { count === 0 &&(
                <>
                    <h1>Kies je console</h1>
                    <div className='buttons'>
                        <button className={"playstation"} onClick={() =>{
                        setSelectedConsole("playstation");
                        countUp();
                    }}>Playstation</button>
                        <button className={"xbox"} onClick={() => {
                        setSelectedConsole("xbox");
                        countUp();
                    }}>Xbox</button>
                        <button className={"pc"} onClick={() => {
                            setSelectedConsole("pc");
                            countUp();
                        }}>PC</button>
                    </div>
                </>
            )}
            {count === 1 &&(
                <>
                    <button className = "Terug" onClick={countDown}>&lArr; Terug</button>
                    <button className = "Volgende"onClick={countUp}>Volgende &rArr;</button>
                    <div className='producten'>
                        <Steering name={Console} />
                    </div>
                </>
            )}
            {count ===2 && (
                <>
                    <button className = "Terug" onClick={countDown}>&lArr; Terug</button>
                    <button className = "Volgende"onClick={countUp}>Volgende &rArr;</button>
                    <Seats  />

                </>)}
            {count === 3 && (
                <>
                <button onClick={countDown}>Terug naar builder</button>
                <h1>Je hebt gekozen voor &#128722;</h1>
                <div className="lijst">
                {JSON.parse(localStorage.getItem('cart') || '[]').map((item) => (
                    <>
                        <div className="list" key={item.id}>
                        {/*<h1>{item.id}</h1>*/}
                        <div className="onderdeel"key={item.id}>
                            
                            <img src={'./images/'+item.imagehref} alt={item.name} />
                            <h2>{item.name}</h2>
                            <h3 className="price">€{item.price}</h3>
                            <p>{item.description}</p>
                            <a href={item.href} target = "_blank">Ga naar site &#x1f517;</a>
                            {/* <img 
                                src={`${new URL('/favicon.ico', item.href).href}`}	 
                                alt="Favicon" 
                                style={{ width: '16px', height: '16px', marginTop: '5px' }} 
                            />*/}

                        </div>
                        </div>
                    
                    </>

                ))}
                <h1>
                Totaalprijs: €
                {JSON.parse(localStorage.getItem('cart') || '[]')
                .reduce((total, item) => total + parseFloat(item.price || 0), 0)
                .toFixed(2)}
                </h1>

                <button onClick={countDown}>Terug naar builder</button>
                </div>
                </>)}
                
                
                
            </>
            
    );
}

export default Console;
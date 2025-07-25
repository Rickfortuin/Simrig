import React, { useState, useEffect, use } from 'react';
import './App.css';
import Steering from './steering.jsx';
import Seats from './seats.jsx';
import useLocalStorage from 'use-local-storage';

function Console({page}) {
    const [Console,setSelectedConsole] = useState("");
    const [count2, setcount] = useState(page);

    useEffect(() => {
        setcount(page); // Update 'count2' wanneer 'page' verandert
    }, [page]);
    
    function countUp() {
        setcount(count2 + 1);
    }
    function countDown() {
        setcount(count2 - 1);
    }
    return (
        <>
       
            { count2 === 0 &&(
                <>
                    <h1 className='builderkop'>Kies je console</h1>
                    <div className='buttons'>
                        <button className={"playstation"} onClick={() =>{
                        setSelectedConsole("playstation");
                        countUp();
                    }}>Playstation</button>
                        <button className={"xbox"} onClick={() => {
                        setSelectedConsole("xbox");
                        countUp();
                    }}>XBOX</button>
                        <button className={"pc"} onClick={() => {
                            setSelectedConsole("pc");
                            countUp();
                        }}>PC</button>
                    </div>
                </>
            )}
            {count2 === 1 &&(
                <>  
                    <div className='knoppen'key={count2}>
                        <button className = "Terug" onClick={countDown}>&lArr; Terug</button>
                        <button className = "Volgende"onClick={countUp}>Volgende &rArr;</button>
                    </div>
                    <div className='producten'>
                        <Steering name={Console} page = {setcount}/>
                    </div>
                </>
            )}
            {count2 ===2 && (
                <>
                <div className='knoppen'key={count2}>
                        <button className = "Terug" onClick={countDown}>&lArr; Terug</button>
                        <button className = "Volgende"onClick={countUp}>Volgende &rArr;</button>
                    </div>
                    <Seats  name = {Console} page = {setcount}/>

                </>)}
            {count2 === 3 && (
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
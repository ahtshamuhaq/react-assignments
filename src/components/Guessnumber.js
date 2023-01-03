
import React, { useState } from 'react'



const RandomNumber = () => {
    const [guessNumber, setGuessNumber] = useState(Math.floor(Math.random() * 100));
    const [value, setValue] = useState("");
    const [results, setResults] = useState("");
    const [disabledStart, setDisabledStart] = useState(false);
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const trackGuesses = [];
    const [guesses, setGuesses] = useState(trackGuesses);

    const onStartHandle = () => {
        console.log("Random Number   1:" + guessNumber);
        setGuessNumber(Math.floor(Math.random() * 100));
        setResults('');
        setDisabledStart(true);
        setDisabledSubmit(false);

    }
    const onSubmitHandle = () => {
        console.log("1: guessNumber " + guessNumber + " 2:Value   " + value);
        const guess = parseInt(value, setValue);
        console.log("Length" + guesses.length);
        if (guess === guessNumber) {
            setResults(<p>You Win!</p>);
            setDisabledStart(false);
            setDisabledSubmit(true);
            setGuesses('');
            console.log('You Win');
        };

        if (guess > guessNumber) {
            setResults(<p>You guessed high!</p>);
            setGuesses((guesses) => [...guesses, guess]);
            console.log('guess is High');
        }

        if (guess < guessNumber) {
            setResults(<p>You guessed low!</p>);
            setGuesses((guesses) => [...guesses, guess]);
            console.log("Guess low");
        }
        if (guesses.length === 10) {
            setResults(<p>You Lose</p>);
            setValue('');
            setGuesses('');
            setDisabledSubmit(true);
        }
        setValue('');


    }
    const handleOnChange = (event) => {
        setValue(event.target.value);
    }

    return (
         
         
        <div className='d-flex flex-column justify-content-center vh-100'>
            <hr />
            <h1 className='text-bold text-center'>Guess the Number</h1>
            <hr />
            <p className='text-bold text-center'>Enter a guess between 0 to 100</p>
            <div className="d-flex justify-content-center">
                <input className='text-center' style={{ width: '250px' }} min='0' max='100' type="number" value={value} onChange={handleOnChange} placeholder='Enter a number' />
            </div>
            <div className="d-flex justify-content-center my-2">
                <button className="btn btn-success mx-2" onClick={onSubmitHandle} disabled={disabledSubmit} id='submitBtn'>Submit</button>
                <button className="btn btn-success mx-2" onClick={onStartHandle} disabled={disabledStart} id='startBtn'>Start Game</button>
            </div>
            <div className="d-flex justify-content-center my-2">
                <p>
                    <label >{results}</label><br />
                    <label >{" " + guesses.join(', ')}</label>
                </p></div>

        </div>
    )
}

export default RandomNumber;

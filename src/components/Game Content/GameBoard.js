import React, { useState, useEffect } from "react";
import Card from "./Card";

function GameBoard() {
    const cardData = [
        { id: 1, imageUrl: process.env.PUBLIC_URL + '/characters/adele.jpg' },
        { id: 2, imageUrl: process.env.PUBLIC_URL + '/characters/ark.jpg' },
        { id: 3, imageUrl: process.env.PUBLIC_URL + '/characters/hayato.jpg' },
        { id: 4, imageUrl: process.env.PUBLIC_URL + '/characters/hoyoung.jpg' },
        { id: 5, imageUrl: process.env.PUBLIC_URL + '/characters/kain.jpg' },
        { id: 6, imageUrl: process.env.PUBLIC_URL + '/characters/kaiser.jpg' },
        { id: 7, imageUrl: process.env.PUBLIC_URL + '/characters/kanna.jpg' },
        { id: 8, imageUrl: process.env.PUBLIC_URL + '/characters/luminous.jpg' },
        { id: 9, imageUrl: process.env.PUBLIC_URL + '/characters/phantom.jpg' },
        { id: 10, imageUrl: process.env.PUBLIC_URL + '/characters/shade.jpg' },
        { id: 11, imageUrl: process.env.PUBLIC_URL + '/characters/thunder-breaker.jpg' },
        { id: 12, imageUrl: process.env.PUBLIC_URL + '/characters/zero.jpg' },

    ];

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cards, setCards] = useState(cardData);
    const [clickedCardIds, setClickedCardIds] = useState([]);
    const [isGameWon, setIsGameWon] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);

    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        const shuffledCards = [...cards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        setCards(shuffledCards);
    };

    const handleCardClick = (clickedCardId) => {
        const clickedCard = cards.find((card) => card.id === clickedCardId);
        const isCardClicked = clickedCardIds.includes(clickedCardId);

        if (isCardClicked) {
            setScore(0);
            if (score > highScore) {
                setHighScore(score);
            }
            resetGame();
        } else {
            setScore(score + 1);
            setClickedCardIds([...clickedCardIds, clickedCardId]);
            shuffleCards();
        }

        if (score === 11) {
            setIsGameWon(true);
        }
    };

    const resetGame = () => {
        setScore(0);
        if (score > highScore) {
            setHighScore(score);
        }
        setClickedCardIds([]);
        shuffleCards();
        setIsGameWon(false);
    };

    const startGame = () => {
        setIsGameStarted(true);
    };

    return (
        <div className="game-board">
            {!isGameStarted && (
                <div className="start-screen">
                    <h1 className="welcome-text">Welcome to the Maplestory Memory Game</h1>
                    <p className="objective-text">A game to test your memories! Try to test and challenge your memory skills, avoid clicking on the same card!</p>
                    <button className="play-game-btn" onClick={startGame}>
                        Play Game
                    </button>
                </div>
            )}

            <div className="score-board">
                <div className="score">Score: {score}</div>
                <div className="highscore">High Score: {highScore}</div>
            </div>

            {isGameWon && (
                <div className="win-message">
                    <h1>You won!</h1>
                    <button className="play-again-btn" onClick={resetGame}>
                        Play Again?
                    </button>
                </div>
            )}

            <div className="card-content">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        imageUrl={card.imageUrl}
                        onClick={() => handleCardClick(card.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default GameBoard;

import React, { useState } from "react";
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

    const handleCardClick = (clickedCardId) => {
        const clickedCard = cards.find((card) => card.id === clickedCardId);
        const isCardClicked = clickedCard && clickedCard.clicked;

        if (isCardClicked) {
            setScore(0);
            if (score > highScore) {
                setHighScore(score);
            }
        } else {
            setScore(score + 1);
            const updatedCards = cards.map((card) =>
                card.id === clickedCardId ? { ...card, clicked: true } : card
            );
            setCards(updatedCards);
        }
    };

    return (
        <div className="game-board">
            <div className="score-board">
                <div className="score">Score: {score}</div>
                <div className="highscore">High Score: {highScore}</div>
            </div>
            <div className="card-content">
                {cards.map((card) => (
                    <Card key={card.id} imageUrl={card.imageUrl} onClick={() => handleCardClick(card.id)} />
                ))}

            </div>
        </div>
    );
}

export default GameBoard;

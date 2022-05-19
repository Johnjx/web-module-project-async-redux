import React from "react";

const ClassCards = ({ classCards }) => {
    return (
        <section className="cards-section">
            {classCards.map(card => (
                <div key={card.cardId} className="cards">
                    <h3>{card.name}</h3>
                    <h4>{card.cardSet}</h4>
                    <h5>{card.type}</h5>
                    <h5>{card.rarity}</h5>
                    <div>{card.img ? <img src={card.img} alt="image of class card"/>: ''}</div>
                </div>
            ))}
        </section>
    )  
}


export default ClassCards
import React from "react";

const Classes = ({ classes, handleClassCards }) => {
    return (
        <section>
            <h2>Classes</h2>
            {classes.map((type, idx) => (
                <span key={idx} className={`span${idx}`} onClick={() => handleClassCards()}>{type}</span>
            ))}
        </section>
    )  
}


export default Classes
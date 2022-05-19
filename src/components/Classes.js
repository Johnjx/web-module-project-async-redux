import React from "react";

const Classes = ({ classes, handleClassCards }) => {
    return (
        <div>
            <h2>Classes</h2>
            <section className="classSection">
                {classes.map((type, idx) => (
                    <span key={idx} className={`span${idx}`} onClick={() => handleClassCards()}>{type}</span>
                ))}
            </section>
        </div>
    )  
}


export default Classes
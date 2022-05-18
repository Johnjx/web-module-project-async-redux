import React from "react";

const Classes = ({ classes }) => {
    return (
        <section>
            {classes.map((type, idx) => (
                <span key={idx} className={`span${idx}`}>{type}</span>
            ))}
        </section>
    )  
}


export default Classes
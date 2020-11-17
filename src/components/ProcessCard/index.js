import React from "react";
import './style.css'

export const ProcessCard = ({title,description,total}) => {
    return(
        <div className="card_container">
            <div className="card_info">
                <div className="card_title">{title}</div>
                <div className="card_description">{description}</div>
            </div>
            <div className="card_stats">{total}</div>
        </div>
    )
}

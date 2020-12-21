import React from "react";
import './style.css'

export const TotalCard = ({total,course}) => {
    return (
        <div className="container">
            <div>
                <p className="card-title">Lộ trình</p>
                <p>Đã hoàn thành</p>
                <div className="dot"/>
                <p>{total} % của {course}</p>
            </div>
        </div>
    )
}

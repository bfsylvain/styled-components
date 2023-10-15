import React from "react";


const CardBody = ({synopsis, averageRate}) => {
    return (
    <div className="body-main">
        <div className="rate-area">
            <p>
                <span>{averageRate}</span>
                <a href="">rate</a>
            </p>
            <a className="play-btn" href=""><img src="src/assets/img/play_button.svg" alt="playBtn"/></a>
        </div>
        <div className="synopsis-area">
            <h2>Synopsis</h2>
            <p>{synopsis}</p>
        </div>
    </div>
    )
}

export default CardBody
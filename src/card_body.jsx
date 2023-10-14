import React from "react";


const CardBody = () => {
    return (
    <div className="body-main">
        <div className="rate-area">
            <p>
                <span>★★★★☆</span>
                <a href="">rate</a>
            </p>
            <a className="play-btn" href=""><img src="src/assets/img/play_button.svg" alt="" /></a>
        </div>
        <div className="synopsis-area">
            <h2>Synopsis</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae maiores error impedit nisi repellendus, voluptate, tenetur eaque odio veniam ut consectetur, praesentium in pariatur cum nihil ab temporibus quae neque.</p>
        </div>
    </div>
    )
}

export default CardBody
import React from "react";




const Header = ({movie, convertedTime}) => {
return(
    <>
        <header>
        <div className="movie-length">{convertedTime(movie.length)}</div>
        <div className="movie-title">{movie.title}</div>
        </header>
    </>
)
}

export default Header
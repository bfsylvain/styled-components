import React from "react";


const Header = ({movie, convertedTime, moviePoster}) => {
return(
    <>
        <header style={{backgroundImage: `url(${moviePoster})`}}>
        <div className="movie-length" >{convertedTime(movie.length)}</div>
        <div className="movie-title">{movie.title}</div>
        </header>
    </>
)
}

export default Header
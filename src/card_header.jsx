import React from "react";

const time = (hours, minutes) => {
   return `${hours}h${minutes}min`
}
const movie = {
    title: "DeathProof",
    length:165
}

const Header = () => {
return(
    <>
        <header>
        <div className="movie-length">{time(Math.floor(movie.length/60), movie.length%60)}</div>
        <div className="movie-title">{movie.title}</div>
        </header>
    </>
)
}

export default Header
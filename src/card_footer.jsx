import React from "react";

const languages = ["VO", "FR", "EN", "SP"]

const CardFooter = () => {
    return (
        <>
        <footer className="footer">
            {languages.map(language => 
                <button className="lang" key={language}>{language}</button>)}
        </footer>
        </>
    )
}

export default CardFooter
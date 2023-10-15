import React from "react";


const CardFooter = ({languages}) => {
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
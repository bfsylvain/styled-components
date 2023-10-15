import { useState } from 'react'
import './App.scss'
import Header from './card_header'
import CardBody from './card_body'
import CardFooter from './card_footer'

const movie = {
  title: "DeathProof",
  length:165,
  languages:["VO", "FR", "EN", "SP"],
  synopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deserunt dolor? Excepturi quis at non cupiditate in eligendi qui illo praesentium, nisi, sunt dicta! Totam natus voluptatibus cupiditate aut sapiente.",
  averageRate: "★★★★☆"
}

const convertedTime = (totalLength) => {
  let hours = Math.floor(totalLength/60)
  let minutes = totalLength % 60
  return `${hours}h${minutes}min`
}

function App() {
  return (
    <div className='card'>
    <Header movie={movie} convertedTime={convertedTime}/>
    <CardBody synopsis={movie.synopsis} averageRate={movie.averageRate}/>
    <CardFooter languages={movie.languages}/>
    </div>
  )
}



export default App

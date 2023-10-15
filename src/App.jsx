import { useState } from 'react'
import './App.scss'
import Header from './card_header'
import CardBody from './card_body'
import CardFooter from './card_footer'

const movie = {
  title: "DeathProof",
  length:165
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
    <CardBody/>
    <CardFooter/>
    </div>
  )
}



export default App

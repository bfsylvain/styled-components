import { useState } from 'react'
import './App.scss'
import Header from './card_header'
import CardBody from './card_body'
import CardFooter from './card_footer'

function App() {
  return (
    <div className='card'>
    <Header/>
    <CardBody/>
    <CardFooter/>
    </div>
  )
}



export default App

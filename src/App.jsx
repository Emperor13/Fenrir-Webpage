import { useState } from 'react'
import './App.css'

import Banner from './components/Banner'
import SlideShow from './components/SlideShow'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Banner/>
     <SlideShow/>
     <Footer/>
    </>
  )
}

export default App

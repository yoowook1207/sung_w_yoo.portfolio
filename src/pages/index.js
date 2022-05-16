import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'

const Home = () => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero/>
    </>
  )
}

export default Home
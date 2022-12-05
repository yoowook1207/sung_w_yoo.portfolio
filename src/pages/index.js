import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { aboutMe, homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import ProjectGrid from '../components/ProjectGrid'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

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
        <InfoSection {...aboutMe} />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
        <ProjectGrid id='projectGrid'/>
        <Contact id='contactMe'/>
        <Footer />
    </> 
  )
}

export default Home
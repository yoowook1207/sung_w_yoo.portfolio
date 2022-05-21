import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { aboutMe, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import ProjectGrid from '../components/ProjectGrid'
import Footer from '../components/Footer'

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
        <ProjectGrid id='projectGrid'/>
        <Footer />
    </> 
  )
}

export default Home
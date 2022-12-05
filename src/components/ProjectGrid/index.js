import React from 'react'
import project_Bryss from '../../assets/images/Bryss.png'
import project_SNAPI from '../../assets/images/SNAPI.png'
import project_03 from '../../assets/images/RF.png'
import { PGContainer, PGH1, PGWrapper, PGCard, PGImage, PGH2, PGP } from './ProjectGridElements'

const ProjectGrid = () => {
  return (
    <PGContainer id="projectGrid">
        <PGH1>
            ... and more projects
        </PGH1>
        <PGWrapper>
            <PGCard href="https://github.com/RyanRobCodes/BRYSS-Meals" target="_blank" rel="noreferrer">
                <PGImage src={project_Bryss} /> 
                <PGH2>Bryss - Order meal preps</PGH2>
                <PGP>ReactJS, NodeJS, JavaScript, MySQL, and RESTful API with Express</PGP>
            </PGCard>
            <PGCard href="https://github.com/yoowook1207/SNAPI" target="_blank" rel="noreferrer">
                <PGImage src={project_SNAPI} /> 
                <PGH2>SNAPI - Social Network API (toy)</PGH2>
                <PGP>Social Network API using POST, PUT, DELETE routes. MongoDB, NoSQL</PGP>
            </PGCard>
            <PGCard href="https://github.com/rheam97/restroom-finder" target="_blank" rel="noreferrer">
                <PGImage src={project_03} /> 
                <PGH2>Restroom Finder (toy)</PGH2>
                <PGP>MVC app that uses sequelize, express.js, handlebars.js, and Mapbox GL JS</PGP>
            </PGCard>
        </PGWrapper>
    </PGContainer>
  )
}

export default ProjectGrid
import React from 'react'
import project_Bryss from '../../assets/images/Bryss.png'
import project_Disney from '../../assets/images/DisneyM.png'
import project_03 from '../../assets/images/RF.png'
import { PGContainer, PGH1, PGWrapper, PGCard, PGImage, PGH2, PGP } from './ProjectGridElements'

const ProjectGrid = () => {
  return (
    <PGContainer id="projectGrid">
        <PGH1>
            ... and toy projects
        </PGH1>
        <PGWrapper>
            <PGCard href="https://github.com/yoowook1207/DisneyMinus" target="_blank" rel="noreferrer">
                <PGImage src={project_Disney} /> 
                <PGH2>Disney Minus</PGH2>
                <PGP>OTT Streaming Platform. Angular, NodeJS, NestJS, tmdb API</PGP>
            </PGCard>
            <PGCard href="https://github.com/RyanRobCodes/BRYSS-Meals" target="_blank" rel="noreferrer">
                <PGImage src={project_Bryss} /> 
                <PGH2>Bryss - Order meal preps</PGH2>
                <PGP>ReactJS, NodeJS, JavaScript, MySQL, and RESTful API with Express</PGP>
            </PGCard>
            <PGCard href="https://github.com/rheam97/restroom-finder" target="_blank" rel="noreferrer">
                <PGImage src={project_03} /> 
                <PGH2>Restroom Finder</PGH2>
                <PGP>MVC app that uses sequelize, express.js, handlebars.js, and Mapbox GL JS</PGP>
            </PGCard>
        </PGWrapper>
    </PGContainer>
  )
}

export default ProjectGrid
import React from 'react'
import project_TUE from '../../assets/images/TUE.png'
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
            <PGCard href="https://github.com/yoowook1207/TUE-TrackUrEmployee" target="_blank" rel="noreferrer">
                <PGImage src={project_TUE} /> 
                <PGH2>TUE - Track Your Employee</PGH2>
                <PGP>Tracking, grouping, adding, deleting, editing employees. node.js, MySQL</PGP>
            </PGCard>
            <PGCard href="https://github.com/yoowook1207/SNAPI" target="_blank" rel="noreferrer">
                <PGImage src={project_SNAPI} /> 
                <PGH2>SNAPI - Social Network API</PGH2>
                <PGP>Social Network API using POST, PUT, DELETE routes. MongoDB, NoSQL</PGP>
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
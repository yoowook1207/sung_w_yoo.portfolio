import styled from 'styled-components'

export const PGContainer = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010919;

    @media screen and (max-width: 768px) {
        height: 1100px;        
    }

    @media screen and (max-width: 480px) {
        height: 1300px;        
    }
    `

export const PGWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const PGCard = styled.a `
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 320px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #000;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const PGImage = styled.img `
    height: 160px;
    width: 100%;
    margin-bottom: 10px; 
`

export const PGH1 = styled.h1 `
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;        
    }
`

export const PGH2 = styled.h2 `
    font-size: 1.1rem;
    margin-bottom: 10px;
    text-decoration: none;
    color: #388ad7;
`

export const PGP = styled.p `
    font-size: 0.9rem;
    text-align: center;
    text-decoration: none;
`
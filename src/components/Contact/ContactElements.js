import styled from 'styled-components'

export const ContactContainer = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F7ECE1;

    @media screen and (max-width: 768px) {
        height: 1100px;        
    }

    @media screen and (max-width: 480px) {
        height: 1300px;        
    }
`
export const ContactWrapper = styled.div `

`

export const ContactH1 = styled.h1 `
    font-size: 48px;
    color: #000;
`

export const Colored = styled.span `
    color: #4D7C8A;
    font-size: 48px;
    font-family: 'Oswald', sans-serif;
`

export const ContactForm = styled.form `
    border: 2px solid #000;
    width: 700px;
    padding: 10px;

    @media screen and (max-width:768px) {
        width: 500px;
    }

    @media screen and (max-width:540px) {
        width: 400px;
    }
`

export const EmailInput = styled.input `
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`

export const TextInput = styled.textarea `
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`

export const ContactButton = styled.button `
    border-radius: 50px;
    white-space: nowrap;
    background:#4D7C8A;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`
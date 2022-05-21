import styled from 'styled-components'


export const Button =styled.a `
    border-radius: 50px;
    background: ${ ({primary}) => (primary ? '#4D7C8A' : '#FF7F11')
    };
    white-space: nowrap;
    padding: ${ ({big}) => (big ? '14px 48px' : '12px 30px') };
    color: ${ ({dark}) => (dark ? '#F7ECE1' : '#000') };
    font-size: ${ ({fontBig}) => (fontBig ? '20px' : '16px') };
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${ ({primary}) => (primary ? '#fff' : '#4D7C8A') };
        color: #000
    }
`
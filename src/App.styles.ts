import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/architecture.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;

    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Noto Sans';
    }
`;

export const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;

> p {
    color: #fff;

}

.score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    padding-bottom:20px;
}

h1 {
    font-family: Teko;
    background-image: linear-gradient(180deg, #fff, #fff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color:transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #000);
    font-size: 60px;
    font-weight: 300;
    text-align: center;
    margin: 20px;
    padding-top: 20px;
}

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0,25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`;
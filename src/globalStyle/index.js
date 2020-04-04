import { createGlobalStyle } from "styled-components";
import theme from "theme";
import backgroundImage from "assets/images/mariobackground.jpg";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
    *,*::after,*::before{
        box-sizing:border-box;
    }
    html{
        font-size:62.5%;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        margin:0;
        font-size:1.6rem;

    }
    a{
        text-decoration:none;
        color:white;
    }
`;

export default GlobalStyle;

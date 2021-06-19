import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    font-size: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
}


*, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}


body {
    font-family: 'Poppins', sans-serif;
    color: rgba(255, 255, 255, 1);
    font-size: 1rem;
    font-weight: 400;
    background-color: rgba(28, 41, 56, 1);
}


a {
    text-decoration: none;
}


li {
    list-style: none;
}


img {
    width: 100%;
    height: auto;
}


.container {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0 0.9375rem;

    @media (min-width: 768px) {
        max-width: 960px;
    }

    @media (min-width: 768px) {
        max-width: 71.25rem;
    }
}


::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-thumb {
    background: rgba(44, 64, 86, 1);
    border-radius: 2px;
}

::-webkit-scrollbar-track {
    background: rgba(28, 41, 56, 1);
}
`;

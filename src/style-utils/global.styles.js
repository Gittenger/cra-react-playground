import { createGlobalStyle } from "styled-components";

import { FlexCenter } from "./utils.styles.jsx";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    ${FlexCenter}
    flex-direction: column;
    font-size: 1.8rem;
    width: 100vw;
}

#root {
    width: 100%;
    ${FlexCenter}
    flex-direction: column;
}

a{
    text-decoration: none;
}

a:link,
a:visited{
    color: unset;
}

ul, li {
    list-style: none;
}

button {
    font-family: inherit;
}
`;

export default GlobalStyles;

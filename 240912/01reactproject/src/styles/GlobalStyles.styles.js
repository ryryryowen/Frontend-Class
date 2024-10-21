import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,li {
  list-style: none;
}

:root {
  --primary-color: #7a22d6;
  --font-size: 30px;
}
`;

export default GlobalStyle;

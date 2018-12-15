import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Circular Std";
    font-style: normal;
    font-weight: normal;
    src: url("/static/fonts/CircularStd-Book.woff");
  }

  @font-face {
    font-family: "Circular Std";
    font-style: italic;
    font-weight: normal;
    src: url("/static/fonts/CircularStd-BookItalic.woff");
  }

  @font-face {
    font-family: "Circular Std";
    font-style: normal;
    font-weight: bold;
    src: url("/static/fonts/CircularStd-Bold.woff");
  }


  @font-face {
    font-family: "Circular Std";
    font-style: italic;
    font-weight: bold;
    src: url("/static/fonts/CircularStd-BoldItalic.woff");
  }

  body {
    margin: 0;
    font-family: Circular Std;

    h1 {
      font-size: 36px;
      line-height: 34px;
      font-family: Circular Std;
    }

    h2 {
      font-size: 18px;
      line-height: 20px;
      font-family: Circular Std;
      font-weight: normal;
      color: #838383;
    }
  }
`;

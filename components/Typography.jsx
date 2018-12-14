import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Circular Std Book";
    src: url("/static/fonts/CircularStd-Book.woff");
  }


  @font-face {
    font-family: "Circular Std Book Italic";
    src: url("/static/fonts/CircularStd-BookItalic.woff");
  }


  @font-face {
    font-family: "Circular Std Medium";
    src: url("/static/fonts/CircularStd-Medium.woff");
  }


  @font-face {
    font-family: "Circular Std Medium Italic";
    src: url("/static/fonts/CircularStd-MediumItalic.woff");
  }


  @font-face {
    font-family: "Circular Std Bold";
    src: url("/static/fonts/CircularStd-Bold.woff");
  }


  @font-face {
    font-family: "Circular Std Bold Italic";
    src: url("/static/fonts/CircularStd-BoldItalic.woff");
  }


  @font-face {
    font-family: "Circular Std Black";
    src: url("/static/fonts/CircularStd-Black.woff");
  }


  @font-face {
    font-family: "Circular Std Black Italic";
    src: url("/static/fonts/CircularStd-BlackItalic.woff");
  }

  body {
    margin: 0;

    h1 {
      font-size: 36px;
      line-height: 34px;
      font-family: Circular Std Bold;
    }

    h2 {
      font-size: 18px;
      line-height: 20px;
      font-family: Circular Std Book;
      color: #838383;
    }
  }
`;

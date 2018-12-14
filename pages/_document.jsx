import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const Font = createGlobalStyle`
  @font-face {
    font-family: "CircularStd";
    src: url('/static/fonts/CircularStd-Book.woff') format('woff');
    src: url('/static/fonts/CircularStd-BookItalic.woff') format('woff');
    src: url('/static/fonts/CircularStd-Medium.woff') format('woff');
    src: url('/static/fonts/CircularStd-MediumItalic.woff') format('woff');
    src: url('/static/fonts/CircularStd-Bold.woff') format('woff');
    src: url('/static/fonts/CircularStd-BoldItalic.woff') format('woff');
    src: url('/static/fonts/CircularStd-Black.woff') format('woff');
    src: url('/static/fonts/CircularStd-BlackItalic.woff') format('woff');
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <Font />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

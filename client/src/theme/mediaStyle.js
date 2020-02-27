import { createGlobalStyle } from 'styled-components'

const breakpoint = {
    mobile: "599px",
    tabletPortrait: "900px",
    tabletLandscape: "1200px",
    desktop: "1800px"
  };

export const media = {
    mobile: `(max-width: ${breakpoint.mobile})`,
    tabletPortrait: `(min-width: ${breakpoint.mobile})`,
    tabletLandscape: `(min-width: ${breakpoint.tabletPortrait})`,
    desktop: `(min-width: ${breakpoint.tabletLandscape})`,
    desktopLarge: `(min-width: ${breakpoint.desktop})`
  };
  
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
    body {
      font-family: "Source Sans Pro", "Open Sans", -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
      background-color: ${palette.functional1}
    }
    * {
      box-sizing: border-box;
    }
  `;

  export default mediaStyle
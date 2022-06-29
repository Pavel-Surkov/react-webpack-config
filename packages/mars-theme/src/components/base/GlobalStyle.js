import { css } from "frontity";

import Ubuntu_Light_woff2 from "../../assets/fonts/Ubuntu-Light.woff2";
import Ubuntu_Light_woff from "../../assets/fonts/Ubuntu-Light.woff";
import Ubuntu_Regular_woff2 from "../../assets/fonts/Ubuntu-Regular.woff2";
import Ubuntu_Regular_woff from "../../assets/fonts/Ubuntu-Regular.woff";
import Ubuntu_Medium_woff2 from "../../assets/fonts/Ubuntu-Medium.woff2";
import Ubuntu_Medium_woff from "../../assets/fonts/Ubuntu-Medium.woff";
import Ubuntu_Bold_woff2 from "../../assets/fonts/Ubuntu-Bold.woff2";
import Ubuntu_Bold_woff from "../../assets/fonts/Ubuntu-Bold.woff";
import Barlow_woff2 from "../../assets/fonts/Barlow-Medium.woff2";
import Barlow_woff from "../../assets/fonts/Barlow-Medium.woff";

export const globalStyles = css`
  :root {
    /* Vars */
    --font: "Ubuntu", Arial, sans-serif;
    --logo-font: "Barlow", Arial, sans-serif;

    /* Colors */
    --white: #fdfdfd;
    -black: #1e1e1e;

    --gray-menu: #394c62;

    --error: #eb5757;
    --success: #6fcf97;
    --lightblue-250: #4fd1f9;
    --lightblue-300: #2db9e4;
    --blue-600: #4279b8;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Light_woff2}") format("woff2"),
      url("${Ubuntu_Light_woff}") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Regular_woff2}") format("woff2"),
      url("${Ubuntu_Regular_woff}") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Medium_woff2}") format("woff2"),
      url("${Ubuntu_Medium_woff}") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Bold_woff2}") format("woff2"),
      url("${Ubuntu_Bold_woff}") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url("${Barlow_woff2}") format("woff2"),
      url("${Barlow_woff}") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-size: 10px;
    margin: 0;
    font-family: var(--font);
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
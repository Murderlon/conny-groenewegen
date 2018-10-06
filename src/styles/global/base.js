import { css } from "styled-components";
import { black, white, grey } from "../themes/colors";

const base = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background: ${black};
    color: ${white};
    font-size: 17px;
  }

  /**
 * Add the correct display in browsers that don't support HTML5 elements by default.
 */

  article,
  aside,
  footer,
  header,
  nav,
  figcaption,
  figure,
  main,
  section {
    display: block;
  }

  ul,
  dl {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  dt,
  dd {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    color: ${grey};
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none;
    border: 0;
    color: inherit;
  }
`;

export default base;

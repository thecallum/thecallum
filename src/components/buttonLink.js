import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "./button"

export default styled(props => <Link {...props} />)`
  display: block;
  background: transparent;

  position: relative;
  overflow: hidden;

  @keyframes animateBackground {
    0% {
      left: -100%;
    }

    100% {
      left: 0%;
    }
  }

  font-weight: bold;

  &::before {
    content: "";
    display: block;
    width: 200%;
    height: 100%;
    // background: orange;

    background: repeating-linear-gradient(
      45deg,
      #000,
      #000 10px,
      #272727 10px,
      #272727 20px
    );

    z-index: -1;

    position: absolute;
    top: 0;
    left: 0;

    animation-name: animateBackground;
    animation-duration: 2s;
    animation-iteration-count: 100;
    animation-timing-function: linear;

    display: none;
  }

  // background: repeating-linear-gradient(
  //   45deg,
  //   #606dbc,
  //   #606dbc 10px,
  //   #465298 10px,
  //   #465298 20px
  // );

  border: 2px solid #272727;
  color: #272727;
  padding: 15px 20px;
  margin-left: 30px;
  cursor: pointer;
  font-family: sans-serif;
  max-width: 120px;

  align-items: center;
  display: flex;
  justify-content: center;

  text-align: center;

  transition: background linear 0.1s;
  text-decoration: none;

  flex-basis: 0;
  flex-grow: 1;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    // background: #272727;
    color: #fff;
    border-color: #000;

    &::before {
      display: block;
    }
  }

  &:active {
    border-color: var(--color-primary);
    // color: var(--color-primary);
  }
`

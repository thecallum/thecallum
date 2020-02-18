import styled from "styled-components"

export default styled.button`
  display: block;
  background: transparent;
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
    background: #272727;
    color: #fff;
  }

  &:active {
    border-color: var(--color-primary);
    // color: var(--color-primary);
  }
`

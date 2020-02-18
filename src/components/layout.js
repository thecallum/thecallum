import React from "react"
import Navbar from "./navbar"
import styled, { createGlobalStyle } from "styled-components"

import "normalize.css/normalize.css"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

:root {
  --color-primary: hsl(289, 24.8%, 47.5%);
}

  html,
  body {
    height: 100%;
  }

*,*::before,*::after {
  box-sizing: border-box
}


  body {
    font-family: 'Source Sans Pro', sans-serif;  
  }
`

const Container = styled.div`
  padding: 30px;
  // background: orange;
  height: 100%;
  flex-grow: 1;
`

export default ({ children }) => (
  <>
    <GlobalStyle />

    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />

      <Container>
        <main>{children}</main>
      </Container>
    </div>
  </>
)

import React from "react"
import Navbar from "./navbar"
import "normalize.css/normalize.css"

export default ({ children }) => (
  <>
    <Navbar />

    <main>{children}</main>
  </>
)

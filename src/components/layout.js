import React from "react"
import Navbar from "./navbar"

export default ({ children }) => (
  <>
    <Navbar />

    <main>{children}</main>
  </>
)

import React from "react"
import Header from "./header"

import "../scss/app.scss"

export default ({ children }) => (
  <>
    <Header />

    <div className="page-layout-main">{children}</div>
  </>
)

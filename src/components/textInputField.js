import React, { useState } from "react"

export default ({ name, field, update }) => {
  const [focus, setFocus] = useState(focus)

  const isEmpty = () => field.value === ""
  const isError = () => field.error !== null

  return (
    <div className="input-group">
      <label className={`input-label ${!isEmpty() || focus ? "toggle" : ""}`}>
        {name}
      </label>
      <input
        type="text"
        className={`input-text ${isError() ? "error" : ""}`}
        value={field.value}
        onChange={update}
        name={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}

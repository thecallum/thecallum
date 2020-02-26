import React, { useState } from "react"

export default ({ name, field, updateMethod }) => {
  const [focus, setFocus] = useState(false)

  const isEmpty = () => field.value === ""
  const isError = () => field.error !== null
  const enableToggle = () => !isEmpty() || focus || isError()

  const update = e => {
    updateMethod({
      error: field.error,
      value: e.target.value,
    })
  }

  return (
    <div className="input-group">
      <label className={`input-label ${enableToggle() ? "toggle" : ""}`}>
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
      {isError() && <div className="input-error">{field.error}</div>}
    </div>
  )
}

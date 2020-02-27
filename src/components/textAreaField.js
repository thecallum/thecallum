import React, { useState } from "react"

export default ({ name, field, error, update, disabled }) => {
  const [focus, setFocus] = useState(false)

  const isEmpty = () => field === ""
  const isError = () => !!error
  const enableToggle = () => !isEmpty() || focus || isError()

  return (
    <div className="input-group">
      <label
        className={`input-label ${enableToggle() || focus ? "toggle" : ""}`}
      >
        {name}
      </label>
      <textarea
        type="text"
        className={`input-textarea ${isError() ? "error" : ""}`}
        value={field}
        onChange={update}
        name={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        disabled={disabled}
      />
      {isError() && <div className="input-error">{error}</div>}
    </div>
  )
}

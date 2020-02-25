import React, { useState } from "react"

export default ({ name, field, update }) => {
  const [focus, setFocus] = useState(focus)

  const empty = () => field.value === ""

  return (
    <div className="input-group">
      <label className={`input-label ${!empty() || focus ? "toggle" : ""}`}>
        {name}
      </label>
      <textarea
        type="text"
        className="input-textarea"
        value={field.value}
        onChange={update}
        name={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}

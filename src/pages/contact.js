import React, { useState } from "react"
import Layout from "../components/layout"

import TextAreaField from "../components/textAreaField"
import TextInputField from "../components/textInputField"

export default () => {
  const createFieldObject = () => ({
    value: "",
    error: null,
  })

  const [state, setState] = useState({
    name: createFieldObject(),
    email: createFieldObject(),
    message: createFieldObject(),
  })

  const update = e => {
    const { name, value } = e.target
    // console.log("update", { name, value })

    setState({
      ...state,
      [name]: {
        ...state[name],
        value,
      },
    })
  }

  //Only last error appears because using original state value before any method called

  const setError = (field, error) => {
    setState(() => ({
      ...state,
      [field]: {
        ...state[field],
        error,
      },
    }))

    console.log("stqate updated", field, error)
  }

  const handleSubmit = e => {
    e.preventDefault()

    let isError = false

    if (state.name.value === "") {
      console.log("name empty")
      setError("name", "invalid name")
      isError = true
    } else {
      setError("name", null)
    }

    if (state.email.value === "") {
      setError("email", "invalid email")
      isError = true
    } else {
      setError("email", null)
    }

    if (state.message.value === "") {
      setError("message", "invalid message")
      isError = true
    } else {
      setError("message", null)
    }

    console.table(state)

    if (isError) return

    alert("submit")
  }

  return (
    <Layout>
      <div className="container">
        <h1>Contact</h1>

        <form onSubmit={handleSubmit} className="form">
          <TextInputField name="name" field={state.name} update={update} />
          {/* <TextInputField name="email" field={state.email} update={update} /> */}
          {/* <TextAreaField name="message" field={state.message} update={update} /> */}

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div style={{ width: "100vw" }}>
        <p>Errors</p>

        <ul>
          {Object.keys(state).map(key => {
            const field = state[key]
            return (
              <li key={key}>
                [{key}]: {field.error}
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

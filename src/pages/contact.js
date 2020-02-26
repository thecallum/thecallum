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
    loading: false,
    errors: false,
  })

  const [name, setName] = useState(createFieldObject())
  const [email, setEmail] = useState(createFieldObject())
  const [message, setMessage] = useState(createFieldObject())

  const setError = (field, stateUpdateMethod, error) => {
    stateUpdateMethod({
      ...field,
      error,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (state.loading) return

    if (!validateForm()) {
      setState({ ...state, errors: true })
      return
    }

    setState({ loading: true, errors: false })

    sendRequest().then(() => {
      console.log("request sent")
      setState({ ...state, loading: false })
    })
  }

  const validateForm = () => {
    let isError = false

    if (name.value === "") {
      setError(name, setName, "invalid name")
      isError = true
    } else {
      setError(name, setName, null)
    }

    if (email.value === "") {
      setError(email, setEmail, "invalid email")
      isError = true
    } else {
      setError(email, setEmail, null)
    }

    if (message.value === "") {
      setError(message, setMessage, "invalid message")
      isError = true
    } else {
      setError(message, setMessage, null)
    }

    return !isError
  }

  const sendRequest = () => {
    return new Promise(resolve => {
      // setTimeout(() => {
      //   resolve()
      // }, 5000)
      fetch("/contact", {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: {
          name,
          email,
          message,
        },
      })
        .then(res => {
          console.log("response", res)
        })
        .catch(e => {
          console.log("request error", e)
        })
    })
  }

  return (
    <Layout>
      <div className="container">
        <h1>Contact</h1>

        <form
          onSubmit={handleSubmit}
          className="form"
          name="contact"
          method="post"
          netlify
          data-netlift="true"
          data-netlify-honeypot="bot-field"
        >
          <TextInputField name="name" field={name} updateMethod={setName} />
          <TextInputField name="email" field={email} updateMethod={setEmail} />
          <TextAreaField
            name="message"
            field={message}
            updateMethod={setMessage}
          />

          {state.loading && <div style={{ margin: "60px 0" }}>Loading...</div>}
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

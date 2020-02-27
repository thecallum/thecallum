import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import Validator from "validatorjs"
import Layout from "../../components/layout"

import TextAreaField from "../../components/textAreaField"
import TextInputField from "../../components/textInputField"

import LoadingIcon from "../../components/loadingIcon"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const sendRequest = ({ message }) => {
  const FETCH_TIMEOUT = 10000
  let didTimeout = false

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      didTimeout = true
      reject(new Error("Request timed out"))
    }, FETCH_TIMEOUT)

    fetch("https://asdasdsadasdas.adasd", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...message }),
    })
      .then(response => {
        clearTimeout(timeout)
        if (didTimeout) return
        if (response.status === 404) reject(response)
        resolve(response)
      })
      .catch(error => {
        if (didTimeout) return
        console.log({ error })

        reject(error)
      })
  })
}

export default () => {
  const [requestError, setRequestError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()

    if (loading || !validateForm()) return

    setRequestError(null)
    setLoading(true)

    sendRequest({ ...values })
      .then(response => {
        setTimeout(() => {
          setLoading(false)
          navigate("/contact/success/")
        }, 1000)
      })
      .catch(() => {
        console.log("error sending request")
        setRequestError("Unknown error! Try again.")
        setLoading(false)
      })
  }

  const updateField = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    let data = {
      name: values.name,
      email: values.email,
      message: values.message,
    }

    let rules = {
      name: "required",
      email: "required|email",
      message: "required|max:2000",
    }

    let validation = new Validator(data, rules)

    const valid = validation.passes()
    setErrors({ ...validation.errors.errors })

    return valid
  }

  return (
    <Layout>
      <div className="container">
        <h1>Contact</h1>

        <form onSubmit={handleSubmit} className="form">
          <TextInputField
            name="name"
            field={values.name}
            error={errors.name}
            update={updateField}
            loading={loading}
          />
          <TextInputField
            name="email"
            field={values.email}
            error={errors.email}
            update={updateField}
            disabled={loading}
          />
          <TextAreaField
            name="message"
            field={values.message}
            error={errors.message}
            update={updateField}
            disabled={loading}
          />
          {requestError && <p className="form-error">{requestError}</p>}

          <div className="contact-control">
            <button
              className="button contact-control-button"
              type="submit"
              disabled={loading}
            >
              Submit
            </button>

            {loading && <LoadingIcon />}
          </div>
        </form>
      </div>
    </Layout>
  )
}

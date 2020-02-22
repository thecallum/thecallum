import React from "react"
import Layout from "../components/layout"

export default () => {
  const handleSubmit = e => {
    e.preventDefault()

    alert("submit")
  }

  return (
    <Layout>
      <div className="container">
        <h1>Contact</h1>

        <form onSubmit={handleSubmit}>
          <InputField label="Name" />
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" className="input-text" />
          <label htmlFor="">Message</label>
          <textarea name="" id="" className="input-textarea"></textarea>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

const InputField = ({ label }) => (
  <div className="input-group">
    <label>{label}</label>
    <input type="text" className="input-text" />
  </div>
)

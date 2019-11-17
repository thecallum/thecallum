import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class MyGatsbyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      FNAME: "",
      loading: false,
      success: false,
      error: null,
    }
  }

  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  _handleSubmit = e => {
    const { FNAME, email } = this.state

    this.setState({ error: null })

    e.preventDefault()

    this.setState({ loading: true })

    addToMailchimp(email, { FNAME }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        console.log(data)

        if (data.result === "error") {
          this.setState({ error: data.msg })
        } else {
          this.setState({ success: true })
        }
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    if (this.state.success) return <p>Thanks for subscribing</p>

    return (
      <>
        <p>Subsribe the new Posts</p>

        <form onSubmit={this._handleSubmit}>
          <div>
            <label>
              name
              <input
                type="text"
                value={this.state.FNAME}
                name="FNAME"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Email
              <input
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <input type="submit" value="submit" disabled={this.state.loading} />

          {this.state.loading && <p>Loading...</p>}

          {this.state.error !== null && (
            <p style={{ color: "red" }}>{this.state.error}</p>
          )}
        </form>
      </>
    )
  }
}

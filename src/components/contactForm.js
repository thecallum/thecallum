import React from "react"

export default () => {
  return (
    <form
      data-netlify="true"
      data-netlify-honypot="bot-field"
      name="contact"
      method="post"
      action="/success"
    >
      <div>
        <label>
          Name
          <input type="text" name="name" />
        </label>
      </div>

      <div>
        <label>
          Email
          <input type="text" name="email" />
        </label>
      </div>

      <div>
        <label>
          Message
          <textarea name="message"></textarea>
        </label>
      </div>

      <button type="submit">Send</button>
    </form>
  )
}

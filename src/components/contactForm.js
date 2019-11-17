import React from "react"

export default () => {
  return (
    <form data-netlify="true" name="contact" method="POST">
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

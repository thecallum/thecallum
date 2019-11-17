import React from "react"

export default () => {
  return (
    <form 
    data-netlify="true" 
    data-netlift-honypot="bot-field"
    name="contact" 
    method="POST"
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

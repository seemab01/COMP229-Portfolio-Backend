// Contact page: my contact info and a message form
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  // One state variable for each input in the form
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  // Runs when the user clicks the Send button
  function handleSubmit(event) {
    event.preventDefault() // stops the page from reloading

    // For now we just print the form data (no server yet)
    console.log('Form data:', firstName, lastName, contactNumber, emailAddress, message)

    // Go back to the Home page and send the first name with us
    navigate('/', { state: { firstName: firstName } })
  }

  return (
    <div className="page">
      <h1>Contact Me</h1>

      <div className="contact">
        <div className="panel">
          <h2>My Details</h2>
          <p><b>Email:</b> seemabqureshi1991@gmail.com</p>
          <p><b>Location:</b> Toronto, Ontario</p>
        </div>

        <form className="panel" onSubmit={handleSubmit}>
          <h2>Send me a message</h2>

          <label>First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

          <label>Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

          <label>Contact Number</label>
          <input type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />

          <label>Email Address</label>
          <input type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />

          <label>Message</label>
          <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required />

          <button type="submit" className="button">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

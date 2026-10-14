// Home page: welcome message, mission statement and buttons to other pages
import { Link, useLocation } from 'react-router-dom'

function Home() {
  // After the contact form is submitted we come back here with the person's name
  const location = useLocation()
  let thankYouMessage = ''
  if (location.state) {
    thankYouMessage = 'Thank you ' + location.state.firstName + ', your message was sent!'
  }

  return (
    <div className="page home">
      {thankYouMessage && <p className="thank-you">{thankYouMessage}</p>}

      <h1>Welcome to my portfolio!</h1>
      <h2>Hi, I am Seemab Qureshi</h2>
      <p>I am a Software Engineering student who loves building websites.</p>

      <div className="mission">
        <h3>My Mission</h3>
        <p>
          My mission is to become a skilled software engineer who builds clean,
          useful and easy to use applications, and to keep learning every day.
        </p>
      </div>

      <Link to="/about" className="button">About Me</Link>
      <Link to="/projects" className="button">See My Projects</Link>
    </div>
  )
}

export default Home

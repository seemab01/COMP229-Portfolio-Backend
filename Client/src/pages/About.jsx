// About page: my name, photo, short paragraph and resume link
function About() {
  return (
    <div className="page">
      <h1>About Me</h1>

      <div className="about">
        <img src="/images/profile.jpg" alt="Seemab Qureshi" className="profile-photo" />

        <div className="about-text">
          <h2>Seemab Qureshi</h2>
          <h4>Software Engineering Student</h4>
          <p>
            I am a Software Engineering student. I am learning web development
            with HTML, CSS, JavaScript and React, and I enjoy solving problems
            with code. I like working in a team and I am always looking for new
            things to learn.
          </p>
          <a href="/resume.pdf" target="_blank" className="button">
            View my Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

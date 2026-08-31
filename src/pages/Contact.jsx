import { useState } from 'react'
import Navbar from '../components/Navbar'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all the required fields.')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    setSuccess(
      `Thank you, ${name}! Your message has been sent successfully.`
    )

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <Navbar />

<main>
  <h1 style={{ color: 'red', padding: '50px' }}>
    CONTACT TEST
  </h1>
        {/* Page Header */}
        <section className="py-5 bg-light">
          <div className="container text-center">

            <span className="text-danger fw-semibold">
              CONTACT US
            </span>

            <h1 className="display-5 fw-bold text-dark mt-2">
              We'd Love to Hear From You
            </h1>

            <p className="lead text-secondary mt-3">
              Have a question, idea, or would like to know more about
              HopeRise Foundation? Send us a message.
            </p>

          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5">
          <div className="container">

            <div className="row justify-content-center">

              <div className="col-lg-8">

                <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">

                  <h2 className="fw-bold text-dark text-center">
                    Send Us a Message
                  </h2>

                  <p className="text-secondary text-center mb-4">
                    Fill out the form below and we will get back to you.
                  </p>

                  {/* Error Message */}
                  {error && (
                    <div className="alert alert-danger">
                      <i className="bi bi-exclamation-circle-fill me-2"></i>
                      {error}
                    </div>
                  )}

                  {/* Success Message */}
                  {success && (
                    <div className="alert alert-success">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      {success}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="mb-3">

                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />

                    </div>

                    {/* Email */}
                    <div className="mb-3">

                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                    </div>

                    {/* Message */}
                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Message
                      </label>

                      <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>

                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-danger w-100 py-3 fw-semibold rounded-pill"
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Send Message
                    </button>

                  </form>

                </div>

              </div>

            </div>

          </div>
        </section>
{/* Contact Information */}
<section className="py-5 bg-light">
  <div className="container">

    <div className="text-center mb-5">

      <span className="text-danger fw-semibold">
        GET IN TOUCH
      </span>

      <h2 className="fw-bold text-dark mt-2">
        Contact Information
      </h2>

      <p className="text-secondary">
        Reach out to us through any of the following ways.
      </p>

    </div>

    <div className="row g-4">

{/* Email */}
<div className="col-12 col-md-6 col-lg-3">
  <a
    href="mailto:contact@hoperise.org"
    className="text-decoration-none"
  >
    <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

      <i className="bi bi-envelope-fill text-danger display-5"></i>

      <h5 className="fw-bold text-dark mt-3">
        Email Us
      </h5>

      <p className="text-secondary mb-0">
        contact@hoperise.org
      </p>

    </div>
  </a>
</div>


{/* Phone */}
<div className="col-12 col-md-6 col-lg-3">
  <a
    href="tel:+919876543210"
    className="text-decoration-none"
  >
    <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

      <i className="bi bi-telephone-fill text-danger display-5"></i>

      <h5 className="fw-bold text-dark mt-3">
        Call Us
      </h5>

      <p className="text-secondary mb-0">
        +91 98765 43210
      </p>

    </div>
  </a>
</div>

{/* Location */}
<div className="col-12 col-md-6 col-lg-3">
  <a
    href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra%2C%20India"
    target="_blank"
    rel="noopener noreferrer"
    className="text-decoration-none"
  >
    <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

      <i className="bi bi-geo-alt-fill text-danger display-5"></i>

      <h5 className="fw-bold text-dark mt-3">
        Our Location
      </h5>

      <p className="text-secondary mb-0">
        Pune, Maharashtra, India
      </p>

    </div>
  </a>
</div>


      {/* Working Hours */}
<div className="col-12 col-md-6 col-lg-3">
  <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

    <i className="bi bi-clock-fill text-danger display-5"></i>

    <h5 className="fw-bold text-dark mt-3">
      Working Hours
    </h5>

    <p className="text-secondary mb-0">
      Mon – Fri<br />
      9:00 AM – 5:00 PM
    </p>

  </div>
</div>

    </div>

  </div>
</section>
      </main>
    </div>
  )
}

export default Contact
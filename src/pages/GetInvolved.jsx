import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function GetInvolved() {

  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    consent: false
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)


  const handleChange = (event) => {

    const { name, value, type, checked } = event.target

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })

  }


  const validateForm = () => {

    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select an area of interest.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us why you want to volunteer.'
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm your consent.'
    }

    return newErrors
  }


  const handleSubmit = (event) => {

    event.preventDefault()

    const validationErrors = validateForm()

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {

      setSubmitted(true)

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        consent: false
      })

    }

  }


  const handleCloseForm = () => {
    setShowForm(false)
    setSubmitted(false)
    setErrors({})
  }


  return (
    <div>

      <Navbar />

      <main>

        {/* Page Header */}
        <section className="py-5 bg-light">

          <div className="container text-center">

            <span className="text-danger fw-semibold">
              GET INVOLVED
            </span>

            <h1 className="display-5 fw-bold text-dark mt-2">
              Be Part of the Change
            </h1>

            <p className="lead text-secondary mt-3">
              There are many ways you can support HopeRise Foundation
              and help us create a better future for communities.
            </p>

          </div>

        </section>


        {/* Ways to Get Involved */}
        <section className="py-5">

          <div className="container">

            <div className="row g-4">

              {/* Volunteer */}
              <div className="col-lg-4">

                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-people-fill text-danger display-4"></i>

                  <h3 className="fw-bold text-dark mt-4">
                    Volunteer
                  </h3>

                  <p className="text-secondary">
                    Share your time, skills, and energy to support
                    meaningful programs and make a direct difference
                    in people's lives.
                  </p>

                  <button
                    onClick={() => {
                      setShowForm(true)
                      setSubmitted(false)
                    }}
                    className="btn btn-outline-danger mt-auto"
                  >
                    Become a Volunteer
                  </button>

                </div>

              </div>


              {/* Support */}
              <div className="col-lg-4">

                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-heart-fill text-danger display-4"></i>

                  <h3 className="fw-bold text-dark mt-4">
                    Support a Campaign
                  </h3>

                  <p className="text-secondary">
                    Contribute to our campaigns and help provide
                    education, resources, and opportunities to
                    communities in need.
                  </p>

                  <Link
                    to="/donate"
                    className="btn btn-danger mt-auto"
                  >
                    Support a Campaign
                  </Link>

                </div>

              </div>


              {/* Awareness */}
              <div className="col-lg-4">

                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-megaphone-fill text-danger display-4"></i>

                  <h3 className="fw-bold text-dark mt-4">
                    Spread Awareness
                  </h3>

                  <p className="text-secondary">
                    Share our mission with your friends, family,
                    and community to help more people become part
                    of positive change.
                  </p>

                  <button
                    onClick={() =>
                      alert(
                        'Thank you for helping spread awareness about HopeRise Foundation!'
                      )
                    }
                    className="btn btn-outline-danger mt-auto"
                  >
                    Share Our Mission
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Volunteer Form */}
        {showForm && (

          <section className="py-5 bg-light">

            <div className="container">

              <div className="row justify-content-center">

                <div className="col-lg-8">

                  <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">

                    {!submitted ? (

                      <>
                        <div className="text-center mb-4">

                          <span className="text-danger fw-semibold">
                            VOLUNTEER APPLICATION
                          </span>

                          <h2 className="fw-bold text-dark mt-2">
                            Join HopeRise Foundation
                          </h2>

                          <p className="text-secondary">
                            Tell us a little about yourself and how
                            you would like to contribute.
                          </p>

                        </div>


                        <form onSubmit={handleSubmit}>

                          {/* Name */}
                          <div className="row g-3">

                            <div className="col-md-6">

                              <label className="form-label fw-semibold">
                                First Name
                              </label>

                              <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`form-control ${
                                  errors.firstName
                                    ? 'is-invalid'
                                    : ''
                                }`}
                                placeholder="Enter first name"
                              />

                              {errors.firstName && (
                                <div className="invalid-feedback">
                                  {errors.firstName}
                                </div>
                              )}

                            </div>


                            <div className="col-md-6">

                              <label className="form-label fw-semibold">
                                Last Name
                              </label>

                              <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`form-control ${
                                  errors.lastName
                                    ? 'is-invalid'
                                    : ''
                                }`}
                                placeholder="Enter last name"
                              />

                              {errors.lastName && (
                                <div className="invalid-feedback">
                                  {errors.lastName}
                                </div>
                              )}

                            </div>


                            {/* Email */}
                            <div className="col-md-6">

                              <label className="form-label fw-semibold">
                                Email Address
                              </label>

                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`form-control ${
                                  errors.email
                                    ? 'is-invalid'
                                    : ''
                                }`}
                                placeholder="example@email.com"
                              />

                              {errors.email && (
                                <div className="invalid-feedback">
                                  {errors.email}
                                </div>
                              )}

                            </div>


                            {/* Phone */}
                            <div className="col-md-6">

                              <label className="form-label fw-semibold">
                                Phone Number
                              </label>

                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`form-control ${
                                  errors.phone
                                    ? 'is-invalid'
                                    : ''
                                }`}
                                placeholder="Enter phone number"
                              />

                              {errors.phone && (
                                <div className="invalid-feedback">
                                  {errors.phone}
                                </div>
                              )}

                            </div>


                            {/* Interest */}
                            <div className="col-12">

                              <label className="form-label fw-semibold">
                                Area of Interest
                              </label>

                              <select
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className={`form-select ${
                                  errors.interest
                                    ? 'is-invalid'
                                    : ''
                                }`}
                              >

                                <option value="">
                                  Select an area
                                </option>

                                <option value="Education">
                                  Education
                                </option>

                                <option value="Community Support">
                                  Community Support
                                </option>

                                <option value="Women Empowerment">
                                  Women Empowerment
                                </option>

                                <option value="Events">
                                  Events & Awareness
                                </option>

                              </select>

                              {errors.interest && (
                                <div className="invalid-feedback">
                                  {errors.interest}
                                </div>
                              )}

                            </div>


                            {/* Message */}
                            <div className="col-12">

                              <label className="form-label fw-semibold">
                                Why do you want to volunteer?
                              </label>

                              <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className={`form-control ${
                                  errors.message
                                    ? 'is-invalid'
                                    : ''
                                }`}
                                placeholder="Tell us about your interests and skills..."
                              ></textarea>

                              {errors.message && (
                                <div className="invalid-feedback">
                                  {errors.message}
                                </div>
                              )}

                            </div>


                            {/* Consent */}
                            <div className="col-12">

                              <div className="form-check">

                                <input
                                  type="checkbox"
                                  name="consent"
                                  checked={formData.consent}
                                  onChange={handleChange}
                                  className={`form-check-input ${
                                    errors.consent
                                      ? 'is-invalid'
                                      : ''
                                  }`}
                                  id="consent"
                                />

                                <label
                                  className="form-check-label text-secondary"
                                  htmlFor="consent"
                                >
                                  I agree to be contacted regarding
                                  volunteer opportunities.
                                </label>

                                {errors.consent && (
                                  <div className="invalid-feedback">
                                    {errors.consent}
                                  </div>
                                )}

                              </div>

                            </div>


                            {/* Buttons */}
                            <div className="col-12 mt-4">

                              <button
                                type="submit"
                                className="btn btn-danger px-4 rounded-pill me-2"
                              >
                                <i className="bi bi-send-fill me-2"></i>
                                Submit Application
                              </button>

                              <button
                                type="button"
                                onClick={handleCloseForm}
                                className="btn btn-outline-secondary px-4 rounded-pill"
                              >
                                Cancel
                              </button>

                            </div>

                          </div>

                        </form>
                      </>

                    ) : (

                      /* Success */
                      <div className="text-center py-4">

                        <i className="bi bi-check-circle-fill text-success display-1"></i>

                        <h2 className="fw-bold text-dark mt-4">
                          Application Submitted!
                        </h2>

                        <p className="text-secondary mt-3">
                          Thank you for your interest in volunteering
                          with HopeRise Foundation. Your application
                          has been received successfully.
                        </p>

                        <button
                          onClick={handleCloseForm}
                          className="btn btn-danger rounded-pill px-4 mt-3"
                        >
                          Done
                        </button>

                      </div>

                    )}

                  </div>

                </div>

              </div>

            </div>

          </section>

        )}


        {/* Final CTA */}
        <section className="py-5 bg-danger text-white">

          <div className="container text-center">

            <h2 className="fw-bold">
              Ready to Make a Difference?
            </h2>

            <p className="lead mt-3">
              Every contribution of time, skills, and support can
              help create a better future.
            </p>

            <Link
              to="/donate"
              className="btn btn-light text-danger fw-semibold px-4 py-2 rounded-pill"
            >
              Support Our Mission
            </Link>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default GetInvolved
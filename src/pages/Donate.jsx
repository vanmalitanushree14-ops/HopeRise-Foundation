import { useState } from 'react'
import Navbar from '../components/Navbar'

function Donate() {
const [amount, setAmount] = useState('')
const [success, setSuccess] = useState('')
const [donated, setDonated] = useState(false)

  const handleAmountClick = (value) => {
    setAmount(value)
  }

 const handleDonate = () => {
  setSuccess('')

  if (!amount || Number(amount) <= 0) {
    setSuccess('Please select or enter a valid donation amount.')
    return
  }

  setSuccess(
    `Thank you for your generous support of ₹${amount}! Your contribution can help create meaningful change.`
  )
}

  return (
    <div>
      <Navbar />

      <main>

        {/* Page Header */}
        <section className="py-5 bg-light">
          <div className="container text-center">

            <span className="text-danger fw-semibold">
              DONATE
            </span>

            <h1 className="display-5 fw-bold text-dark mt-2">
              Your Support Can Change Lives
            </h1>

            <p className="lead text-secondary mt-3">
              Every contribution helps HopeRise Foundation continue
              creating opportunities and building stronger communities.
            </p>

          </div>
        </section>


        {/* Donation Options */}
        <section className="py-5">
          <div className="container">

            <div className="row justify-content-center">

              <div className="col-lg-10">

                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                  <div className="row g-0">

                    {/* Left Section */}
                    <div className="col-md-5 bg-danger text-white p-5">

                      <h2 className="fw-bold">
                        Make a Difference Today
                      </h2>

                      <p className="mt-3">
                        Your donation can help support education,
                        community development, and empowerment programs.
                      </p>

                      <hr />

                      <div className="mt-4">

                        <p className="mb-3">
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Support education programs
                        </p>

                        <p className="mb-3">
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Help vulnerable communities
                        </p>

                        <p className="mb-0">
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Empower individuals and families
                        </p>

                      </div>

                    </div>


                    {/* Right Section */}
                    <div className="col-md-7 p-5">

                      <h3 className="fw-bold text-dark mb-4">
                        Choose Your Support
                      </h3>

                      <p className="text-secondary">
                        Select a donation amount and help us continue
                        our mission.
                      </p>


                      {/* Donation Buttons */}
                      <div className="row g-3 mt-3">

                        <div className="col-6">
                          <button
                            onClick={() => handleAmountClick(500)}
                            className={`btn w-100 py-3 fw-semibold ${
                              amount == 500
                                ? 'btn-danger'
                                : 'btn-outline-danger'
                            }`}
                          >
                            ₹500
                          </button>
                        </div>

                        <div className="col-6">
                          <button
                            onClick={() => handleAmountClick(1000)}
                            className={`btn w-100 py-3 fw-semibold ${
                              amount == 1000
                                ? 'btn-danger'
                                : 'btn-outline-danger'
                            }`}
                          >
                            ₹1,000
                          </button>
                        </div>

                        <div className="col-6">
                          <button
                            onClick={() => handleAmountClick(2500)}
                            className={`btn w-100 py-3 fw-semibold ${
                              amount == 2500
                                ? 'btn-danger'
                                : 'btn-outline-danger'
                            }`}
                          >
                            ₹2,500
                          </button>
                        </div>

                        <div className="col-6">
                          <button
                            onClick={() => handleAmountClick(5000)}
                            className={`btn w-100 py-3 fw-semibold ${
                              amount == 5000
                                ? 'btn-danger'
                                : 'btn-outline-danger'
                            }`}
                          >
                            ₹5,000
                          </button>
                        </div>

                      </div>


                      {/* Custom Amount */}
                      <div className="mt-4">

                        <label className="form-label fw-semibold">
                          Custom Amount
                        </label>

                        <div className="input-group">

                          <span className="input-group-text">
                            ₹
                          </span>

                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />

                        </div>

                      </div>


                      {/* Donate Button */}
                      <button
  onClick={handleDonate}
  className="btn btn-danger w-100 mt-4 py-3 fw-semibold rounded-pill"
>
  <i className="bi bi-heart-fill me-2"></i>

  {amount
    ? `Continue with ₹${amount}`
    : 'Donate Now'}
</button>


                      <p className="text-secondary text-center small mt-3 mb-0">
                        <i className="bi bi-shield-check me-1"></i>
                        This is a demonstration donation interface.
                        No real payment is processed.
                      </p>
{donated && (
  <div className="alert alert-success text-center mt-4 rounded-4">

    <i className="bi bi-check-circle-fill me-2"></i>

    <strong>Thank you!</strong>

    <p className="mb-0 mt-2">
      Your donation of ₹{amount} has been recorded
      as a demonstration.
    </p>

    <small className="text-secondary">
      No real payment has been processed.
    </small>

    <div className="mt-3">

      <button
        onClick={() => {
          setDonated(false)
          setAmount('')
        }}
        className="btn btn-outline-success btn-sm rounded-pill px-3"
      >
        Make Another Donation
      </button>

    </div>

  </div>
)}
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  )
}

export default Donate
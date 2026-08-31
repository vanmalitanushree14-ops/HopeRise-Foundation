import { useState } from 'react'

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

import '../App.css'

function Home() {
const [raisedAmount, setRaisedAmount] = useState(75000)
const [supporters, setSupporters] = useState(248)

const goalAmount = 100000
const progress = Math.min(
  (raisedAmount / goalAmount) * 100,
  100
)
  return (
    <div>
            <Navbar />

      <main>

        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center min-vh-75">

              <div
  className="col-lg-7"
  data-aos="fade-right"
>

                <span className="badge bg-danger-subtle text-danger mb-3 px-3 py-2">
                  Together, We Can Make a Difference
                </span>

                <h1 className="display-3 fw-bold text-dark">
                  Creating Hope.
                  <br />
                  <span className="text-danger">
                    Changing Lives.
                  </span>
                </h1>

                <p className="lead text-secondary mt-4">
                  HopeRise Foundation works with communities to create
                  meaningful opportunities, support vulnerable people, and
                  build a better future for everyone.
                </p>

                <div className="mt-4">

  <Link
    to="/donate"
    className="btn btn-danger btn-lg me-2 px-4"
  >
    <i className="bi bi-heart-fill me-2"></i>
    Donate Now
  </Link>

  <Link
    to="/about"
    className="btn btn-outline-dark btn-lg px-4"
  >
    Learn More
  </Link>

</div>
              </div>

<div
  className="col-lg-5 text-center mt-5 mt-lg-0"
  data-aos="fade-left"
>
                <div className="hero-icon">
                  <i className="bi bi-people-fill"></i>
                </div>

              </div>

            </div>
          </div>
        </section>



        <section className="py-5 bg-light">

          <div className="container">

<div
  className="text-center mb-5"
  data-aos="fade-up"
>
              <span className="text-danger fw-semibold">
                OUR IMPACT
              </span>

              <h2 className="fw-bold mt-2 text-dark">
                Together, We Create Change
              </h2>

              <p className="text-secondary">
                Every contribution helps us make a lasting difference.
              </p>

            </div>


            <div className="row g-4 text-center">

              <div className="col-md-3">
<div
  className="impact-card p-4 bg-white rounded-4 shadow-sm"
  data-aos="fade-up"
>
                  <i className="bi bi-mortarboard-fill text-danger fs-1"></i>

                  <h3 className="fw-bold mt-3">
                    10K+
                  </h3>

                  <p className="text-secondary mb-0">
                    Children Supported
                  </p>

                </div>
              </div>


              <div className="col-md-3">
<div
  className="impact-card p-4 bg-white rounded-4 shadow-sm"
  data-aos="fade-up"
  data-aos-delay="100"
>
                  <i className="bi bi-house-heart-fill text-danger fs-1"></i>

                  <h3 className="fw-bold mt-3">
                    5K+
                  </h3>

                  <p className="text-secondary mb-0">
                    Families Reached
                  </p>

                </div>
              </div>


              <div className="col-md-3">
<div
  className="impact-card p-4 bg-white rounded-4 shadow-sm"
  data-aos="fade-up"
  data-aos-delay="200"
>
                  <i className="bi bi-person-hearts text-danger fs-1"></i>

                  <h3 className="fw-bold mt-3">
                    2.5K+
                  </h3>

                  <p className="text-secondary mb-0">
                    Women Empowered
                  </p>

                </div>
              </div>


              <div className="col-md-3">
<div
  className="impact-card p-4 bg-white rounded-4 shadow-sm"
  data-aos="fade-up"
  data-aos-delay="300"
>
                  <i className="bi bi-globe2 text-danger fs-1"></i>

                  <h3 className="fw-bold mt-3">
                    50+
                  </h3>

                  <p className="text-secondary mb-0">
                    Projects Completed
                  </p>

                </div>
              </div>

            </div>

          </div>

        </section>

<section className="py-5">
  <div className="container">

    <div className="text-center mb-5">

      <span className="text-danger fw-semibold">
        OUR WORK
      </span>

      <h2 className="fw-bold text-dark mt-2">
        Creating Change Through Action
      </h2>

      <p className="text-secondary">
        We focus on initiatives that create meaningful and lasting
        opportunities for communities.
      </p>

    </div>

    <div className="row g-4">

<div className="col-md-4">
  <div
    className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center"
    data-aos="fade-up"
  >
          <i className="bi bi-mortarboard-fill text-danger display-5"></i>

          <h4 className="fw-bold text-dark mt-4">
            Education
          </h4>

          <p className="text-secondary">
            Supporting children and young people through education,
            learning opportunities, and skill development.
          </p>

          <Link
            to="/our-work"
            className="btn btn-outline-danger mt-auto"
          >
            Learn More
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>
      </div>


<div className="col-md-4">
  <div
    className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center"
    data-aos="fade-up"
    data-aos-delay="150"
  >
          <i className="bi bi-heart-pulse-fill text-danger display-5"></i>

          <h4 className="fw-bold text-dark mt-4">
            Community Support
          </h4>

          <p className="text-secondary">
            Helping vulnerable families and communities access
            support and essential resources.
          </p>

          <Link
            to="/our-work"
            className="btn btn-outline-danger mt-auto"
          >
            Learn More
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>
      </div>


      <div className="col-md-4">
        <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

          <i className="bi bi-person-hearts text-danger display-5"></i>

          <h4 className="fw-bold text-dark mt-4">
            Women Empowerment
          </h4>

          <p className="text-secondary">
            Creating opportunities that help women develop skills,
            confidence, and economic independence.
          </p>

          <Link
            to="/our-work"
            className="btn btn-outline-danger mt-auto"
          >
            Learn More
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </div>
      </div>

    </div>

  </div>
</section>

{/* Featured Campaign */}
<section className="py-5 bg-light">
  <div className="container">

    <div className="row align-items-center g-5">

      {/* Campaign Image */}
      <div
        className="col-lg-6"
        data-aos="fade-right"
      >
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
          alt="Children receiving educational support"
          className="img-fluid rounded-4 shadow-sm"
        />
      </div>

      {/* Campaign Content */}
      <div
        className="col-lg-6"
        data-aos="fade-left"
      >

        <span className="text-danger fw-semibold">
          FEATURED CAMPAIGN
        </span>

        <h2 className="fw-bold text-dark mt-2">
          Every Child Deserves a Chance
        </h2>

        <p className="text-secondary mt-3">
          Our education campaign helps children access learning
          resources, school supplies, and opportunities that can
          help them build a brighter future.
        </p>

        <div className="mt-4">

<div className="mb-3">

  <div className="d-flex justify-content-between mb-1">
    <span className="fw-semibold">
      Campaign Progress
    </span>

    <span className="text-danger fw-semibold">
      75%
    </span>
  </div>

  <div
    className="progress"
    style={{ height: '10px' }}
  >
    <div
      className="progress-bar bg-danger"
      style={{ width: '75%' }}
    ></div>
  </div>

  <div className="d-flex justify-content-between mt-2">
    <small className="text-secondary">
      ₹75,000 raised
    </small>

    <small className="text-secondary">
      Goal: ₹1,00,000
    </small>
  </div>

</div>
        </div>

        <Link
          to="/donate"
          className="btn btn-danger px-4 py-2 mt-3 rounded-pill"
        >
          <i className="bi bi-heart-fill me-2"></i>
          Support This Campaign
        </Link>

      </div>

    </div>

  </div>
</section>
{/* Featured Campaign */}
<section className="py-5 bg-light">

  <div className="container">

    <div className="row align-items-center g-5">

      {/* Campaign Information */}
      <div className="col-lg-6">

        <span className="text-danger fw-semibold">
          FEATURED CAMPAIGN
        </span>

        <h2 className="fw-bold text-dark mt-2">
          Education for Every Child
        </h2>

        <p className="text-secondary mt-3">
          Help us provide learning resources, school supplies,
          and opportunities to children who need support.
        </p>

        <div className="d-flex justify-content-between mt-4">

          <div>

            <small className="text-secondary">
              Raised
            </small>

            <h4 className="fw-bold text-dark">
              ₹{raisedAmount.toLocaleString('en-IN')}
            </h4>

          </div>

          <div className="text-end">

            <small className="text-secondary">
              Goal
            </small>

            <h4 className="fw-bold text-dark">
              ₹{goalAmount.toLocaleString('en-IN')}
            </h4>

          </div>

        </div>


        {/* Progress Bar */}
        <div
          className="progress mt-3"
          style={{ height: '14px' }}
        >

          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
          </div>

        </div>


        <div className="d-flex justify-content-between mt-2">

          <span className="text-danger fw-semibold">
            {Math.round(progress)}% funded
          </span>

          <span className="text-secondary">
            ₹{(goalAmount - raisedAmount).toLocaleString('en-IN')} remaining
          </span>

        </div>
<p className="text-secondary mt-3 mb-0">
  <i className="bi bi-people-fill text-danger me-2"></i>
  <strong>{supporters}</strong> people have supported this campaign.
</p>

        {/* Support Buttons */}
        <div className="mt-4">

          <Link
            to="/donate"
            className="btn btn-danger rounded-pill px-4 py-2 me-2"
          >
            <i className="bi bi-heart-fill me-2"></i>
            Support Campaign
          </Link>

          <button
            onClick={() => {
  if (raisedAmount < goalAmount) {
    setRaisedAmount(
      Math.min(raisedAmount + 500, goalAmount)
    )

    setSupporters(supporters + 1)
  }
}}
            className="btn btn-outline-danger rounded-pill px-4 py-2 mt-2 mt-sm-0"
          >
            <i className="bi bi-plus-circle me-2"></i>
            Add ₹500 Demo
          </button>

        </div>

      </div>


      {/* Campaign Visual */}
      <div className="col-lg-6">

        <div className="bg-white shadow-sm rounded-4 p-5 text-center">

          <i className="bi bi-mortarboard-fill text-danger display-1"></i>

          <h3 className="fw-bold text-dark mt-4">
            Building Brighter Futures
          </h3>

          <p className="text-secondary">
            Education creates opportunities and helps communities
            build a stronger future.
          </p>

          <div className="mt-4">

            <span className="badge bg-danger-subtle text-danger px-3 py-2">
              <i className="bi bi-people-fill me-2"></i>
              Education Initiative
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Call to Action */}
<section className="py-5 bg-danger text-white">
  <div className="container text-center">

    <h2 className="fw-bold">
      Your Support Can Create Real Change
    </h2>

    <p className="lead mt-3">
      Join HopeRise Foundation in building stronger communities,
      creating opportunities, and changing lives.
    </p>

    <div className="mt-4">

      <Link
        to="/get-involved"
        className="btn btn-light text-danger fw-semibold px-4 py-2 me-2 rounded-pill"
      >
        Get Involved
      </Link>

      <Link
        to="/donate"
        className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill"
      >
        <i className="bi bi-heart-fill me-2"></i>
        Donate Now
      </Link>

    </div>

  </div>
</section>

      </main>



    </div>
  )
}

export default Home
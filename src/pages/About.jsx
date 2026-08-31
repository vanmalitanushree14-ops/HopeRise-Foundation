import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


function About() {
  return (
    <div>
      <Navbar />

      <main>

        {/* Page Header */}
        <section className="py-5 bg-light">
          <div className="container text-center">

            <span className="text-danger fw-semibold">
              ABOUT US
            </span>

            <h1 className="display-5 fw-bold text-dark mt-2">
              About HopeRise Foundation
            </h1>

            <p className="lead text-secondary mt-3">
              Building stronger communities and creating opportunities
              for a better tomorrow.
            </p>

          </div>
        </section>


        {/* Our Mission */}
        <section className="py-5">
          <div className="container">

            <div className="row align-items-center g-5">

              <div className="col-lg-6">

                <span className="text-danger fw-semibold">
                  OUR MISSION
                </span>

                <h2 className="fw-bold text-dark mt-2">
                  Creating Opportunities. Building Hope.
                </h2>

                <p className="text-secondary mt-3">
                  HopeRise Foundation works with communities to create
                  meaningful opportunities and support people who need
                  assistance.
                </p>

                <p className="text-secondary">
                  Through education, community development, volunteer
                  programs, and social initiatives, we aim to create
                  positive and lasting change.
                </p>

                <Link
                  to="/our-work"
                  className="btn btn-danger mt-3 px-4"
                >
                  Explore Our Work
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

              </div>


              <div className="col-lg-6">

                <div className="bg-light rounded-4 p-5 text-center shadow-sm">

                  <i className="bi bi-heart-fill text-danger display-1"></i>

                  <h3 className="fw-bold text-dark mt-4">
                    Together We Can Make a Difference
                  </h3>

                  <p className="text-secondary mb-0">
                    Every contribution, volunteer, and act of kindness
                    helps us move closer to our vision of a stronger,
                    more hopeful future.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* Vision */}
        <section className="py-5 bg-light">
          <div className="container">

            <div className="text-center mb-5">

              <span className="text-danger fw-semibold">
                OUR VISION
              </span>

              <h2 className="fw-bold text-dark mt-2">
                A Better Tomorrow for Everyone
              </h2>

              <p className="text-secondary">
                We believe every person deserves the opportunity
                to learn, grow, and build a better future.
              </p>

            </div>


            <div className="row g-4">

              {/* Compassion */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-heart-fill text-danger display-5"></i>

                  <h4 className="fw-bold text-dark mt-3">
                    Compassion
                  </h4>

                  <p className="text-secondary mb-0">
                    We believe in supporting people with kindness,
                    dignity, and understanding.
                  </p>

                </div>
              </div>


              {/* Opportunity */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-lightbulb-fill text-danger display-5"></i>

                  <h4 className="fw-bold text-dark mt-3">
                    Opportunity
                  </h4>

                  <p className="text-secondary mb-0">
                    We work to create opportunities that help
                    individuals and communities grow.
                  </p>

                </div>
              </div>


              {/* Community */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-people-fill text-danger display-5"></i>

                  <h4 className="fw-bold text-dark mt-3">
                    Community
                  </h4>

                  <p className="text-secondary mb-0">
                    We believe lasting change happens when people
                    work together to support one another.
                  </p>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* Call to Action */}
        <section className="py-5 bg-danger text-white">
          <div className="container text-center">

            <h2 className="fw-bold">
              Be Part of Our Journey
            </h2>

            <p className="lead mt-3">
              Join HopeRise Foundation in creating hope and
              building stronger communities.
            </p>

            <Link
              to="/get-involved"
              className="btn btn-light text-danger fw-semibold px-4 py-2 rounded-pill"
            >
              Get Involved
            </Link>

          </div>
        </section>

      </main>
    </div>
  )
}

export default About
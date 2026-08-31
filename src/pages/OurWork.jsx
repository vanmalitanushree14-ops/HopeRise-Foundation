import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function OurWork() {
  return (
    <div>
      <Navbar />

      <main>

        {/* Page Header */}
        <section className="py-5 bg-light">
          <div className="container text-center">

            <span className="text-danger fw-semibold">
              OUR WORK
            </span>

            <h1 className="display-5 fw-bold text-dark mt-2">
              What We Do
            </h1>

            <p className="lead text-secondary mt-3">
              Discover the programs and initiatives through which
              HopeRise Foundation creates positive change.
            </p>

          </div>
        </section>


        {/* Programs */}
        <section className="py-5">
          <div className="container">

            <div className="text-center mb-5">

              <span className="text-danger fw-semibold">
                OUR PROGRAMS
              </span>

              <h2 className="fw-bold text-dark mt-2">
                Creating Opportunities for Everyone
              </h2>

              <p className="text-secondary">
                Our programs focus on education, community support,
                and empowerment.
              </p>

            </div>


            <div className="row g-4">

              {/* Education */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-mortarboard-fill text-danger display-4"></i>

                  <h3 className="fw-bold text-dark mt-4">
                    Education
                  </h3>

                  <p className="text-secondary">
                    We support children and young people through
                    education, learning resources, and skill
                    development opportunities.
                  </p>

                  <div className="mt-auto pt-3">
                    <span className="badge bg-danger-subtle text-danger px-3 py-2">
                      Education Program
                    </span>
                  </div>

                </div>
              </div>


              {/* Community Support */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-house-heart-fill text-danger display-4"></i>

                  <h3 className="fw-bold text-dark mt-4">
                    Community Support
                  </h3>

                  <p className="text-secondary">
                    We help vulnerable families and communities
                    access essential support, resources, and
                    opportunities.
                  </p>

                  <div className="mt-auto pt-3">
                    <span className="badge bg-danger-subtle text-danger px-3 py-2">
                      Community Program
                    </span>
                  </div>

                </div>
              </div>


              {/* Women Empowerment */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 h-100 p-4 text-center">

                  <i className="bi bi-person-hearts text-danger display-4"></i>

                  <h3 className="fw-bold text-dark mt-4">
                    Women Empowerment
                  </h3>

                  <p className="text-secondary">
                    We create opportunities that help women develop
                    skills, confidence, and greater economic
                    independence.
                  </p>

                  <div className="mt-auto pt-3">
                    <span className="badge bg-danger-subtle text-danger px-3 py-2">
                      Empowerment Program
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* How We Create Impact */}
        <section className="py-5 bg-light">
          <div className="container">

            <div className="text-center mb-5">

              <span className="text-danger fw-semibold">
                OUR APPROACH
              </span>

              <h2 className="fw-bold text-dark mt-2">
                How We Create Impact
              </h2>

            </div>


            <div className="row g-4 text-center">

              <div className="col-md-4">
                <div className="p-4">

                  <div className="mb-3">
                    <i className="bi bi-search text-danger display-5"></i>
                  </div>

                  <h4 className="fw-bold">
                    Understand
                  </h4>

                  <p className="text-secondary">
                    We listen to communities and understand their
                    needs before designing our initiatives.
                  </p>

                </div>
              </div>


              <div className="col-md-4">
                <div className="p-4">

                  <div className="mb-3">
                    <i className="bi bi-people-fill text-danger display-5"></i>
                  </div>

                  <h4 className="fw-bold">
                    Collaborate
                  </h4>

                  <p className="text-secondary">
                    We work with volunteers, communities, and
                    supporters to create meaningful solutions.
                  </p>

                </div>
              </div>


              <div className="col-md-4">
                <div className="p-4">

                  <div className="mb-3">
                    <i className="bi bi-graph-up-arrow text-danger display-5"></i>
                  </div>

                  <h4 className="fw-bold">
                    Create Impact
                  </h4>

                  <p className="text-secondary">
                    We focus on sustainable initiatives that can
                    create positive and lasting change.
                  </p>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* Projects CTA */}
        <section className="py-5">
          <div className="container">

            <div className="bg-danger text-white rounded-4 p-5 text-center">

              <h2 className="fw-bold">
                Explore Our Projects
              </h2>

              <p className="lead mt-3">
                See how our programs are transformed into
                meaningful community initiatives.
              </p>

              <Link
                to="/projects"
                className="btn btn-light text-danger fw-semibold px-4 py-2 rounded-pill"
              >
                View Projects
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>

          </div>
        </section>


        {/* Get Involved CTA */}
        <section className="py-5 bg-light">
          <div className="container text-center">

            <h2 className="fw-bold text-dark">
              Want to Help Us Make a Difference?
            </h2>

            <p className="text-secondary mt-3">
              Your time, support, and contribution can help us
              create greater impact.
            </p>

            <Link
              to="/get-involved"
              className="btn btn-danger px-4 py-2 rounded-pill"
            >
              Get Involved
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>

          </div>
        </section>

      </main>
    </div>
  )
}

export default OurWork
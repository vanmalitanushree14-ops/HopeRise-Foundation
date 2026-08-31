import Navbar from '../components/Navbar'

function Blog() {
  return (
    <div>
      <Navbar />

      <main>

        {/* Page Header */}
        <section className="py-5 bg-light">
          <div className="container text-center">

            <span className="text-danger fw-semibold">
              BLOG
            </span>

            <h1 className="display-5 fw-bold text-dark mt-2">
              Stories of Hope & Change
            </h1>

            <p className="lead text-secondary mt-3">
              Read stories, updates, and insights from HopeRise Foundation
              and the communities we work with.
            </p>

          </div>
        </section>


        {/* Blog Posts */}
        <section className="py-5">
          <div className="container">

            <div className="row g-4">

              {/* Blog 1 */}
              <div
                className="col-lg-4"
                data-aos="fade-up"
              >
                <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                    className="card-img-top"
                    alt="Children studying"
                    style={{
                      height: '220px',
                      objectFit: 'cover'
                    }}
                  />

                  <div className="card-body p-4">

                    <span className="badge bg-danger-subtle text-danger mb-3">
                      Education
                    </span>

                    <h4 className="fw-bold text-dark">
                      The Power of Education
                    </h4>

                    <p className="text-secondary">
                      Education can open doors to new opportunities.
                      Discover how access to learning can help children
                      build a brighter future.
                    </p>

                    <small className="text-secondary">
                      August 2026
                    </small>

                  </div>

                </div>
              </div>


              {/* Blog 2 */}
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
                    className="card-img-top"
                    alt="Community volunteers"
                    style={{
                      height: '220px',
                      objectFit: 'cover'
                    }}
                  />

                  <div className="card-body p-4">

                    <span className="badge bg-danger-subtle text-danger mb-3">
                      Community
                    </span>

                    <h4 className="fw-bold text-dark">
                      Stronger Communities Together
                    </h4>

                    <p className="text-secondary">
                      When people come together, communities become
                      stronger. Learn about the importance of community
                      support and participation.
                    </p>

                    <small className="text-secondary">
                      August 2026
                    </small>

                  </div>

                </div>
              </div>


              {/* Blog 3 */}
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=80"
                    className="card-img-top"
                    alt="Women working together"
                    style={{
                      height: '220px',
                      objectFit: 'cover'
                    }}
                  />

                  <div className="card-body p-4">

                    <span className="badge bg-danger-subtle text-danger mb-3">
                      Empowerment
                    </span>

                    <h4 className="fw-bold text-dark">
                      Creating Opportunities for Women
                    </h4>

                    <p className="text-secondary">
                      Skills, confidence, and opportunities can help
                      women build greater independence and participate
                      actively in their communities.
                    </p>

                    <small className="text-secondary">
                      August 2026
                    </small>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* Newsletter Section */}
        <section className="py-5 bg-light">
          <div className="container">

            <div className="row justify-content-center">

              <div className="col-lg-8 text-center">

                <span className="text-danger fw-semibold">
                  STAY CONNECTED
                </span>

                <h2 className="fw-bold text-dark mt-2">
                  Stay Updated With HopeRise
                </h2>

                <p className="text-secondary mt-3">
                  Follow our latest stories, community initiatives,
                  and updates.
                </p>

                <div className="mt-4">

                  <button
                    className="btn btn-danger px-4 py-2 rounded-pill"
                    onClick={() =>
                      alert('Thank you for your interest in HopeRise Foundation!')
                    }
                  >
                    <i className="bi bi-bell-fill me-2"></i>
                    Follow Our Updates
                  </button>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  )
}

export default Blog

import Navbar from '../components/Navbar'

function Media() {
  return (
    <div>
      <Navbar />

      <main>

        {/* Page Header */}
        <section className="py-5 bg-light">
          <div className="container text-center">

            <span className="text-danger fw-semibold">
              MEDIA
            </span>

            <h1 className="display-5 fw-bold text-dark mt-2">
              Stories, Events & Updates
            </h1>

            <p className="lead text-secondary mt-3">
              Explore photos, videos, press releases, and stories
              from HopeRise Foundation.
            </p>

          </div>
        </section>


        {/* Photos & Videos */}
        <section className="py-5">
          <div className="container">

            <div className="text-center mb-5">

              <span className="text-danger fw-semibold">
                PHOTOS & VIDEOS
              </span>

              <h2 className="fw-bold text-dark mt-2">
                Our Work in Action
              </h2>

              <p className="text-secondary">
                Take a look at some moments from our community
                programs and initiatives.
              </p>

            </div>


            <div className="row g-4">

              {/* Image 1 */}
              <div
                className="col-md-4"
                data-aos="fade-up"
              >
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
                    className="img-fluid"
                    alt="Children learning"
                    style={{
                      height: '230px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  <div className="card-body text-center p-4">

                    <h5 className="fw-bold">
                      Education Program
                    </h5>

                    <p className="text-secondary mb-0">
                      Supporting children through education
                      and learning opportunities.
                    </p>

                  </div>

                </div>
              </div>


              {/* Image 2 */}
              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
                    className="img-fluid"
                    alt="Community volunteers"
                    style={{
                      height: '230px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  <div className="card-body text-center p-4">

                    <h5 className="fw-bold">
                      Community Support
                    </h5>

                    <p className="text-secondary mb-0">
                      Volunteers working together to support
                      local communities.
                    </p>

                  </div>

                </div>
              </div>


              {/* Image 3 */}
              <div
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
                    className="img-fluid"
                    alt="Women empowerment"
                    style={{
                      height: '230px',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  <div className="card-body text-center p-4">

                    <h5 className="fw-bold">
                      Women Empowerment
                    </h5>

                    <p className="text-secondary mb-0">
                      Creating opportunities for women to build
                      skills and confidence.
                    </p>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* Press Releases */}
        <section className="py-5 bg-light">
          <div className="container">

            <div className="text-center mb-5">

              <span className="text-danger fw-semibold">
                PRESS RELEASES
              </span>

              <h2 className="fw-bold text-dark mt-2">
                Latest Updates
              </h2>

            </div>


            <div className="row justify-content-center">

              <div className="col-lg-8">

                <div className="card border-0 shadow-sm rounded-4 p-4 mb-3">

                  <div className="d-flex align-items-start">

                    <i className="bi bi-newspaper text-danger fs-2 me-3"></i>

                    <div>

                      <h5 className="fw-bold">
                        HopeRise Foundation Expands Education Program
                      </h5>

                      <p className="text-secondary mb-0">
                        Our latest initiative aims to provide educational
                        resources and learning opportunities to more children.
                      </p>

                    </div>

                  </div>

                </div>


                <div className="card border-0 shadow-sm rounded-4 p-4">

                  <div className="d-flex align-items-start">

                    <i className="bi bi-megaphone-fill text-danger fs-2 me-3"></i>

                    <div>

                      <h5 className="fw-bold">
                        Community Support Initiative Launched
                      </h5>

                      <p className="text-secondary mb-0">
                        HopeRise Foundation continues working with
                        communities to provide essential support and resources.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* Electronic Media */}
        <section className="py-5">
          <div className="container text-center">

            <span className="text-danger fw-semibold">
              ELECTRONIC MEDIA
            </span>

            <h2 className="fw-bold text-dark mt-2">
              Follow Our Stories
            </h2>

            <p className="text-secondary mt-3">
              Stay connected with HopeRise Foundation and learn more
              about our work and community initiatives.
            </p>

            <div className="mt-4">

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-danger me-2"
              >
                <i className="bi bi-youtube me-2"></i>
                Watch Videos
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-danger"
              >
                <i className="bi bi-facebook me-2"></i>
                Follow Us
              </a>

            </div>

          </div>
        </section>

      </main>
    </div>
  )
}

export default Media

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">

        <div className="row g-4">

          <div className="col-lg-4">
            <h4 className="fw-bold">
              <i className="bi bi-heart-fill text-danger me-2"></i>
              HopeRise Foundation
            </h4>

            <p className="text-white-50">
              Creating hope, supporting communities, and building
              a better tomorrow.
            </p>
          </div>

          <div className="col-lg-4">
            <h5 className="fw-bold">Quick Links</h5>

            <div className="d-flex flex-column gap-2">
              <Link to="/" className="text-white-50 text-decoration-none">
                Home
              </Link>

              <Link to="/about" className="text-white-50 text-decoration-none">
                About
              </Link>

              <Link to="/our-work" className="text-white-50 text-decoration-none">
                Our Work
              </Link>

              <Link to="/media"  className="text-white-50 text-decoration-none">Media</Link>

              <Link to="/blog"  className="text-white-50 text-decoration-none">Blog</Link>

              <Link to="/contact" className="text-white-50 text-decoration-none">
                Contact
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <h5 className="fw-bold">Contact</h5>

            <p className="text-white-50 mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              contact@hoperise.org
            </p>

            <p className="text-white-50">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Pune, Maharashtra, India
            </p>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center text-white-50 mb-0">
          © 2026 HopeRise Foundation. All Rights Reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
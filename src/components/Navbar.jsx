import { NavLink, Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-5" to="/">
          <i className="bi bi-heart-fill text-danger me-2"></i>
          HopeRise Foundation
        </Link>


        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                end
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/our-work"
              >
                Our Work
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
<li className="nav-item">
  <Link className="nav-link" to="/media">
    Media
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/blog">
    Blog
  </Link>
</li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/get-involved"
              >
                Get Involved
              </NavLink>
            </li>
          <li className="nav-item">
  <Link className="nav-link" to="/contact">
    Contact
  </Link>
</li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link
                className="btn btn-danger px-4 rounded-pill"
                to="/donate"
              >
                <i className="bi bi-heart-fill me-1"></i>
                Donate
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
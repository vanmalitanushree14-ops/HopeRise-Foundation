import { useState } from 'react'
import Navbar from '../components/Navbar'

function Projects() {

  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = [
    {
      id: 1,
      title: 'Education for Every Child',
      category: 'Education',
      image:
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80',
      description:
        'Supporting children with learning resources, school supplies, and opportunities to build a better future.',
      icon: 'bi-mortarboard-fill'
    },

    {
      id: 2,
      title: 'Stronger Communities',
      category: 'Community',
      image:
        'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
      description:
        'Helping families access essential resources, support services, and opportunities to improve their quality of life.',
      icon: 'bi-house-heart-fill'
    },

    {
      id: 3,
      title: 'Women Empowerment Initiative',
      category: 'Empowerment',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      description:
        'Creating opportunities for women to develop skills, gain confidence, and achieve greater financial independence.',
      icon: 'bi-person-hearts'
    }
  ]


  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        )


  return (
    <div>

      <Navbar />

      <main>

        {/* Page Header */}
        <section className="py-5 bg-light">

          <div className="container text-center">

            <span className="text-danger fw-semibold">
              OUR PROJECTS
            </span>

            <h1 className="display-5 fw-bold text-dark mt-2">
              Creating Change Through Action
            </h1>

            <p className="lead text-secondary mt-3">
              Explore the initiatives through which HopeRise Foundation
              works to support communities and create lasting impact.
            </p>

          </div>

        </section>


        {/* Project Filter */}
        <section className="py-5">

          <div className="container">

            <div className="text-center mb-5">

              <span className="text-danger fw-semibold">
                EXPLORE
              </span>

              <h2 className="fw-bold text-dark mt-2">
                Our Projects
              </h2>

              <p className="text-secondary">
                Explore our initiatives by program category.
              </p>

            </div>


            {/* Filter Buttons */}
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">

              {['All', 'Education', 'Community', 'Empowerment'].map(
                (category) => (

                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={
                      activeCategory === category
                        ? 'btn btn-danger rounded-pill px-4'
                        : 'btn btn-outline-danger rounded-pill px-4'
                    }
                  >
                    {category}
                  </button>

                )
              )}

            </div>


            {/* Projects */}
            <div className="row g-4">

              {filteredProjects.map((project) => (

                <div
                  className="col-lg-4"
                  key={project.id}
                >

                  <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">

                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                      style={{
                        height: '220px',
                        objectFit: 'cover'
                      }}
                    />


                    <div className="card-body p-4 d-flex flex-column">

                      <div className="mb-3">

                        <span className="badge bg-danger-subtle text-danger">

                          <i
                            className={`bi ${project.icon} me-1`}
                          ></i>

                          {project.category}

                        </span>

                      </div>


                      <h4 className="fw-bold text-dark">
                        {project.title}
                      </h4>


                      <p className="text-secondary">
                        {project.description}
                      </p>


                      <div className="mt-auto pt-3">

                        <button
                          className="btn btn-outline-danger rounded-pill"
  onClick={() => setSelectedProject(project)}
>
  View Details
  <i className="bi bi-arrow-right ms-2"></i>
</button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
{/* Project Details Modal */}
{selectedProject && (
  <div
    className="modal fade show d-block"
    tabIndex="-1"
    role="dialog"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
  >

    <div className="modal-dialog modal-lg modal-dialog-centered">

      <div className="modal-content border-0 rounded-4 overflow-hidden">

        {/* Modal Header */}
        <div className="modal-header">

          <h5 className="modal-title fw-bold">
            {selectedProject.title}
          </h5>

          <button
            type="button"
            className="btn-close"
            onClick={() => setSelectedProject(null)}
          ></button>

        </div>


        {/* Modal Body */}
        <div className="modal-body p-4">

          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="img-fluid rounded-4 w-100 mb-4"
            style={{
              height: '300px',
              objectFit: 'cover'
            }}
          />

          <span className="badge bg-danger-subtle text-danger mb-3">
            <i
              className={`bi ${selectedProject.icon} me-1`}
            ></i>

            {selectedProject.category}
          </span>

          <h4 className="fw-bold text-dark mt-2">
            About This Project
          </h4>

          <p className="text-secondary">
            {selectedProject.description}
          </p>

          <div className="row g-3 mt-3">

            <div className="col-md-4">
              <div className="bg-light rounded-4 p-3 text-center">

                <i className="bi bi-people-fill text-danger fs-3"></i>

                <h6 className="fw-bold mt-2 mb-1">
                  Community
                </h6>

                <small className="text-secondary">
                  Local communities
                </small>

              </div>
            </div>


            <div className="col-md-4">
              <div className="bg-light rounded-4 p-3 text-center">

                <i className="bi bi-bullseye text-danger fs-3"></i>

                <h6 className="fw-bold mt-2 mb-1">
                  Goal
                </h6>

                <small className="text-secondary">
                  Sustainable impact
                </small>

              </div>
            </div>


            <div className="col-md-4">
              <div className="bg-light rounded-4 p-3 text-center">

                <i className="bi bi-heart-fill text-danger fs-3"></i>

                <h6 className="fw-bold mt-2 mb-1">
                  Impact
                </h6>

                <small className="text-secondary">
                  Positive change
                </small>

              </div>
            </div>

          </div>

        </div>


        {/* Modal Footer */}
        <div className="modal-footer">

          <button
            type="button"
            className="btn btn-secondary rounded-pill px-4"
            onClick={() => setSelectedProject(null)}
          >
            Close
          </button>

        </div>

      </div>

    </div>

  </div>
)}

        {/* Impact Section */}
        <section className="py-5 bg-danger text-white">

          <div className="container text-center">

            <h2 className="fw-bold">
              Together, We Can Create Lasting Change
            </h2>

            <p className="lead mt-3 mb-0">
              Every project represents our commitment to building
              stronger, more inclusive, and more hopeful communities.
            </p>

          </div>

        </section>

      </main>


    </div>
  )
}

export default Projects
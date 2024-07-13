const Footer = () => {
  return (
    <footer className="footer mt-5">
      <section className="py-4 py-md-5 py-xl-8 border-top border-light">
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0 justify-content-xl-between">
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center align-items-center">
              <div className="widget">
                <h1>Glenrich</h1>
                <h4>International</h4>
                <h5>School</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2">
              <div className="widget">
                <h4 className="widget-title mb-4">About Glenrich</h4>
                <p>Mission</p>
                <p>Vision & Philosophy</p>
                <p>Glenrich Values</p>
                <h4 className="widget-title mb-4">Academics</h4>
                <p>Curriculum Overview</p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2">
              <div className="widget">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none text-white">
                      Sports
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none text-white">
                      Performing Arts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none text-white">
                      Special Program
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className=" text-decoration-none text-white">
                      Admission
                    </a>
                  </li>
                  <li className="mb-0">
                    <a href="#!" className=" text-decoration-none text-white">
                      Career
                    </a>
                  </li>
                  <li className="mb-0">
                    <a href="#!" className=" text-decoration-none text-white">
                      News & Facts
                    </a>
                  </li>
                  <li className="mb-0">
                    <a href="#!" className=" text-decoration-none text-white">
                      School Policies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-xl-4">
              <div className="widget">
                <h4 className="widget-title mb-4">Contact Us</h4>
                <p className="mb-4">Contact Number</p>
                <p className="mb-4">+880 12345 678 9</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer

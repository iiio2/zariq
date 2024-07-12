const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top navbar-light">
        <div className="container">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  id="menu"
                  data-bs-toggle="dropdown"
                  className="nav-link text-white fw-bold"
                  data-bs-display="static"
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Vision, Mission & Values
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Why Choose Us
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Principal Message
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Curriculum
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      History
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Campus
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Upcoming Events
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </li>
              {/* second */}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  id="menu"
                  data-bs-toggle="dropdown"
                  className="nav-link text-white fw-bold"
                  data-bs-display="static"
                >
                  Admission
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      A Brief Admission Procedure
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Scholarship
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      School Fees
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Withdrawal Policy
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      FAQ on Admission
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      How to Apply
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="dropdown-item"
                    >
                      Online Payment
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white fw-bold" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white fw-bold" href="#">
                  Achievements
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white fw-bold" href="#">
                  Key Information
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white fw-bold" href="#">
                  Policies
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white fw-bold" href="#">
                  Facilities
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white fw-bold" href="#">
                  Request for a Tour
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link text-white fw-bold" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

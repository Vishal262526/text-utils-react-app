import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <a className="navbar-brand fs-2" href="/">{props.logo}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fs-5 active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="/">Contact Us</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired
}


// default props is working properly and if you set isrequired in proptypes and default props is inserted in your app the required cannot tak any affect
// Navbar.defaultProps = {
//   logo:"Navbar"
// }

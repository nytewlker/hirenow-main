import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 animated">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Learn more about our company, our values, and our mission. We strive to deliver the best service possible.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 animated">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/about" className="text-dark">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-dark">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-dark">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 animated">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="#" className="text-dark"><i className="fab fa-facebook"></i> Facebook</Link>
              </li>
              <li>
                <Link to="#" className="text-dark"><i className="fab fa-twitter"></i> Twitter</Link>
              </li>
              <li>
                <Link to="#" className="text-dark"><i className="fab fa-instagram"></i> Instagram</Link>
              </li>
              <li>
                <Link to="#" className="text-dark"><i className="fab fa-linkedin"></i> LinkedIn</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 animated">
            <h5 className="text-uppercase">Newsletter</h5>
            <form>
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example21" className="form-control" />
                <label className="form-label" htmlFor="form5Example21">Email address</label>
              </div>
              <button type="submit" className="btn btn-primary mb-4">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-light animated">
        © 2024 Copyright:
        <Link className="text-light" to="/">YourWebsite.com</Link>
      </div>
    </footer>
  )
}

export default Footer

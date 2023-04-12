import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer class="bg-dark text-center text-white footer">
    <div class="container p-4">
      <section class="">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">HELPFUL LINKS</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text">Home Page</a>
              </li>
              <li>
                <a href="#!" class="text">Site Map</a>
              </li>
              <li>
                <a href="#!" class="text">Order From Catalog</a>
              </li>
              <li>
                <a href="#!" class="text">Free Catalog Update</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Account</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text">Log In</a>
              </li>
              <li>
                <a href="#!" class="text">Register</a>
              </li>
              <li>
                <a href="#!" class="text">My Account</a>
              </li>
              <li>
                <a href="#!" class="text">Order History</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">INFO</h5>
  
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text">Help</a>
              </li>
              <li>
                <a href="#!" class="text">Contact Us</a>
              </li>
              <li>
                <a href="#!" class="text">Privacy Policy</a>
              </li>
              <li>
                <a href="#!" class="text">Terms For Use</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>  
    <div class="text-center p-3 copyright">
      © 2023 Copyright By Kamran Ali
    </div>
  </footer>
  )
}

export default Footer;
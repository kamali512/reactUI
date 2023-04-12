import React from 'react'
import "./navbar.css";
const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><span class="w_size">W</span> MOVIES</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">MOVIES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">BLOGS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CONTACT US</a>
              </li>
            </ul>
            <form className="d-flex search_box" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <input type="button" value="Login"  class="btn btn-st " data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo" />
              <input type="button" value="Register"  class="btn btn-st" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" />
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
import React from 'react'
import "./heroSection.css";
import image1 from "../../assets/header.jpg"
const HeroSection = () => {
  return (
<header class="header">
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={image1}
              class="d-block mx-lg-auto img-fluid"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <div class="lc-block mb-3">
              <div editable="rich">
                <h2 class="fw-bold display-5">
                  Buy Latest Movies of any genre!
                </h2>
              </div>
            </div>

            <div class="lc-block mb-3">
              <div editable="rich">
                <p class="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
              </div>
            </div>

            <div
              class="lc-block d-grid gap-2 d-md-flex justify-content-md-start"
            >
              <a class="btn btn-warning px-4 me-md-2" href="#" role="button"
                >Go to Store</a
              >
              <a class="btn btn-outline-secondary px-4" href="#" role="button"
                >Explore Movies</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection;
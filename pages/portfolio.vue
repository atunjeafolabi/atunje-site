<template>
  <div id="portfolio" class="section bg_white pp-scrollable md_pl_80">
    <div class="container">
      <div class="portfolio2 my_60">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="main_title pb_60">
              <h2 class="title color_primary">Portfolio</h2>
              <p class="mt_15">A few of the projects I have worked on ...</p>
            </div>
          </div>
          <div class="col-md-12 col-lg-12">
            <div class="my_portfolio" id="tab-panel">
              <!--Filter-->
              <div class="row">
                <div class="col-md-12">
                  <div class="filters mb_30 w-100">
                    <ul class="filter-tabs d-inline-block">
                      <li
                        class="active filter"
                        data-role="button"
                        data-filter="all"
                      >
                        All
                      </li>
                      <li
                        class="filter"
                        data-role="button"
                        data-filter=".design"
                      >
                        Web Design
                      </li>
                      <li
                        class="filter"
                        data-role="button"
                        data-filter=".development"
                      >
                        Web Development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="filter-list">
                <div class="portfolio-items">
                  <div class="row">
                    <div
                      class="column mix mix_all design mb_30 col-md-4 col-lg-4"
                    >
                      <div class="default-portfolio-item">
                        <a
                          href="images/portfolio/truckademy.png"
                          data-fancybox="gallery"
                          id="truckademy"
                          data-website="http://www.truckademy.com"
                        >
                          <img
                            src="images/portfolio/truckademy.png"
                            alt="image"
                          />
                          <div class="overlay-box">
                            <span
                              ><i class="fa fa-eye" aria-hidden="true"></i
                            ></span>
                            <div class="tag">
                              <ul>
                                <li>HTML, CSS, Javascript</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      class="
                        column
                        mix mix_all
                        development
                        mb_30
                        col-md-4 col-lg-4
                      "
                    >
                      <div class="default-portfolio-item">
                        <a
                          href="images/portfolio/roast.png"
                          data-fancybox="gallery"
                        >
                          <img src="images/portfolio/roast.png" alt="image" />
                          <div class="overlay-box">
                            <span
                              ><i class="fa fa-eye" aria-hidden="true"></i
                            ></span>
                            <div class="tag">
                              <ul>
                                <li>Laravel, VueJS, Zurb Foundation</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      class="
                        column
                        mix mix_all
                        development
                        mb_30
                        col-md-4 col-lg-4
                      "
                    >
                      <div class="default-portfolio-item">
                        <a
                          href="images/portfolio/klassconnect.png"
                          data-fancybox="gallery"
                        >
                          <img
                            src="images/portfolio/klassconnect.png"
                            alt="image"
                          />
                          <div class="overlay-box">
                            <span
                              ><i class="fa fa-eye" aria-hidden="true"></i
                            ></span>
                            <div class="tag">
                              <ul>
                                <li>Laravel</li>
                                <li>|</li>
                                <li>
                                  <a
                                    href="https://klasconnect.com/"
                                    target="_blank"
                                    >Visit Site</a
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <!-- <div
                      class="
                        column
                        mix mix_all
                        graphic
                        wordpress
                        branding
                        mb_30
                        col-md-4 col-lg-4
                      "
                    >
                      <div class="default-portfolio-item">
                        <a
                          href="images/portfolio/04.jpg"
                          data-fancybox="gallery"
                        >
                          <img src="images/portfolio/04.jpg" alt="image" />
                          <div class="overlay-box">
                            <span
                              ><i class="fa fa-eye" aria-hidden="true"></i
                            ></span>
                            <div class="tag">
                              <ul>
                                <li>Branding,</li>
                                <li>wordpress</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div> -->
                    <!-- <div
                      class="
                        column
                        mix mix_all
                        graphic
                        design
                        branding
                        mb_30
                        col-md-4 col-lg-4
                      "
                    >
                      <div class="default-portfolio-item">
                        <a
                          href="images/portfolio/05.jpg"
                          data-fancybox="gallery"
                        >
                          <img src="images/portfolio/05.jpg" alt="image" />
                          <div class="overlay-box">
                            <span
                              ><i class="fa fa-eye" aria-hidden="true"></i
                            ></span>
                            <div class="tag">
                              <ul>
                                <li>Web Design,</li>
                                <li>wordpress</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div> -->
                    <!-- <div
                      class="
                        column
                        mix mix_all
                        development
                        wordpress
                        design
                        mb_30
                        col-md-4 col-lg-4
                      "
                    >
                      <div class="default-portfolio-item">
                        <a
                          href="images/portfolio/06.jpg"
                          data-fancybox="gallery"
                        >
                          <img src="images/portfolio/06.jpg" alt="image" />
                          <div class="overlay-box">
                            <span
                              ><i class="fa fa-eye" aria-hidden="true"></i
                            ></span>
                            <div class="tag">
                              <ul>
                                <li>Web Design,</li>
                                <li>Web Development</li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      //=====================================================================================
      //  09.   Gallery With Filters List
      //=====================================================================================

      if ($('.filter-list').length) {
        $('.filter-list').mixItUp({})
      }
    </script>
  </div>
</template>
<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'js/custom/fancy-box.js',
          body: true,
        },
      ],
    }
  },
}
</script>
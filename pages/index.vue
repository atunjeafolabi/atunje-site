<template>
  <div>
    <Sidebar />
    <div id="pagepiling">
      <!--	Start Slider
		===================================================-->
      <div id="slider" class="section bg_white">
        <div class="line-container">
          <div class="row">
            <div class="col-md-3 col-lg-3">
              <div class="liner"></div>
            </div>
            <div class="col-md-3 col-lg-3">
              <div class="liner"></div>
            </div>
            <div class="col-md-3 col-lg-3">
              <div class="liner"></div>
            </div>
            <div class="col-md-3 col-lg-3">
              <div class="liner"></div>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner overlay_three">
            <div class="carousel-item active">
              <div class="overlay_one pattan">
                <img class="" src="images/slider/01.jpg" alt="slide image" />
              </div>
              <div class="carousel-caption">
                <h1 class="mb_20">
                  Awesome solution<br />
                  for <span class="color_default">you Business</span>
                </h1>
                <p class="mb_20">
                  Risus faucibus mollis velit sollicitudin consequat inceptos
                  dictum. Cras quis amet dui inceptos varius, faucibus bibendum
                  fringilla sodales mauris tortor lacus vitae sagittis consequat
                  dapibus consequat justo nostra.
                </p>
                <a class="btn btn-default" href="#">Start a Project</a>
              </div>
            </div>
            <div class="carousel-item">
              <div class="overlay_one pattan">
                <img src="images/slider/10.jpg" alt="slide image" />
              </div>
              <div class="carousel-caption">
                <h1 class="mb_20">
                  Awesome solution<br />
                  for <span class="color_default">you Business</span>
                </h1>
                <p class="mb_20">
                  Risus faucibus mollis velit sollicitudin consequat inceptos
                  dictum. Cras quis amet dui inceptos varius, faucibus bibendum
                  fringilla sodales mauris tortor lacus vitae sagittis consequat
                  dapibus consequat justo nostra.
                </p>
                <a class="btn btn-default" href="#">Start a Project</a>
              </div>
            </div>
            <div class="carousel-item">
              <div class="overlay_one pattan">
                <img src="images/slider/02.jpg" alt="slide image" />
              </div>
              <div class="carousel-caption">
                <h1 class="mb_20">
                  kAwesome solution<br />
                  for <span class="color_default">you Business</span>
                </h1>
                <p class="mb_20">
                  Risus faucibus mollis velit sollicitudin consequat inceptos
                  dictum. Cras quis amet dui inceptos varius, faucibus bibendum
                  fringilla sodales mauris tortor lacus vitae sagittis consequat
                  dapibus consequat justo nostra.
                </p>
                <a class="btn btn-default" href="#">Start a Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--	End Slider
		===================================================-->
    </div>
  </div>
</template>
<script>
export default {}
</script>

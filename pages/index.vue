<template>
  <div>
    <Sidebar />
    <!--	Start Slider
		===================================================-->
    <div id="slider" class="section bg_white">
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
            <div class="overlay_one pattan dark-img">
              <img class="" src="images/slider/01.jpeg" alt="slide image" />
            </div>
            <div class="carousel-caption">
              <h1 class="mb_20">
                Olatunji Afolabi<br />
                <h3 class="color_default">SOFTWARE DEVELOPER</h3>
              </h1>
              <p class="mb_20">
                <span class="badge badge-primary">PHP 7</span>
                <span class="badge badge-danger">Laravel</span>
                <span class="badge badge-success">Symfony</span>
                <span class="badge badge-danger">Javascript</span>
                <span class="badge badge-info">VueJS</span>
                <span class="badge badge-success">NodeJS/Express</span>
                <span class="badge badge-info">Typescript</span>
                <span class="badge badge-warning">Bash</span>
                <span class="badge badge-primary">Docker</span>
                <span class="badge badge-warning">Java</span>
                <span class="badge badge-dark">TDD</span>
                <span class="badge badge-success">SOLID</span>
                <span class="badge badge-light">DRY</span>
                <span class="badge badge-info">Mysql</span>
                <span class="badge badge-warning">Postgresql</span>
                <span class="badge badge-success">MongoDB</span>
                <span class="badge badge-warning">OOP</span>
                <span class="badge badge-danger">MVC</span>
                <span class="badge badge-light">RestAPIs</span>
              </p>
              <NuxtLink to="/resume" class="btn btn-default"
                >View my Resume</NuxtLink
              >
            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay_one pattan dark-img">
              <img src="images/slider/02.jpg" alt="slide image" />
            </div>
            <div class="carousel-caption">
              <h1 class="mb_20">
                Olatunji Afolabi<br />
                <h2 class="color_default">SOFTWARE DEVELOPER</h2>
              </h1>
              <p class="mb_20">
                Risus faucibus mollis velit sollicitudin consequat inceptos
                dictum. Cras quis amet dui inceptos varius, faucibus bibendum
                fringilla sodales mauris tortor lacus vitae sagittis consequat
                dapibus consequat justo nostra.
              </p>
              <NuxtLink class="btn btn-default" to="/contact"
                >Contact Me</NuxtLink
              >
            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay_one pattan dark-img">
              <img src="images/slider/03.png" alt="slide image" />
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
      <!--	End Slider
		===================================================-->
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.dark-img::before {
  z-index: 1;
  background: rgba(41, 41, 41, 0.4);
}
</style>

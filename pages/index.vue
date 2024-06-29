<template>
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
      <div class="carousel-inner">
        <div class="carousel-item active">
          <!-- <div class="pattan dark-img"> -->
          <img class="" src="images/slider/01.jpeg" alt="slide image" />
          <!-- </div> -->
          <div class="carousel-caption">
            <h1 class="mb_20">Olatunji Afolabi</h1>
            <h3 class="color_default">SOFTWARE DEVELOPER</h3>
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
            <NuxtLink to="/resume" class="btn btn-default mt_30"
              >View my Resume</NuxtLink
            >
          </div>
        </div>
        <div id="about" class="carousel-item">
          <!-- <div class="pattan dark-img"> -->
          <img src="images/slider/02.jpg" alt="slide image" />
          <!-- </div> -->
          <div class="carousel-caption">
            <h1 class="mb_20">Olatunji Afolabi</h1>
            <h2 class="color_default">SOFTWARE DEVELOPER</h2>
            <p class="mb_20">
              I am an enthusiast of programming and anything related to
              engineering and technology. Get to know more about me ...
            </p>
            <NuxtLink class="btn btn-default" to="/about">About Me</NuxtLink>
          </div>
        </div>
        <div id="contact" class="carousel-item">
          <!-- <div class=""> -->
          <img src="images/slider/03.jpg" alt="slide image" />
          <!-- </div> -->
          <div class="carousel-caption">
            <h1 class="mb_20">
              Want to have a talk with <span class="color_default">me ?</span>
            </h1>
            <p class="mb_20">
              Shoot me a message anytime,<br />
              I will respond as soon as possible.
            </p>
            <NuxtLink class="btn btn-default" to="/contact"
              >Contact Me</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <!--	End Slider
		===================================================-->
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Atunje | Home',
    }
  },
}
</script>
<style scoped>
.carousel-caption h1,
.carousel-caption h2,
.carousel-caption h3 {
  -webkit-text-stroke: 0.3px #000000;
}

#about .carousel-caption p {
  padding: 20px;
  background: linear-gradient(
    130deg,
    rgb(30 39 61) 0%,
    rgba(71, 163, 59, 1) 81%,
    rgb(142 203 0 / 13%) 100%
  );
}

#contact,
#about {
  background-color: black;
}

#contact img,
#about img {
  opacity: 0.6;
}
</style>

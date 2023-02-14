<template>
  <div id="services" class="section bg_white">
    <div class="container">
      <div class="services pt_60">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="main_title pb_60">
              <h2 class="title color_primary">Tech Stack</h2>
              <p class="mt_15">My skills repertoire.</p>
            </div>
          </div>
        </div>
        <div class="services_item owl-carousel">
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <i class="fab fa-php"></i>
              <!-- <span class="flaticon-website-design-symbol"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">PHP</h3>
            <p>
              I have about 5 years of experience in using PHP for developing web
              applications.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <i class="fab fa-laravel"></i>
              <!-- <span class="flaticon-programming"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Laravel</h3>
            <p>
              With about 4 years of experience using Laravel framework, I have
              built JSON RestAPIs, and traditional web applications
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <i class="fab fa-symfony"></i>
              <!-- <span class="flaticon-wordpress-logo"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Symfony</h3>
            <p>
              I have about 2 years development experience with Symfony for JSON
              RestAPIs.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <i class="fab fa-js"></i>
              <!-- <span class="flaticon-internet"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Javascript</h3>
            <p>
              I have about 5 years of experience with Javascript.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <i class="fab fa-vuejs"></i>
              <!-- <span class="flaticon-editor"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Vuejs</h3>
            <p>
              I have about 3 years experience with VueJS in crafting awesome
              frontend applications.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <i class="fab fa-node-js"></i>
              <!-- <span class="flaticon-editor"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">NodeJS</h3>
            <p>
              I am very much familiar and competent with the NodeJS ecosystem
              but I haven't used it as much as I have used PHP.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <i class="fas fa-laptop-code"></i>
              <!-- <span class="flaticon-editor"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">HTML, CSS</h3>
            <p>
              CSS frameworks I use in the frontend include Bootstrap and Zurb
              Foundation.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto">
              <i class="fab fa-git"></i>
              <!-- <span class="flaticon-programming"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Git</h3>
            <p>
              I am proficient in using Git/Github/Gitlab/Bitbucket version
              control system. I use git everyday.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto">
              <i class="fas fa-database"></i>
              <!-- <span class="flaticon-programming"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Database</h3>
            <p>
              The databases I have worked with include relational databases
              Mysql, PostgreSQL, Sqlite and non-relational Mongodb
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto">
              <i class="fab fa-ubuntu"></i>
              <!-- <span class="flaticon-programming"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Ubuntu</h3>
            <p>
              I am comfortable using the bash terminal and the Linux (Ubuntu)
              environment in general. I also understand enough bash scripting to
              achieve a task .
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto">
              <i class="fab fa-docker"></i>
              <!-- <span class="flaticon-programming"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Docker</h3>
            <p>
              I am familiar and have experience with docker.
              Dockerizing PHP web applications.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto">
              <i class="fab fa-java"></i>
              <!-- <span class="flaticon-programming"></span> -->
            </div>
            <h3 class="font-weight-bold color_primary">Java</h3>
            <p>
              Another language I understand and I continue to improve my skills
              on. I focus on the JavaEE (web) part of the entire Java ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
    <script>
      $('.services_item').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        nav: true,
        dots: false,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 3,
          },
          1200: {
            items: 3,
          },
        },
      })
    </script>
  </div>
</template>
<style scoped>
div.srvicon {
  padding-top: 13px;
  font-size: 2em;
}
</style>
<template>
  <div id="services" class="section bg_white">
    <div class="container">
      <div class="services my_60">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <!--	Start Title
		    				================================-->
            <div class="main_title pb_60">
              <h2 class="title color_primary">Services</h2>
              <p class="mt_15">
                Interdum a etiam sagittis vehicula porta. Massa felis eros quam
                blandit nulla dolor habitant.
              </p>
            </div>
            <!--	End Title
		    				================================-->
          </div>
        </div>
        <div class="services_item owl-carousel">
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <span class="flaticon-website-design-symbol"></span>
            </div>
            <h3 class="font-weight-bold color_primary">Web Design</h3>
            <p>
              Dignissim iaculis nostra urna congue elit vitae cra convallis.
              Mollis mollis purus taciti. Pede bibendum. Habitant sit imperdiet
              ia integer bibendum dui.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <span class="flaticon-programming"></span>
            </div>
            <h3 class="font-weight-bold color_primary">Web Development</h3>
            <p>
              Dignissim iaculis nostra urna congue elit vitae cra convallis.
              Mollis mollis purus taciti. Pede bibendum. Habitant sit imperdiet
              ia integer bibendum dui.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <span class="flaticon-wordpress-logo"></span>
            </div>
            <h3 class="font-weight-bold color_primary">Wordpress</h3>
            <p>
              Dignissim iaculis nostra urna congue elit vitae cra convallis.
              Mollis mollis purus taciti. Pede bibendum. Habitant sit imperdiet
              ia integer bibendum dui.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <span class="flaticon-internet"></span>
            </div>
            <h3 class="font-weight-bold color_primary">Branding</h3>
            <p>
              Dignissim iaculis nostra urna congue elit vitae cra convallis.
              Mollis mollis purus taciti. Pede bibendum. Habitant sit imperdiet
              ia integer bibendum dui.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <span class="flaticon-shopping-cart"></span>
            </div>
            <h3 class="font-weight-bold color_primary">Opencart</h3>
            <p>
              Dignissim iaculis nostra urna congue elit vitae cra convallis.
              Mollis mollis purus taciti. Pede bibendum. Habitant sit imperdiet
              ia integer bibendum dui.
            </p>
          </div>
          <div class="service_one text-center p_30">
            <div class="srvicon bg_default color_white mx-auto mb_20">
              <span class="flaticon-editor"></span>
            </div>
            <h3 class="font-weight-bold color_primary">Graghic Design</h3>
            <p>
              Dignissim iaculis nostra urna congue elit vitae cra convallis.
              Mollis mollis purus taciti. Pede bibendum. Habitant sit imperdiet
              ia integer bibendum dui.
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

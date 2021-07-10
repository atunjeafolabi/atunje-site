<template>
  <div>
    <PreLoader />
    <div id="mysidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
        ><i class="flaticon-close-button"></i
      ></a>
      <img class="nav-logo" src="images/logo/29.png" alt="image" />
      <ul id="menu" onClick="openNav()">
        <li class="active">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li data-menuanchor="page3">
          <NuxtLink to="/resume">Resume</NuxtLink>
        </li>
        <li data-menuanchor="page4">
          <NuxtLink to="/services">Services</NuxtLink>
        </li>
        <li data-menuanchor="page5">
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li data-menuanchor="page10">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="sidebar bg_primary">
      <div class="logo text-center">
        <a href="#page1"
          ><img class="nav-logo" src="images/logo/29.png" alt="logo"
        /></a>
      </div>
      <span style="cursor: pointer" onclick="openNav()">&#9776;</span>
      <div class="socal_media mt_60">
        <ul>
          <li>
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="contact_massage bg_primary">
      <NuxtLink to="/contact"
        ><i class="fa fa-envelope" aria-hidden="true"></i
      ></NuxtLink>
    </div>
    <script>
      // Hide preloader after navigating back to index
      $('.preloader').delay(500).fadeOut(500)
      $('body').removeClass('page-load')
    </script>
  </div>
</template>
<style scoped>
#mysidenav,
.sidebar.bg_primary {
  box-shadow: 35px 0px 20px -40px #979797;
}
</style>
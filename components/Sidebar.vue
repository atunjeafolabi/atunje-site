<template>
  <div>
    <PreLoader />
    <div id="mysidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
        >&times;</a
      >
      <img
        class="nav-logo rounded-circle"
        src="images/atunje.jpeg"
        alt="image"
        style="width: 64px; height: 64px"
      />
      <ul id="menu" onClick="closeNav()">
        <li class="active">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li data-menuanchor="page3">
          <NuxtLink to="/resume">Resume</NuxtLink>
        </li>
        <li data-menuanchor="page4">
          <NuxtLink to="/stack">Tech Stack</NuxtLink>
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
      <img
        class="nav-logo rounded-circle"
        src="images/atunje.jpeg"
        alt="image"
        style="width: 64px; height: 64px"
      />
      <span style="cursor: pointer" onclick="openNav()">&#9776;</span>
      <div class="socal_media mt_60">
        <ul>
          <li>
            <a href="https://github.com/atunjeafolabi " target="_blank"
              ><i class="fab fa-github" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="https://web.facebook.com/tunji.afolabi2/" target="_blank"
              ><i class="fab fa-facebook" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/atunje_afo" target="_blank"
              ><i class="fab fa-twitter" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/afolabi-olatunji-b4348b70"
              target="_blank"
              ><i class="fab fa-linkedin" aria-hidden="true"></i
            ></a>
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
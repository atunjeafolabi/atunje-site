<template>
  <div id="contact" class="section bg_white pp-scrollable">
    <div class="container">
      <div class="contact pt_60 md_pl_80">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <!--	Start Title
		    				================================-->
            <div class="main_title pb_60">
              <h2 class="title color_primary">Contact</h2>
              <p class="mt_15">Reach me via phone or email</p>
            </div>
            <!--	End Title
		    				================================-->
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-lg-4">
            <div class="contact_info">
              <ul>
                <li>
                  <div class="contact_icon float-left">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div class="contact_text">
                    <h6 class="font-weight-bold color_primary">CALL</h6>
                    <span class="color_secondery">+2347062415800</span>
                  </div>
                </li>
                <li>
                  <div class="contact_icon float-left">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div class="contact_text">
                    <h6 class="font-weight-bold color_primary">EMAIL</h6>
                    <span class="color_secondery"
                      >atunje_afolabi@yahoo.com</span
                    >
                  </div>
                </li>
                <li>
                  <div class="contact_icon float-left">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div class="contact_text">
                    <h6 class="font-weight-bold color_primary">ADDRESS</h6>
                    <span class="color_secondery"
                      >13, Onanubi Street, New Oko Oba, Agege, Lagos,
                      Nigeria.</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-7 col-lg-8">
            <form
              class="form contact_message pb_60"
              id="contact-form"
              action="email.php"
              method="post"
            >
              <div class="row">
                <div class="col-md-6 col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-lg-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="col-md-12 col-lg-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="col-md-12 col-lg-12">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="7"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12 col-lg-12">
                  <div class="form-group">
                    <input
                      class="btn btn-default"
                      id="send"
                      value="Send Massage"
                      type="submit"
                    />
                  </div>
                </div>
                <div class="col-md-12 col-lg-12">
                  <div class="error-handel">
                    <div id="success">
                      Your email sent Successfully, Thank you.
                    </div>
                    <div id="error">
                      Error occurred while sending email. Please try again
                      later.
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
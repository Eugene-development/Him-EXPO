<template>
  <body>
  <!--[if lt IE 8]>
  <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->
  <!--************************************
      Loader Start
  *************************************-->
<!--  <div id="loader-wrapper">-->
<!--    <div id="loader"></div>-->
<!--    <div class="loader-section section-left"></div>-->
<!--    <div class="loader-section section-right"></div>-->
<!--  </div>-->
  <!--************************************
      Loader End
  *************************************-->
  <!--************************************
      Wrapper Start
  *************************************-->
  <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
    <!--************************************
        Header Start
    *************************************-->
    <Header/>
    <!--************************************
        Header End
    *************************************-->
    <div class="tg-pushpage">
      <!--************************************
          Home Slider Start
      *************************************-->
      <div id="tg-innerbanner" class="tg-innerbanner">
        <figure data-vide-bg="poster: images/innerpagebanner/img-08.jpg" data-vide-options="position: 0% 50%">
          <figcaption>
            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1>Контакты</h1>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <!--************************************
          Home Slider End
      *************************************-->
      <!--************************************
          Main Start
      *************************************-->
      <main id="tg-main" class="tg-main tg-haslayout">
        <!--************************************
            Contact Us Start
        *************************************-->
        <section class="tg-haslayout">
          <div class="tg-contactus tg-bglight">
            <div class="row">
              <div class="container">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <ul class="tg-address tg-sectionspace">
                    <li>
                      <i class="icon-phone"></i>
                      <h2>Телефон</h2>
                      <span>Отдел продаж: +51 900 321 4564</span>
                      <span>Склад: +501 860 3210</span>
                    </li>
                    <li>
                      <i class="icon-map-marker"></i>
                      <h2>Склад</h2>
                      <span>Дзержинск, Промзона</span>
                      <span>1258, Melbourne, Australia</span>
                    </li>
                    <li>
                      <i class="icon-email2"></i>
                      <h2>Почта</h2>
                      <span>indexpro24@gmail.com</span>
                      <span>indexpro24@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tg-mapprojectarea tg-bgwhite">
              <div class="row no-gutters">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 pull-left">
                  <div id="tg-locationmap" class="tg-map"></div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 pull-right">
                  <div class="tg-startyourwork">
                    <div class="tg-title tg-titlevone">
                      <h3><span>Let’s work together</span>Start your Project</h3>
                    </div>
                    <form class="tg-formtheme tg-formstartproject">
                      <fieldset>
                        <div class="form-group">
                          <input type="text" name="username" class="form-control" placeholder="Your Name">
                        </div>
                        <div class="form-group">
                          <input type="email" name="usermail" class="form-control" placeholder="Email Address">
                        </div>
                        <div class="form-group">
                          <input type="text" name="phone" class="form-control" placeholder="Phone">
                        </div>
                        <div class="form-group">
												<span class="tg-select">
													<select>
														<option>$400  -  $1500</option>
														<option>$600  -  $1600</option>
														<option>$700  -  $1700</option>
														<option>$800  -  $1800</option>
														<option>$900  -  $1900</option>
														<option>$1000  -  $2000</option>
													</select>
												</span>
                        </div>
                        <div class="form-group">
                          <textarea placeholder="Message"></textarea>
                        </div>
                        <div class="form-group">
                          <button class="tg-btn" type="submit"><span>send message</span></button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <!--************************************
            Contact Us End
        *************************************-->
      </main>
      <!--************************************
          Main End
      *************************************-->
      <!--************************************
          Footer Start
      *************************************-->
      <Footer/>
      <!--************************************
          Footer End
      *************************************-->
    </div>
  </div>
  <!--************************************
      Wrapper End
  *************************************-->
  </body>
</template>
<script>
import {
  Header,
  Footer
} from "~/components";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

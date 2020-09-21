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
    <div class="tg-pushpage"
    <!--************************************
    Home Slider Start
    *************************************-->
      <div id="tg-innerbanner" class="tg-innerbanner">
        <figure data-vide-bg="poster: images/innerpagebanner/img-08.jpg" data-vide-options="position: 0% 50%">
          <figcaption>
            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1>О нас</h1>
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
            About Us V Seven Start
        *************************************-->
        <div class="tg-aboutauthor">
          <figure class="tg-aboutauthorimg" data-vide-bg="poster: images/aboutus/img-23.jpg" data-vide-options="position: 0% 50%">
            <figcaption class="tg-aboutauthorcontent">
              <h2><span>Компания</span>"Хим-ЭКСПО"</h2>
              <div class="tg-description">
                <p>Продажа перекиси водорода мелким и крупным оптом.</p>
                <p>Продажа перекиси водорода мелким и крупным оптом.</p>
                <p>Продажа перекиси водорода мелким и крупным оптом.</p>
              </div>
              <img class="tg-signature" src="images/authorsignature.png" alt="image description">
              <div class="tg-authorskill">
                <div class="tg-skills">
                  <div class="tg-skill">
                    <span>Москва</span>
<!--                    <span>Нижний Новгород</span>-->
                    <div class="tg-skillholder" data-percent="92%">
                      <div class="tg-skillbar"></div>
                    </div>
                  </div>
                  <div class="tg-skill">
                    <span>Нижний Новгород</span>
<!--                    <span>80%</span>-->
                    <div class="tg-skillholder" data-percent="80%">
                      <div class="tg-skillbar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="tg-socialicons">
                <li class="tg-facebook"><a href="javascript:void(0);"><i class="icon-facebook-1"></i></a></li>
                <li class="tg-twitter"><a href="javascript:void(0);"><i class="icon-vk2"></i></a></li>
              </ul>
            </figcaption>
          </figure>
        </div>
        <!--************************************
            About Us V Seven Ene
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

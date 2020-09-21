<template>
  <header id="tg-header" class="tg-header tg-headerveleven tg-fixedheader ">
    <!--    <header id="tg-header" class="tg-header tg-headervsix">-->
    <div class="container-fluid background">
      <div class="row">
        <div class="tg-headercontent">
          <strong class="tg-logo"><a href="/"><img src="~assets/images/logo6.png" alt="company here"></a></strong>
          <ul class="tg-socialicons">
            <li><a href="javascript:void(0);"><i class="icon-facebook-1"></i></a></li>
            <li><a href="javascript:void(0);"><i class="icon-vk"></i></a></li>
          </ul>
          <nav id="tg-nav" class="tg-nav">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
              <ul>
                <li class="menu-item-has-children current-menu-item">
                  <nuxt-link to="/"
                  >Главная</nuxt-link
                  >
                </li>
                <li class="menu-item-has-children">
                  <nuxt-link to="/blog"
                  >Блог</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/about-us"
                  >О нас</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/contact"
                  >Контакты</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>
.background{
  background: white;
}
</style>

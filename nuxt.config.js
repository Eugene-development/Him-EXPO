
export default {

  server: {
    port: 3010, // default: 3000
    // host: '0.0.0.0' // default: localhost
  },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  script: [
    { type: 'text/javascript', src: '@/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js' },
    { type: 'text/javascript', src: '@/assets/js/vendor/jquery-library.js' },
    { type: 'text/javascript', src: '@/assets/js/vendor/bootstrap.min.js' },
    { type: 'text/javascript', src: '@/assets/js/jquery.singlePageNav.min.js' },
    { type: 'text/javascript', src: '@/assets/js/jquery-scrolltofixed.js' },
    { type: 'text/javascript', src: '@/assets/js/owl.carousel.min.js' },
    { type: 'text/javascript', src: '@/assets/js/jquery.vide.min.js' },
    { type: 'text/javascript', src: '@/assets/js/royalslider.min.js' },
    { type: 'text/javascript', src: '@/assets/js/scrollbar.min.js' },
    { type: 'text/javascript', src: '@/assets/js/isotope.pkgd.js' },
    { type: 'text/javascript', src: '@/assets/js/prettyPhoto.js' },
    { type: 'text/javascript', src: '@/assets/js/sticky-kit.js' },
    { type: 'text/javascript', src: '@/assets/js/sticky-kit.js' },
    { type: 'text/javascript', src: '@/assets/js/countdown.js' },
    { type: 'text/javascript', src: '@/assets/js/parallax.js' },
    { type: 'text/javascript', src: '@/assets/js/collapse.js' },
    { type: 'text/javascript', src: '@/assets/js/countTo.js' },
    { type: 'text/javascript', src: '@/assets/js/appear.js' },
    { type: 'text/javascript', src: '@/assets/js/gmap3.js' },
    { type: 'text/javascript', src: '@/assets/js/main.js' },
    { type: 'text/javascript', src: 'https://maps.google.com/maps/api/js?key=AIzaSyCR-KEWAVCn52mSdeVeTqZjtqbmVJyfSus&language=en' },
  ],

  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/normalize.css',
    '@/assets/css/font-awesome.min.css',
    '@/assets/css/icomoon.css',
    '@/assets/css/owl.carousel.css',
    // '@/assets/css/scrollbar.css',
    '@/assets/css/prettyPhoto.css',
    '@/assets/css/transitions.css',
    // '@/assets/css/royalslider.css',
    '@/assets/css/main.css',
    '@/assets/css/color.css',
    '@/assets/css/responsive.css',
    '@/assets/css/tailwind.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <About tag="Hey, I'm Chris."/>
    <Work />
    <Social />
    <Footer id="footer" email="chris@freeland.me" tag="Zug Zug"/>
  </div>
</template>

<script>
import About from './components/About.vue'
import Work from './components/Work.vue'
import Social from './components/Social.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    About,
    Work,
    Social,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white; /*#2c3e50;*/
  margin-top: 60px;
}
.page {
background: #134E5E;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #71B285, #134E5E);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #71B285, #134E5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white; 
} 
#footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
}
</style>

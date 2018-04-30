<template>
  <div id="app" class="al">
    <!-- <img src="./assets/logo.png"> -->
    <Header tag="Hello, I'm Chris" />
    <About id="about"/>
    <Work id="work"/>
    <Social id="social"/>
    <Footer id="footer" email="chris@freeland.me"/>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Header from "./components/Header.vue";
import Work from "./components/Work.vue";
import Social from "./components/Social.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    About,
    Work,
    Social,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white; /*#2c3e50;*/
  margin-top: 60px;
  text-align: left;
  margin-left: 25%;
}

#about {
  margin-top: 5%;
}
#social {
  margin-top: 5%;
}
#work {
  margin-top: 5%;
}
#footer {
  margin-top: 2%;
}
@media (max-width: 750px) {
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white; /*#2c3e50;*/
    margin-top: 50px;
    text-align: left;
    margin-left: 6%;
    margin-right: 6%;
  }
  #work {
    margin-top: 5%;
  }
  #social {
    margin-top: 12%;
  }
  #footer {
    margin-top: 6%;
  }
}
.page {
  background: #134e5e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #71b285,
    #134e5e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #71b285,
    #134e5e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
}

a {
  text-decoration: none;
  color: white;
}
</style>

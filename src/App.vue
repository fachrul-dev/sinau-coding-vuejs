<template>
  <div id="app">
    <nav>
      <router-link to="/"
        ><img src="./assets/img/logo.png" alt="logo"
      /></router-link>

      <div class="nav-item">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <button class="btn-join" @click="showMe">Join Us</button>
    </nav>

    <router-view :show="show"></router-view>

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    showMe() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>

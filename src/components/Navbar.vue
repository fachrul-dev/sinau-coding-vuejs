<template>
  <nav>
    <img src="../assets/img/logo.png" alt="logo" />

    <div class="nav-item">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <!-- <button class="btn-join">Join Us</button> -->
    <a href="#" @click="showForm" class="btn-join"><p>Join Us</p></a>
  </nav>
</template>


<script>
export default {
  props: {
    show: Boolean,
  },

  methods: {
    showForm: function () {
      this.show = false;
    },
  },
};
</script>
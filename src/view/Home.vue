<template>
  <section class="hero">
    <div class="description">
      <h3>Welcome To Sinau Koding Academy</h3>
      <p>
        Sinau Koding adalah Program Pelatihan Programer dengan materi yang
        relevan pada kebutuhan industri saat ini. Materi yang ditawarkan
        diantaranya pemrograman website dan android Lihat
      </p>
    </div>
    <img v-if="show" src="../assets/img/hero.png" alt="" />
    <Form v-else />
  </section>
</template>


<script>
import Form from "../components/Form.vue";
export default {
  components: { Form },
  props: {
    show: Boolean,
  },
};
</script>
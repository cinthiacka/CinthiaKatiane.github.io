<template>
  <div class="p-0">
    <Header/>
    <section id="welcome" class='p-0 m-0 welcome'>
    OI
    
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

  export default {
    name: 'AboutMe',
    components: {
      Header,
      Footer
    },
    data(){
      return {
        testando: require("../assets/me6.jpg")
      }
    }
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Poppins");

</style>
<template>
  <div class="p-0">
    <Header/>
    <section id="welcome" class='p-0 m-0 welcome'>
      <v-parallax height="800" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/original-acrylic-painting-background-dlerick.jpg">
        <v-layout
          align-center
          column
          justify-center m-0 p-0
        >
          <div class="display-2 mb-1 title">Cinthia Katiane</div>
          <div class="subheading subtitle">Portfólio Online de Artes Visuais</div>
          <div class="subtitle mt-5"><v-btn to="/obras"> VER PORTFOLIO</v-btn></div>
        </v-layout>
      </v-parallax>
      
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>




<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Poppins");

/* Style the video: 100% width and height to cover the entire window */
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}


.welcome{
  height: 90vh !important;
}
.imagem-format{
  border-radius: 50%!important;
}
.title{
  margin-top: 2em;
  font-size: 3em!important;
  font-family: Poppins, sans-serif !important;
  font-weight: 900;
  color: white!important;
}
.subtitle{
  font-size: 1.2em;
  font-family: Poppins, sans-serif;
  font-weight: 50;
  color: white;
}
.testando{
  padding: 0% !important;
}
.highlight{
  font-size: 10vw!important;
  font-family: Poppins, sans-serif;
  font-weight: 900;
  color: black!important;
}
.card-float{ 
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.views{
  background-color:#F1F1F1;
  height: 75vh !important;
}



.screen-reader-only {
  height: 1px;
  width: 1px;
  position: absolute;
  left: -100000px;
}
.text-centered {
  text-align: center;
}
.wrapper {
  margin: 0 auto;
  max-width: 800px;
  @media only screen and (max-width: 799px) {
    max-width: 100%;
    margin: 0 1.5rem;
  }
}
.image-card-grid {
  list-style: none;
  margin: .5rem 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #F0F0F0;
}
.searchbar {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 549px) {
    width: 100%;
    label {
      width: 80%;
    }
  }
}
.searchbar-input {
  padding: .5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  border: 1px solid gray;
  min-width: 300px;
  @media only screen and (max-width: 549px) {
    min-width: 0;
    width: 100%;
  }
}
.btn {
  padding: .5rem 1rem;
  font-size: 1rem;
  border-radius: 20px;
  background: transparent;
  border: none;
}
.btn--green {
  background: #42b983;
  color: white;
  font-weight: bold;
}
.btn--go {
  padding: .5rem 2rem;
  margin-left: 1rem;
}
</style>
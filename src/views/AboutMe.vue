<template>
  <div class="p-0">
    <Header/>
    <section id="welcome" class='p-0 m-0 '>
        <v-layout
          align-center
          column
          justify-start m-0 p-0
        >
          <div class="mb-1 title">Cinthia Katiane</div>
          <div class="subtitle">
            cinthia.cka@gmail.com
            <br>
            Brasil, 24. Parnamirim-RN.
            <br>
            Desenvolvedora Web Front End e Pintora</div>
         </v-layout>
    </section>

   <section id="work" class='p-0 m-0 welcome'>
      <v-row>
        <v-col align="center" justify="center">
          <v-card class="card-float d-inline-block" width="85%" elevation="0">
            <div>
              <div class="wrapper">
          
              <div class="title">Sobre mim</div>
              <div class="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
              <div class="title">Formação</div>
              <div class="subtitle">
                • Curso de Desenho: Descomplicando a estrutura humana - Alura <br>
                • Curso de Desenho: Descomplicando o desenho do rosto - Alura <br>
                • Colorização Digital : técnicas de colorização e iluminação - Alura <br>
                • Pintura Digital: Pintando através do reconhecimento de valores - Alura <br>

              </div>
              <div class="title">Principais Habilidades:</div>
              <div class="subtitle">
                • Inglês fluente; <br>
                • Kryta para pintura digital; <br>
                • Pintura com guache; <br>
                • Pintura com tinta acrílica.
   
              </div>      
              <div class="title">Principais Experiências:</div>
              <div class="subtitle">
                Kairós
              </div>      

              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <Footer/>
    </section>
    
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
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Poppins");

.welcome{
  height: 90vh !important;
}
.title{
  margin-top: 2em;
  font-size: 3em!important;
  font-family: Poppins, sans-serif !important;
  font-weight: 900;
  color: black!important;
}
.subtitle{
  font-size: 1.2em;
  font-family: Poppins, sans-serif;
  font-weight: 50;
  color: black;
}
.wrapper {
  padding: 3em;
  margin: 0 auto;
  @media only screen and (max-width: 799px) {
    max-width: 100%;
    margin: 0 1.5rem;
  }
}
</style>
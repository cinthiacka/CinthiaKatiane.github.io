<template>
  <div class="p-0">
    <Header/>
    <section id="welcome" class='p-0 m-0 '>
      <v-layout align-center column justify-start m-0 p-0>
        <div class="mb-1 title">{{file.nome}}</div>
        <br>
      </v-layout>  
    </section>
     
    <section id="work" class='p-0 m-0 welcome'>
      <v-row>
        <v-col align="center" justify="center">
          <v-card class="card-float d-inline-block" width="85%" elevation="0">
            <br>
            <hr>
            <div>
              <v-col>
                <v-btn class="icon-network" color="black" v-for="item in file.redes_sociais" icon :key="item.icon" :href="item.url" target="_blank">
                    <v-icon large>{{item.icon}}</v-icon>
                </v-btn>
              </v-col>
              <v-col align="center" justify="center" class="wrapper">
                <div class="highlight">
                  <div class="topic">Contato</div>
                  <div>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field v-model="first" label="Nome" outlined ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field label="Email" outlined></v-text-field>
                      </v-col>
                    </v-row>
                    <v-col col="12" class="pa-0">
                      <v-textarea outlined>
                        <template v-slot:label>
                          <div> Mensagem </div>
                        </template>
                      </v-textarea>
                    </v-col>
                  
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-btn outlined type="submit" value="Send">Enviar</v-btn>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-btn outlined type="reset" value="Reset">Resetar</v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-col>
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
    name: 'Contato',
    components: {
      Header,
      Footer
    },
    data(){
      return{
        file: require("../../data.json"),
      }
    }
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
.topic{
  margin: 1em;
  font-size: 2em!important;
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
.highlight{
  border: 5px solid black;
  color: white;
  margin:0em;
  margin-top: 5em;
  padding: 2em;
}
.wrapper {
  padding: 0em;
  padding-top: 0;
  margin: 0;
  @media only screen and (max-width: 799px) {
    max-width: 100%;
    margin: 0 1.5rem;
  }
}
.icon-network{
  margin: 3em;
}
</style>
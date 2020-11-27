<template>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="3"
      height="95"
    >
      <v-toolbar-title class="d-flex align-center logo">
        <v-icon color="#000" class="ma-3">
          fa-palette
        </v-icon>
        <div class="title ma-3">
          CKatiane  
        </div>
        <div style="margin-left: 0.6em; margin-right: 1em;"> | </div>
        <div class="subtitle">
          Portfólio Online
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="item in items"
            :key="item.nome"  
            :href="item.link"
            active-class="text--primary"
            class="font-weight-bold subtitle"
            min-width="96"
            text
          >
            {{ item.nome }}
          </v-tab>
        </v-tabs>
      </div>
    </v-app-bar>
</template>

<script>

export default {
  name: 'Header',

  data: () => ({
    drawer: null,
      items: [
        {
          nome:'Início',
          link: '/'
        },
        {
          nome: 'Obras',
          link: '/obras'
        },
        {
          nome: 'Sobre mim & Contato',
          link: '/sobremim'
        }
      ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Poppins");

.title{
  font-size: 1.5;
  font-family: Poppins, sans-serif!important;
  font-weight: bold;
}
.subtitle{
  font-size: 1.2;
  color: black;
  font-family: Poppins, sans-serif;
  font-weight: 50;
}
</style>
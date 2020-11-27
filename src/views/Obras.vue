<template>
  <div class="p-0">
    <Header/>
    <section id="welcome" class='p-0 m-0 welcome'>
      <v-row>
        <v-col align="center" justify="center">
          <v-card class="card-float d-inline-block" width="85%" elevation="0">
            <div>
              <div class="wrapper">
                 <v-tabs
                    centered
                  >
                    <v-tab>Tudo</v-tab>
                    <v-tab>Arte Digital</v-tab>
                    <v-tab>Desenho</v-tab>
                    <v-tab>Pintura</v-tab>
                  </v-tabs>

                  <p v-if="loading" class="text-centered">
                    Carregando...
                  </p>
                  
                  <ul v-else class="image-card-grid">
                    <image-card
                      v-for="image in cleanImages"
                      :key="image.id"
                      :image="image" />
                  </ul>
              </div>
            </div>

            <Footer/> 
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ImageCard from '../components/ImageCard.vue'
import config from '../../public/config';
import axios from 'axios';
import Footer from '../components/Footer.vue';

export default {
  name: 'Obras',
  components: {
    Header,
    ImageCard,
    Footer
  },
  data() {
    return {
      loading: false,
      tag: '',
      images: []
    }
  },
  created(){
    this.search();
  },
  computed: {
    cleanImages() {
      return this.images.filter(image => image.url_n)
    }
  },
  methods: {
    search() {
      this.loading = true;
      this.fetchImages()
        .then((response) => {
          this.images = response.data.photos.photo;
          this.loading = false;
        })
    },
    fetchImages() {
      return axios({
        method: 'get',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.people.getPhotos',
          api_key: config.api_key,
          user_id:'190705422@N04',
          extras: 'url_n, owner_name, date_taken, views',
          page: 1,
          format: 'json',
          nojsoncallback: 1,
          per_page: 30,
        }
      })
    },
  }
}
</script>




<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Poppins");

.imagem-format{
  border-radius: 50%!important;
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
  padding: 3em;
  margin: 0 auto;
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
</style>
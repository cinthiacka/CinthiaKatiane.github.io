<template>
  <section
    id="welcome"
  > 
    <v-layout>
      <v-flex
        xs12
        md12
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1
          style="opacity: 0;transform: rotate(180deg) translateY(0%)"
        />

        <v-layout
          align-center
          justify-center
          class="welcome"
        >
          <v-flex
            xs11
            md11
          > 
            <vue-typed-js :backSpeed="10" :showCursor="false"	:autoInsertCss="true" :strings="['^1000H^100e^100l^100l^100o ']" :contentType="'html'">
              <h1 id='hello' class="typing"></h1>
            </vue-typed-js>
            
            <vue-typed-js :backSpeed="10" :showCursor="false"	:autoInsertCss="true" :strings="['^3000world', 'you', 'darling', 'Sir', 'folks', 'people', '...', 'world.']" :contentType="'html'">
              <h3 id='hello' class="typing"></h3>
            </vue-typed-js>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'

export default {
  components:{
    VueTypedJs
  },
}
</script>

<style>
#hello{
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  color: var(--ck-dark-grey);
}

#welcome{
  height: 100%;
}
</style>

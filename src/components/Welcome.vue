<template>
  <section
    id="welcome"
    class="hide-overflow"
  > 
    <v-layout>
      <v-flex
        hidden-sm-and-down
        md4
      >
        <v-img
          style="filter: grayscale(100%);"
          :src="require('@/assets/welcome.jpg')"
          height="110vh"
        />
      </v-flex>

      <v-flex
        xs12
        md8
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1
          style="opacity: 0.5;transform: rotate(180deg) translateY(25%)"
        />

        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs11
            md11
          > 
          <v-card>
            <v-card-title class="head">
            <vue-typed-js :backSpeed="10" :showCursor="false"	:autoInsertCss="true" :strings="['^1000Hello^1000', 'Hi, ^1000 I am Cinthia', '^1000Nice to meet you', 'I am glad to see you', 'Ops', 'Shit happens', 'Code happens', 'Welcome!']" :contentType="'html'">
              <h1 class="typing"></h1>
            </vue-typed-js>
            <div class='ctrl-btn'>
              <v-btn
                v-for="(item, i) in items.slice(0, small ? items.length : 3)"
                :key="i"
                fab
                small
                :color="item.color"
              >
                <v-icon
                  small
                  color ='white'
                > {{item.icon}}
                </v-icon>
              </v-btn>
            </div>

            </v-card-title>
          
            <vue-typed-js class="body" :backSpeed="10" :showCursor="false"	:autoInsertCss="true" :strings="['^1000Hello^1000', 'Hi, ^1000 I am Cinthia', '^1000Nice to meet you', 'I am glad to see you', 'Ops', 'Shit happens', 'Code happens', 'Welcome!']" :contentType="'html'">
            <pre  style="display:flex;">
              <code class="body" style="display:block;">
&lt;<b class="tag">template</b>&gt;
  &lt;<b class="tag">div</b> id="app"&gt; { {message} } &lt;<b class="tag">/div</b>&gt;
&lt;<b class="tag">/template</b>&gt;

&lt;<b class="tag">script</b>&gt;
  var app = new Vue({
    el: #app,
    data: {
      message:"<spam class="typing"></spam>"
    }
  })
&lt;<b class="tag">/script</b>&gt;
              </code>
            </pre>  
            </vue-typed-js>
          </v-card>
         

            <base-btn class="mt-4" >
              Again!
            </base-btn>
          </v-flex>
        </v-layout>

        <base-bubble-2
          style="opacity:0.5;transform: rotate(180deg) translate(-200px, -15%)"
        />
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
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    items: [
      {
        name: 'Twitter',
        icon: 'fa-minus',
        color: 'yellow'
      },
      {
        name: 'Instagram',
        icon: 'fa-compress',
        color: 'blue'
      },
      {
        name: 'Facebook',
        icon: 'fa-times',
        color: 'red'
      },
    ]
  })
}
</script>

<style>
code {
  font-size: 1.3em;
  font-family: monospace;
  background-color: none;
  color: black;
  box-shadow: 0 0 0 0 ;
}
.ctrl-btn{
  margin-right: 0;
  margin-left: auto;
}
.head{
  background-color: #bfada5;
}
.body{
  padding: 0.7em;
  background-color:#d3c3bc;
  color:gray ;
}
.tag{
  color:firebrick;
}
</style>

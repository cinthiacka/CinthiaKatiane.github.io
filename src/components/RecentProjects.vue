<template>
  <section
    id="recent"
    class="hide-overflow"
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
        >
          <v-flex
            xs11
            md11
          > 
          <v-card raised min-width="100%">
            <v-card-title class="head">
              <vue-typed-js :backSpeed="10" :showCursor="false"	:autoInsertCss="true" :strings="['^1000Hello^1000', 'Hi, ^1000 I am Cinthia', '^1000Nice to meet you', 'Welcome!']" :contentType="'html'">
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
     
            <vue-typed-js class='body' :backSpeed="10" :showCursor="false"	:autoInsertCss="true" :strings="['^1000Hello^1000', 'Hi, ^1000 I am Cinthia', '^1000Nice to meet you', 'Welcome!']" :contentType="'html'">
              <pre  style="display:flex;">
                <code class="body" style="display:block;">

<!-- Content of the welcome code -->
     
&lt;<b class="tag">template</b>&gt;
  &lt;<b class="tag">div</b> id="app"&gt; {<b>{message}</b>} &lt;<b class="tag">/div</b>&gt;
&lt;<b class="tag">/template</b>&gt;

&lt;<b class="tag">script</b>&gt;
  var app = new Vue({
    el: #app,
    data: {
    <b class='txt-selected'>  message:"<spam class="typing"></spam>" </b>
    }
  })
&lt;<b class="tag">/script</b>&gt;

<!-- End of the welcome code -->

              </code>
            </pre>  
            </vue-typed-js>
          </v-card>
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
        name: 'mini',
        icon: 'fa-minus',
        color: 'yellow'
      },
      {
        name: 'compress',
        icon: 'fa-compress',
        color: 'blue'
      },
      {
        name: 'close',
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
.txt-selected{
  width: 100%;
}
</style>

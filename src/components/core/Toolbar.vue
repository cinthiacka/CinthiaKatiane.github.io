<template>
  <v-toolbar
    v-scroll="onScroll"
    :color="isTransparent ? 'transparent' : '#F5F5F5'"
    app
    flat
  >
    <v-spacer />
    <div> 
      <v-btn
        v-for="(item, i) in items.slice(0, small ? items.length : 5)"
        :key="i"
        flat
        small
        color
      >
        <v-icon
        small
        class=mr-2
          color ='black'
        > {{item.icon}}
        </v-icon>
        {{item.name}}
      </v-btn>
    </div>  
  </v-toolbar>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    isTransparent: true,
    items: [
      {
        name: 'Home',
        icon: 'fas fa-home'
      },
      {
        name: 'Projects',
        icon: 'fa-tasks'
      },
      {
        name: 'Skills',
        icon: 'fa-keyboard'
      },
      {
        name: 'Me',
        icon: 'fa-meh-blank'
      },
      {
        name: 'Contact',
        icon: 'fa-inbox'
      },
    ]
  }),

  methods: {
    onScroll () {
      this.isTransparent = window.pageYOffset < 200
    }
  }
}
</script>


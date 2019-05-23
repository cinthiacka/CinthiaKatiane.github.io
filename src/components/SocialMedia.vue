<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, small ? items.length : 3)"
      :key="i"
      fab
      color="info"
    >
      <v-icon
        color ='white'
      > {{item.icon}}
      </v-icon>
    </v-btn>
  </div>
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
    items: [
      {
        name: 'Twitter',
        icon: 'fas fa-twitter'
      },
      {
        name: 'Instagram',
        icon: 'fa-instagram'
      },
      {
        name: 'Facebook',
        icon: 'fa-medium'
      },
    ]
  })
}
</script>

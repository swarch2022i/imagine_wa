<template>
  <!-- min-width="200" :max-width="maxWidth" max-height="400" -->
  <v-card>
    <v-img :src="`${image.url}`"> </v-img>
    <v-card-title primary-title> {{ image.title }} </v-card-title>
    <v-card-text> Esta es una imagen de prueba </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: { image: Object },
  data() {
    return {
      maxWidth: 250,
    }
  },
  created() {
    //   let image = new Image();
    //   image.src = image.url
    //   image.onload = () =>{
    //   }
    // //   if(image.)
  },
}
</script>
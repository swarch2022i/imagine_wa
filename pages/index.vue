<template>
  <v-container grid-list-xs>
    <v-col cols="12"></v-col>
    <v-col cols="12" class="d-flex flex-wrap image-grid">
      <v-row
        v-for="(image, index) in images"
        :key="index"
        class="image-grid-item"
      >
        <image-component :image="image"></image-component>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import ImageComponent from '../components/main/imageComponent.vue'

import { mapState, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  components: { ImageComponent },
  data() {
    return {
      images: [
        // {
        //   title: 'Titulo 2',
        //   url: '/img2.jpg',
        // },
        // {
        //   title: 'Titulo 3',
        //   url: '/img3.jpg',
        // },
        // {
        //   title: 'Titulo 1',
        //   url: '/img1.jpg',
        // },
        // {
        //   title: 'Titulo 2',
        //   url: '/img2.jpg',
        // },
        // {
        //   title: 'Titulo 3',
        //   url: '/img3.jpg',
        // },
        // {
        //   title: 'Titulo 1',
        //   url: '/img1.jpg',
        // },
        // {
        //   title: 'Titulo 2',
        //   url: '/img2.jpg',
        // },
        // {
        //   title: 'Titulo 3',
        //   url: '/img3.jpg',
        // },
        // {
        //   title: 'Titulo 1',
        //   url: '/img1.jpg',
        // },
        // {
        //   title: 'Titulo 2',
        //   url: '/img2.jpg',
        // },
        // {
        //   title: 'Titulo 3',
        //   url: '/img3.jpg',
        // },
      ],
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      loggedIn: (state) => state.loggedIn,
      allImages: (state) => state.allImages,
    }),
  },
  mounted() {
    this.fetchImages().then(() => {
      var elem = document.querySelector('.image-grid')
      var msnry = new Masonry(elem, {
        // options
        itemSelector: '.image-grid-item',
        columnWidth: 200,
        gutter: 10,
      })
    })
  },
  methods: {
    ...mapActions({
      fetchAllImages: 'fetchAllImages',
    }),
    async fetchImages() {
      await this.fetchAllImages({})
      this.allImages.forEach((image) => {
        console.log(image)
        this.images.push({ title: `${image.name}`, url: `${image.url}` })
      })
    },
  },
}
</script>

<style scoped>
.image-grid-item {
  width: 200px !important;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
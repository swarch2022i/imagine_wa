<template>
  <div>
    <ProfileTop :data="this.perfilInfo" />
    <h1>Aqui van las imagenes</h1>
  </div>
</template>

<script>
import ProfileTop from '../components/ProfileTop.vue'
import { mapState, mapActions } from 'vuex'
import { mapGetters } from 'vuex';
import axios from 'axios'
export default {
  name: 'ProfilePage',
  components: { ProfileTop },
  computed: {
    ...mapState({
      perfilInfo: (state) => state.perfilInfo,
      user:(state)=>state.user
    }),
  },
  methods: { 
    ...mapActions({
      fetchLoadPerfil2: 'fetchLoadPerfil',
    }),
  }, 
  mounted(){
      this.fetchLoadPerfil2({
        idUsuario : "1"
      })
      setTimeout(() => {
        console.log('hola', this.perfilInfo)
      }, 2000)
  }


}
</script>

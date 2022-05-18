<template>
  <div v-if="loggedIn">
    <div>
      <ProfileTop :data="this.perfilInfo" />
      <h1>Aqui van las imagenes</h1>
    </div>
  </div>
  <div v-else>
    <h1>Please Log In</h1>
  </div>
</template>

<script>
import ProfileTop from '../components/ProfileTop.vue'
import { mapState, mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'ProfilePage',
  components: { ProfileTop },
  computed: {
    ...mapState({
      perfilInfo: (state) => state.perfilInfo,
      user: (state) => state.user,
      loggedIn: (state) => state.loggedIn,
    }),
  },
  methods: {
    ...mapActions({
      fetchLoadPerfil2: 'fetchLoadPerfil',
    }),
  },
  async mounted() {
    await this.fetchLoadPerfil2({
      idUsuario: this.user.user_id,
    })
    setTimeout(() => {
      console.log('hola', this.user.user_id)
    }, 2000)
  },
}
</script>

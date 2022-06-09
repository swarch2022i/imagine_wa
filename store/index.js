export const state = () => ({
  user: {},
  perfil: {},
  perfilInfo: {},
  loginInfo: {},
  loggedIn: true,
  allImages: []
})

export const mutations = {
  ['setUser'](state, { user }) {
    state.user = user
  },

  ['setPerfil'](state, { perfil }) {
    state.perfil = perfil
  },

  ['setPerfilInfo'](state, { perfilInfo }) {
    state.perfilInfo = perfilInfo
  },

  ['setLoginInfo'](state, { loginInfo }) {
    state.loginInfo = loginInfo
  },

  ['setLoggedIn'](state, { loggedIn }) {
    state.loggedIn = loggedIn
  },

  ['setAllImages'](state, { images }) {
    state.allImages = images
  }
}

export const actions = {

  async fetchLogin({ commit }, { username, password }) {
    //alert(`${this.$config.STORAGE_MS}/api/storage/upload`)
    //'http://35.232.133.8:5000/graphql' así funciona, cambiar todas las ips :v
    try {

      var response = await this.$axios.post(`/graphql`, {

        query: `
              mutation
              {
                  login(login: { username: "${username}", password: "${password}" }) {token, exp, username } 
              }`,
      })
      commit('setLoginInfo', { loginInfo: response.data.data.login })
      commit('setUser', { user: JSON.parse(atob(response.data.data.login.token.split('.')[1])) })
      commit('setLoggedIn', { loggedIn: true })
      return response
    } catch (error) {
      alert('Wrong data')
      console.error(error)
    }
  },

  fetchLogOff({ commit }) {
    commit('setLoginInfo', { loginInfo: new Object() })
    commit('setUser', { user: new Object() })
    commit('setLoggedIn', { loggedIn: false })
  },


  async fetchUploadImage({ commit }, { formData }) {
    try {
      var response = await this.$axios.post(
        `${this.$config.STORAGE_MS}/api/storage/upload`,
        formData
      )
      return response

    } catch (error) {
      alert('Couldnt upload it')
      console.log(error)
    }
  },
  async fetchRegister({ commit }, { username, password, password_conf }) {
    try {
      var response = await this.$axios.post(`/graphql`, {

        query: `
              mutation
              {
                createUserAUTH(user: { 
                  username: "${username}", 
                  password:"${password}",
                    password_confirmation: "${password_conf}",}) { 
                  id
                }
              }`,
      })
      commit('setUser', { user: response.data.data.createUserAUTH })
    } catch (error) {
      console.error(error)
    }
  },
  async fetchCreatePerfil({ commit }, { idUsuario, nombre }) {
    try {

      var response = await this.$axios.post(`/graphql`, {

        query: `
          mutation
          {
            createPerfil(
            perfil:{
            idUsuario:"${idUsuario}",
            idImagenPerfil:"defaul",
            nombre:"${nombre}",
          }){
            id
            idUsuario
            idImagenPerfil
          }}`,
      })
      commit('setPerfil', { perfil: response.data.data.createPerfil })
    } catch (error) {
      console.error(error)
    }
  },
  async fetchLoadPerfil({ commit }, { idUsuario }) {
    try {
      var response = await this.$axios.post(`/graphql`, {
        query: `{
          getPerfilByIdUsuario(idUsuario:"${idUsuario}"){
              nombre
              texto
              numfollowBy
              numfollowers
          }
      }`,
      })
      commit('setPerfilInfo', { perfilInfo: response.data.data.getPerfilByIdUsuario })
    } catch (error) {
      console.error(error)
    }
  },

  async fetchAllImages({ commit }) {

    // this.$storageApi.get(`/`).then(response => {
    //   // console.log(response.data)
    //   this.commit('setAllImages', { images: response.data })
    // })

    this.$axios.post(`/graphql`, {
      query: `{
          allImages {
            id
            name
            description
            url
          }
        }`
    }).then((response) => {
      console.log(response.data.data.allImages)
      this.commit('setAllImages', { images: response.data.data.allImages })
    })

    // console.log('')
  }
}
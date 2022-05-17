
export const state = () => ({
  user: {},
  loginInfo: {}
})

export const mutations = {
  ['setUser'](state, { user }) {
    state.user = user
  },

  ['setLoginInfo'](state, { loginInfo }) {
    state.loginInfo = loginInfo
  }
}

export const actions = {
  
  async fetchLogin({ commit }, { username, password }) {
    try {
        var response = await this.$axios.post('http://localhost:5000/graphql', {
          query: `
              mutation
              {
                  login(login: { username: "${username}", password: "${password}" }) {token, exp, username } 
              }`,
        })
        commit('setLoginInfo', { loginInfo: response.data.data.login })
        commit('setUser', { user: JSON.parse(atob(response.data.data.login.token.split('.')[1])) })

    } catch (error) {
      alert('Datos incorrectos')
      console.error(error)
    }
  },
  fetchLogOff({ commit }) {
    commit('setLoginInfo', { loginInfo: new Object() })
    commit('setUser', { user: new Object() })
  },

}


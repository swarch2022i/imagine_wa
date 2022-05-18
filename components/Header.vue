<template>
  <v-container grid-list-xs>
    <v-navigation-drawer v-model="sidebar" absolute temporary color="primary">
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense color="primary">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title class="d-flex" justify="center" align="center">
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          <!-- {{ appTitle }} -->
          <v-img height="40" max-width="120" src="/logo-palabra-no-bg.png" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div style="width: 50%">
        <v-text-field
          name="searchBar"
          placeholder="search by #tags, names, ..."
          v-model="searchText"
          class="mt-6 textField"
          height="25"
          :full-width="false"
          @keydown.enter="fetchSearch"
          @click:append="fetchSearch"
          background-color="secondary"
          rounded
          append-icon="mdi-magnify"
          color="white"
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          class="primary"
          dense
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi-home' },
        { title: 'Log in', path: '/login', icon: 'mdi-account' },
        { title: 'Sign up', path: '/register', icon: 'mdi-account' },
      ],
      searchText: null,
    }
  },
  methods: {
    fetchSearch() {
      this.$router.push(`/search/${encodeURIComponent(this.searchText)}`)
    },
  },
}
</script>

<style lang="css" scoped>
.mx-auto {
  height: 210px;
  width: 180px;
}

.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  /* display: flex !important; */
  /* align-items: center !important; */
}

/* .text-field{
  caret-color: aqua;
  border-radius: 10px !important;
} */
</style>
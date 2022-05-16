<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0" class="primary">
          <div class="text-center">
            <h1 class="mb-2">Log in</h1>
          </div>
          <v-img class="mx-auto" src="/login.png" />

          <v-card-text>
            <v-form>
              <v-text-field
                label="Enter your username"
                name="username"
                prepend-inner-icon="mdi-account"
                type="text"
                class="rounded-0"
                background-color="primary"
                outlined
                color="light"
              ></v-text-field>
              <v-text-field
                label="Enter your password"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                background-color="primary"
                class="rounded-0"
                outlined
                color="light"
              ></v-text-field>
              <v-btn class="rounded-0 accent" color="#000000" x-large block dark
                >Login</v-btn
              >
              <v-card-actions class="justify-center text-subtitle-2">
                Don't have an account yet?
                <NuxtLink
                  class="pl-2 ml-6"
                  style="color: #ffffff"
                  to="/register"
                  >Sign Up
                </NuxtLink>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'app-login',
  data(){
            return{
                login : {
                    type : Object}

            }
        },
        async mounted(){
            try{
                var result = await this.$axios({
                    method: "POST",
                    url: "http://localhost:5000/graphql",
                    data: {
                        query: `
                        mutation
                        {
                             login(login: { username: "nicolas23", password: "123456" }) { token, exp, username } 
                        }
                        `
                    }
                });
                this.login = result.data.data.login;
                console.log(this.login)
            }catch(error){
                console.error(error);
            }
        },
}

</script>

<style lang="css" scoped>
.mx-auto {
  height: 210px;
  width: 210px;
}
</style>

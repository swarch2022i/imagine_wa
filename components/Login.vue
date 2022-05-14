<template>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">         
            <v-card elevation="0">
              <div class="text-center">
                <h1 class="mb-2">Login</h1>
              </div>
                <v-img class="mx-auto" src="/vuetify-logo.svg" />
              <v-card-text >
                <v-form>
                  <v-text-field label="Enter your username" name="username" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined></v-text-field>
                  <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                  <v-btn class="rounded-0" color="#000000" x-large block dark>Login</v-btn>
                  <v-card-actions class="justify-center text-h6" >
                    No account? <a href="register" class="pl-2 ml-6" style="color: #ffffff">Sign Up</a>
                  </v-card-actions>
                </v-form>
              </v-card-text>
              <v-card-text class="text-center">
                By continuing, you agree to GIVE US your <h1 class="red--text">PACKS</h1>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  name: 'app-login'
}
</script>

<style lang="css" scoped>
.mx-auto {
  height: 210px;
  width: 180px;

  
}
</style>
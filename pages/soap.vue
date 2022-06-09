<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="6" lg="5">
        <v-card elevation="0" class="primary text-center">
          <v-row>
            <v-btn
              depressed
              x-large
              outlined
              color="white"
              @click="SOAPSpain('Spain')"
            >
              Spain
            </v-btn>
            <v-btn
              depressed
              x-large
              outlined
              color="white"
              @click="SOAPSpain('Poland')"
            >
              Poland
            </v-btn>
            <v-btn
              depressed
              x-large
              outlined
              color="white"
              @click="SOAPSpain('United Kingdom')"
            >
              United Kingdom
            </v-btn>
          </v-row>
          <v-row>
              <v-col>
              <v-row>
              <h1 class="mb-2">Contry :</h1>
              </v-row>
              <v-row>
                  <h2 class="mb-2">name : {{country.name}}</h2>
              </v-row>
              <v-row>
                  <h2 class="mb-2">population : {{country.population}}</h2>
              </v-row>
              <v-row>
                  <h2 class="mb-2">capital : {{country.capital}}</h2>
              </v-row>
              <v-row>
                  <h2 class="mb-2">currency : {{country.currency}}</h2>
              </v-row>
              </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      country: {
        name: '',
        population: 0,
        capital: '',
        currency: '',
      },
    }
  },
  methods: {
    async SOAPSpain(country) {
      try {
        var response = await this.$axios.get(
          `${this.$config.SOAP_URL}${country}`
        )

        this.country = response.data

      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
}
</script>

<style lang="css" scoped>
</style>

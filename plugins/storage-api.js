export default function({ $axios, $config }, inject) {
  // Create a custom axios instance
  const api = $axios.create({})

  // Set baseURL to something different
  api.setBaseURL(`${$config.STORAGE_MS}`)

  console.log('golaaaaaaaaaaaa')
    // Inject to context as $api
  inject('storageApi', api)
}
<template>
  <div v-if="loggedIn">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="6" lg="8">
          <v-card class="primary">
            <v-container class="fill-height" fluid>
              <v-row align="center" justify="center" dense>
                <v-col cols="12" sm="10" md="10" lg="10">
                  <v-card elevation="0" class="primary">
                    <v-form>
                      <h1 class="mb-2">Name</h1>
                      <v-text-field
                        label="Enter image's name"
                        :rules="[() => !!name || 'This field is required']"
                        type="text"
                        class="rounded-0"
                        background-color="primary"
                        outlined
                        color="light"
                        v-model="name"
                      ></v-text-field>
                      <div
                        class="uploader"
                        @dragenter="OnDragEnter"
                        @dragleave="OnDragLeave"
                        @dragover.prevent
                        @drop="onDrop"
                        :class="{ dragging: isDragging }"
                      >
                        <div class="upload-control" v-show="images.length">
                          <label for="file">Select a file</label>
                          <button @click="restart">Restart</button>
                        </div>

                        <div v-show="!images.length">
                          <i class="fa fa-cloud-upload"></i>
                          <v-icon dark> mdi-cloud-upload </v-icon>
                          <p>Drag your images here</p>
                          <div>OR</div>
                          <div class="file-input">
                            <label for="file">Select a file</label>
                            <input
                              type="file"
                              id="file"
                              @change="onInputChange"
                              multiple
                            />
                          </div>
                        </div>

                        <div class="images-preview" v-show="images.length">
                          <div
                            class="img-wrapper"
                            v-for="(image, index) in images"
                            :key="index"
                          >
                            <img
                              :src="image"
                              :alt="`Image Uplaoder ${index}`"
                            />
                            <div class="details">
                              <span
                                class="name"
                                v-text="files[index].name"
                              ></span>
                              <span
                                class="size"
                                v-text="getFileSize(files[index].size)"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h1 class="mb-2" top-margin="5px">Description</h1>
                      <v-text-field
                        label="Enter image's description"
                        type="text"
                        class="rounded-0"
                        :rules="[
                          () => !!description || 'This field is required',
                        ]"
                        background-color="primary"
                        outlined
                        color="light"
                        v-model="description"
                      ></v-text-field>
                      <h1 class="mb-2">Tags</h1>
                      <v-row dense>
                        <v-col>
                          <v-text-field
                            label="Enter image's tags"
                            type="text"
                            class="rounded-0"
                            background-color="primary"
                            outlined
                            color="light"
                            v-model="tag"
                          ></v-text-field>
                        </v-col>
                        <v-col class="text-right">
                          <v-btn
                            depressed
                            x-large
                            outlined
                            color="white"
                            @click="addTag"
                          >
                            Add Tag
                          </v-btn>
                          <v-btn
                            depressed
                            x-large
                            outlined
                            color="white"
                            @click="resetTags"
                          >
                            Reset Tags
                          </v-btn>
                        </v-col>
                      </v-row>
                      <v-row v-show="tags.length">
                        <div v-for="(tags, index) in tags" :key="index">
                          <v-chip color="white" outlined v-text="tags" />
                        </div>
                      </v-row>
                    </v-form>

                    <v-row
                      class="mt-8"
                      v-show="images.length"
                      align="center"
                      justify="center"
                      dense
                    >
                      <v-btn large color="white" outlined block @click="upload"
                        >Upload
                      </v-btn>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
<div v-else>
    <h1>Please Log In</h1>
</div>
</template> 

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    isDragging: false,
    dragCount: 0,
    files: [],
    images: [],
    name: '',
    description: '',
    tag: '',
    tags: [],
    chip: false,
  }),
  computed: {
    ...mapState({
      user: (state) => state.user,
      loggedIn: (state) => state.loggedIn,
    }),
  },
  methods: {
    ...mapActions({
      fetchUploadImage: 'fetchUploadImage',
    }),

    OnDragEnter(e) {
      e.preventDefault()

      this.dragCount++
      this.isDragging = true
      return false
    },
    OnDragLeave(e) {
      e.preventDefault()
      this.dragCount--
      if (this.dragCount <= 0) this.isDragging = false
    },
    onInputChange(e) {
      const files = e.target.files
      Array.from(files).forEach((file) => this.addImage(file))
    },
    onDrop(e) {
      e.preventDefault()
      e.stopPropagation()
      this.isDragging = false
      const files = e.dataTransfer.files
      Array.from(files).forEach((file) => this.addImage(file))
    },
    addImage(file) {
      if (!file.type.match('image.*')) {
        this.$toastr.e(`${file.name} is not an image`)
        return
      }
      this.files.push(file)
      const img = new Image(),
        reader = new FileReader()
      reader.onload = (e) => this.images.push(e.target.result)
      reader.readAsDataURL(file)
    },
    getFileSize(size) {
      const fSExt = ['Bytes', 'KB', 'MB', 'GB']
      let i = 0

      while (size > 900) {
        size /= 1024
        i++
      }
      return `${Math.round(size * 100) / 100} ${fSExt[i]}`
    },
    restart() {
      this.images = []
      this.files = []
    },
    resetTags() {
      console.log(this.images)
      this.tag = ''
      this.tags = []
    },
    addTag() {
      if (this.tag === '') {
        console.log(images)
        alert('Empty tag')
      } else {
        this.tags.push(this.tag)
        this.tag = ''
      }
    },
    async upload() {
      if (this.name === '' || this.description === '') {
        alert('Please check inputs')
        return 0
      } else {
        const formData = new FormData()
        formData.append('images', this.files[0])
        formData.append('userId', '1') //actualizar luego con el del storgae
        formData.append('name', this.name)
        formData.append('description', this.description)
        // formData.append('commentsId',JSON.stringify(['pepito','pepe']) )
        //strinfy todo :V excepto imagen <3

        this.tags.forEach((tag) => {
           formData.append('tags[]', JSON.stringify(tag));
        })

        try {
          var response = await this.$axios.post(
            'https://34.134.27.239:1234/api/storage/upload',
            formData
          )
          console.log(response.data)
          this.$router.push('/')
        } catch (error) {
          alert('Couldnt upload it')
          console.log(error)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.uploader {
  width: 100%;
  background: #04052e;
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 3px dashed #fff;
  font-size: 20px;
  position: relative;
  margin-bottom: 10px;
  &.dragging {
    background: #fff;
    color: #04052e;
    border: 3px dashed #04052e;
    .file-input label {
      background: #04052e;
      color: #fff;
    }
  }
  i {
    font-size: 85px;
  }
  .file-input {
    width: 200px;
    margin: auto;
    height: 68px;
    position: relative;
    label,
    input {
      background: #fff;
      color: #04052e;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding: 10px;
      border-radius: 4px;
      margin-top: 7px;
      cursor: pointer;
    }
    input {
      opacity: 0;
      z-index: -2;
    }
  }
  .images-preview {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .img-wrapper {
      width: 160px;
      display: flex;
      flex-direction: column;
      margin: 10px;
      height: 150px;
      justify-content: space-between;
      background: #fff;
      box-shadow: 5px 5px 20px #3e3737;
      img {
        max-height: 105px;
      }
    }
    .details {
      font-size: 12px;
      background: #fff;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: self-start;
      padding: 3px 6px;
      .name {
        overflow: hidden;
        height: 18px;
      }
    }
  }
  .images-preview {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .upload-control {
    position: absolute;
    width: 100%;
    background: rgb(179, 179, 187);
    top: 0;
    left: 0;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 10px;
    padding-bottom: 4px;
    text-align: right;
    button,
    label {
      background: #04052e;
      border: 2px solid #04052e;
      border-radius: 3px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
    }
    label {
      padding: 2px 5px;
      margin-right: 10px;
    }
  }
}
</style>
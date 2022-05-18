<template>
    <div >
        <v-row class="pa-3">
            <v-col offset="1" cols="10" class="center"> 
                <center>
                <v-avatar size="200">
                    <img 
                        class="card-img" 
                        src="/defaul.png">
                    <img>
                
                </v-avatar>
                </center>
            </v-col>
                <!------------------ EDIT IMAGE BUTTON ------------------>
            <v-col>
                <center>
                <div>
                    <input type="file" id="imageInput" hidden @change="handleImageChange">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn class="mx-2" fab small color="#32BCC3" right bottom @click="editImage" v-on="on" dark>
                                    <v-icon dark>{{svg.pencil}}</v-icon>
                                </v-btn>
                            </template>
                            <span>Edit Profile </span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn class="mx-2" fab small color="#32BCC3" left bottom @click="editImage" v-on="on" dark>
                                    <v-icon dark>{{svg.camera}}</v-icon>
                                </v-btn>
                            </template>
                            <span>Edit Profile Image</span>
                        </v-tooltip>
                        
                </div>
                </center>
                <!------------------ EDIT IMAGE BUTTON ------------------>
            </v-col>
            <v-col offset="1" cols="10" class="background">
                    <v-row>
                        <v-col>
                            <!------------------ PROFILE DATA ------------------>
                            <div class="text-center mb-3 title text-secundario font-weight-bold">
                                <span></span>{{data.nombre}}
                            </div>
                            <div class="text-center mb-3 pr-5 pl-5 font-weight-regular">
                                {{data.texto}}
                            </div>
                            <div class="text-center mb-3 pr-5 pl-5 font-weight-regular">
                                {{"seguido por"}} {{data.numfollowers}}  {{"-  siguiendo a "}} {{data.numfollowBy}}
                            </div>

                            <!------------------ END PROFILE DATA ------------------>
                            <div class="mt-5">
                                <!-- <div v-if="isAuthenticated && userCredentials.handle === data.handle">
                                    <AppEditProfile :data="data"></AppEditProfile>
                                </div> -->
                            </div>
                        </v-col>
                    </v-row>
            </v-col>
        </v-row>
    </div>
</template>


<script>
    import axios from 'axios'
    import {mdiPencil, mdiPencilOutline, mdiCameraRetakeOutline } from '@mdi/js';
    import { mapGetters } from 'vuex';
    export default {
        name: 'app-profiletop',
        props: {
            data: {
                type: Object,
            }
        },
        data: () => ({
            imgr : '/default.png',
            svg: {
                
                pencil: mdiPencil,
                camera: mdiCameraRetakeOutline
            }
        }),
        methods: {
            handleImageChange(event) {
            },
            editImage() {
            }
        },
    }
</script>
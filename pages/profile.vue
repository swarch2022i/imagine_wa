<template>
    <div>
        <ProfileTop :data = "perfil"/>
        <h1>Aqui van las imagenes</h1>
    </div>
</template>

<script>
import ProfileTop from "../components/ProfileTop.vue";
    import axios from 'axios'
    export default {
    name: "ProfilePage",
    components: { ProfileTop },
        data(){
            return{
                perfil : {
                    type : Object}

            }
        },
        async mounted(){
            try{
                var result = await axios({
                    method: "POST",
                    url: "http://localhost:5000/graphql",
                    data: {
                        query: `
                        {
                            getPerfilByIdUsuario(idUsuario:"1"){
                                nombre
                                texto
                                numfollowBy
                                numfollowers
                            }
                        }
                        `
                    }
                });
                this.perfil = result.data.data.getPerfilByIdUsuario;
                console.log(this.perfil)
            }catch(error){
                console.error(error);
            }
        },
}
</script>

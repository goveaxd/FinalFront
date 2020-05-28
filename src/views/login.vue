<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Correo Electronico"
                    v-model="correo"
                    name="login"
                    prepend-icon=""
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="contraseña"
                    label="Contraseña"
                    name="password"
                    prepend-icon=""
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="validar()">Iniciar Sesión</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {mapActions, mapMutations, mapState, mapGetters} from "vuex"

  export default {
    props: {
      source: String,
    }, 
    data(){
      return{
        correo:"",
        contraseña:""
      }
    },
    computed:{
      
    },
    methods:{
      ...mapGetters("registros",["validLogin"]),
      ...mapMutations("registros",["setLogin"]),
      validar(){
        let login={correo:this.correo,contraseña:this.contraseña}
        this.setLogin(login)
        if(this.validLogin(login)){
          alert("Bienvenido")
        }else {
          alert("Credenciales no válidas")
        }
      }
    }
  }
</script>
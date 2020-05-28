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
                <v-toolbar-title>Registrar</v-toolbar-title>
                <v-spacer></v-spacer>
               
              </v-toolbar>
                  <v-form
                    ref="form"
                    style="padding:16px"
                    v-model="valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="name"
                      :error-messages="nameErrors"
                      :counter="10"
                      label="Nombre"
                      autofocus
                      required
                      @input="$v.name.$touch()"
                      @blur="$v.name.$touch()"
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      :error-messages="emailErrors"
                      label="E-mail"
                      required
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      :error-messages="passwordErrors"
                      label="password"
                      type="password"
                      required
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
                    ></v-text-field>

                    <v-select
                      v-model="select"
                      :items="items"
                      :error-messages="selectErrors"
                      label="Sexo"
                      required
                      @change="$v.select.$touch()"
                      @blur="$v.select.$touch()"
                    ></v-select>
                    <v-checkbox
                      v-model="checkbox"
                      :error-messages="checkboxErrors"
                      label="Estas de acuerdo con las normas"
                      required
                      @change="$v.checkbox.$touch()"
                      @blur="$v.checkbox.$touch()"
                    ></v-checkbox>

                    <v-btn class="mr-4" @click="submit">Registrar</v-btn>
                    <v-btn @click="clear">limpiar Formulario</v-btn>
                  </v-form>
        </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
        <v-card
            max-width="400"
            class="mx-auto"
          >
          {{$data}}
        </v-card>


  </v-app>
</template>

<script>

  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import {mapActions, mapMutations, mapState, mapGetters} from "vuex"

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      password:{ required},
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      valid:false,
      name: '',
      password:'',
      email: '',
      select: null,
      items: [
        'Masculino',
        'Femenino',
        'Otro'
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('Debes de estar de acuerdo para continuar!')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Se requiere una contraseña.')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Selecciona una Opcion')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('El nombre debe contener menos de 10 caracteres')
        !this.$v.name.required && errors.push('Se requiere Nombre.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Introduce un e-mail valido')
        !this.$v.email.required && errors.push('se requiere E-mail')
        return errors
      },
    },

    methods: {
      ...mapMutations("registros",["setRegister"]),
      submit () {
        this.$v.$touch()
        if(this.valid){
          let registro = {nombre:this.name,correo:this.email,sexo:this.select,contraseña: this.password}
          this.setRegister(registro)
          this.clear();
        }
      },
      createTask: function () {
        alert("tarea")
      }
      ,
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.password = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>


<style >
.cardR{
  max-width: 700px;
}
</style>
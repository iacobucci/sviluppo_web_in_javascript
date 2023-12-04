<template>
  <div class="container">
    <b-jumbotron>
      <h1 @click="this.$router.push('/')">Condomini</h1>
      <h4>Registrazione</h4>
      <b-form @submit.prevent="login">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Email" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input id="input-2" type="password" v-model="form.password" placeholder="Password"
            required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-jumbotron>
  </div>
</template>



<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {

      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.form.email,
            password: this.form.password,
          }),
        });

        const data = await response.json();

        // Controlla la risposta dal backend
        if (response.ok) {

          // visualizza popup bootstrap
          this.$bvToast.toast('Registrazione effettuata con successo', {
            title: 'Registrazione',
            variant: 'success',
            solid: true
          })
          
          // Reindirizza alla homepage
          this.$router.push("/");

        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
};
</script>

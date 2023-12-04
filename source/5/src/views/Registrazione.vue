<template>
	<div>
		<h2>Registrazione</h2>
		<div>
			<input v-model="email" type="email" required placeholder="email">
		</div>

		<div>
			<input v-model="password" type="password" required placeholder="password">
		</div>

		<div>
			<input v-model="confermaPassword" type="password" required placeholder="conferma password">
		</div>

		<div>
			<button @click="this.registrazione()">Registrati</button>
		</div>
		<p v-if="error" style="color: red;">{{ error }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			confermaPassword: '',
			error: null,
		};
	},
	methods: {
		async registrazione() {
			try {

				if (this.password != this.confermaPassword) {
					this.error = 'Le password non corrispondono';
					console.log(this.error);
					return;
				}


				const response = await fetch('/api/registrazione', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: this.email,
						password: this.password,
					}),
				});

				const data = await response.json();

				if (response.error != undefined) {
					// Login success
					// Salva il token nel localStorage o in un cookie
					localStorage.setItem('token', JSON.stringify(data.token));
					localStorage.setItem('admin', (data.admin == "true") ? true : false);

					// Puoi anche reindirizzare l'utente a un'altra pagina
					this.emitter.emit("reload-homepage", null);
					this.$router.push('/dashboard');
				} else {
					// Login fallito
					this.error = data.error;
				}
			} catch (error) {
				console.error('Errore durante il login:', error);
			}
		},
	},
};
</script>
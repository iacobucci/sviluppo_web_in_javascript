<template>
	<div>
		<h2>Login</h2>
		<div>
			<input v-model="email" type="email" required placeholder="email">
		</div>

		<div>
			<input v-model="password" type="password" required placeholder="password">
		</div>

		<div>
			<button @click="this.login()" type="submit">Login</button>
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
			error: null,
		};
	},
	methods: {
		async login() {
			try {
				const response = await fetch('/api/login', {
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

				if (!data.error) {
					localStorage.setItem('token', data.token);
					localStorage.setItem('admin', data.admin);
					localStorage.setItem('email', data.email);

					this.emitter.emit("reload-homepage");
					this.$router.push('/');
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
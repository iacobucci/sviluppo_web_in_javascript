<template>
	<div>
		<div v-if="loggedIn">
			<h2>Dashboard</h2>
			<p>Benvenuto nella tua dashboard</p>
			<div v-if="admin">
				<p>Sei un admin</p>
			</div>

			<div v-else>
				<p>Non sei un admin</p>
			</div>
		</div>
		<div v-else>
			<h2>Non sei loggato</h2>
			<p>Per accedere alla dashboard devi prima effettuare il <router-link to="/login">Login</router-link> oppure la
				<router-link to="/registrazione">Registrazione</router-link>
			</p>
		</div>
	</div>
</template>
<script>

export default {
	data() {
		return {
			loggedIn: false,
			admin: false,
		};
	},
	methods: {
		async homepage() {
			if (localStorage.getItem('token') == null)
				this.loggedIn = false;
			else
				this.loggedIn = true;

			if (localStorage.getItem('admin') == null || localStorage.getItem('admin') == "false")
				this.admin = false;
			else
				this.admin = true;
		},
	},
	mounted() {
		this.homepage();

		this.emitter.on("reload-homepage", (n) => {
			this.homepage();
		});
	},
};
</script>

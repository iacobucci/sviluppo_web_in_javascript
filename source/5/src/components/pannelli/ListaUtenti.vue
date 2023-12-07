<template>
	<h3>Utenti</h3>
	<div v-for="utente in utenti" :key="utente.id">
		<Utente :utente="utente" />
	</div>
</template>

<script>
import Utente from '../entries/Utente.vue';

export default {
	name: 'ListaUtenti',
	data() {
		return {
			utenti: [],
		};
	},
	methods: {
		getUtenti() {
			fetch('/api/listusers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': localStorage.getItem('token')
				},
			}).then((response) => {
				return response.json();
			}).then((data) => {
				this.utenti = data;
			}).catch((error) => {
				console.error('Errore:', error);
			});
		},
	},
	mounted() {
		this.getUtenti();
	},
	components: {
		Utente,
	},
};

</script>
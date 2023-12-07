<template>
	<div>
		Utente {{ utente.id }} {{ utente.email }}
	</div>
</template>
<script>
import ListaResidenti from '../pannelli/ListaResidenti.vue';

export default {
	name: 'Utente',
	props: {
		utente: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			residente: null,
		};
	},
	methods: {
		inviaVersamento() {
			fetch('/api/associautente', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': localStorage.getItem("token"),
				},
				body: JSON.stringify({ idUtente: this.utente.id, idResidente: this.residente.id }),
			})
				.then(response => response.json())
				.then(data => {
					if (data.error) {
						alert(data.error);
						return;
					}
				})
				.catch((error) => {
					console.error('Errore:', error);
				});
		},

	},
	mounted() {
	},
	components: {
		ListaResidenti,
	},

};
</script>
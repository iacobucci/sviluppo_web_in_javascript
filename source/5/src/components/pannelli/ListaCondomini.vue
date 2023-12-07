<template>
	<h3>Condomini</h3>
	<div v-for="condominio in condomini" :key="condominio.id">
		<Condominio :condominio="condominio" />
	</div>
</template>

<script>
import Condominio from '../entries/Condominio.vue';

export default {
	name: 'ListaCondomini',
	data() {
		return {
			condomini: [],
		};
	},
	methods: {
		getCondomini() {
			fetch('/api/listcondomini', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': localStorage.getItem('token')
				},
			}).then((response) => {
				return response.json();
			}).then((data) => {
				this.condomini = data;
			}).catch((error) => {
				console.error('Errore:', error);
			});
		},
	},
	mounted() {
		this.getCondomini();
	},
	components: {
		Condominio,
	},
};

</script>
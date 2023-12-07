<template>
	<h3>Residenti di {{ condominio.via }}</h3>
	<div v-for="residente in residenti" :key="residente.id">
		<Residente :residente="residente" />
	</div>
</template>
<script>
import Residente from '../entries/Residente.vue';
export default {
	name: "ListaResidenti",
	props: {
		condominio: {
			type: Object
		},
	},
	watch: {
		condominio() {
			this.getResidenti();
		}
	},
	data() {
		return {
			residenti: [],
		};
	},
	methods: {
		getResidenti() {
			fetch('/api/listresidenti', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': localStorage.getItem('token')
				},
				body: JSON.stringify({
					idCondominio: this.condominio.id
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				this.residenti = data;
			}).catch((error) => {
				console.error('Errore:', error);
			});
		}
	},
	mounted() {
		this.getResidenti();
	},
	components: {
		Residente,
	},
}

</script>
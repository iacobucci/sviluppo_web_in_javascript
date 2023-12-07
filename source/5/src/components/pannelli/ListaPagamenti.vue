<template>
	<h3>Pagamenti di {{ residente.nome }} {{ residente.cognome }}</h3>
	<h4>Da versare</h4>
	<div v-for="pagamento in pagamenti.daVersare" :key="pagamento.id">
		<Pagamento :pagamento="pagamento" />
	</div>

	<h4>Versati</h4>
	<div v-for="pagamento in pagamenti.versati" :key="pagamento.id">
		<Pagamento :pagamento="pagamento" />
	</div>
</template>
<script>

import Pagamento from '../entries/Pagamento.vue';
export default {
	name: "ListaPagamenti",
	props: {
		residente: {
			type: Object,
		},
	},
	data() {
		return {
			pagamenti: [],
		};
	},
	watch: {
		residente() {
			this.getPagamenti();
		}
	},
	methods: {
		getPagamenti() {
			fetch('/api/listpagamenti', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': localStorage.getItem('token')
				},
				body: JSON.stringify({
					idResidente: this.residente.id
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				this.pagamenti = data;
			}).catch((error) => {
				console.error('Errore:', error);
			});
		},
		completaPagamento(pagamento) {
			this.pagamenti.daVersare.splice(this.pagamenti.daVersare.indexOf(pagamento), 1);
			this.pagamenti.versati.push(pagamento);
		}
	},
	mounted() {
		this.getPagamenti();

		this.emitter.on("pagamento-completato", (pagamento) => {
			this.completaPagamento(pagamento);
		});
	},
	components: {
		Pagamento,
	},
}

</script>
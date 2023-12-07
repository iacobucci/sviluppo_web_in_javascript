<template>
	<div>
		Pagamento {{ pagamento.id }}: {{ pagamento.importo }} {{ pagamento.versato }}
		<div v-show="pagamento.versato < pagamento.importo && this.admin">
			<input type="number" v-model="versamento" :max="pagamento.importo - pagamento.versato" min="0"
				v-on:keyup.enter="inviaVersamento">
		</div>
	</div>
</template>
<script>

export default {
	name: 'Pagamento',
	props: {
		pagamento: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			versamento: 0,
			residente: null,
			admin: false
		};
	},
	methods: {
		inviaVersamento() {
			fetch('/api/versapagamento', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': localStorage.getItem("token"),
				},
				body: JSON.stringify({ idPagamento: this.pagamento.id, versamento: this.versamento }),
			})
				.then(response => response.json())
				.then(data => {
					if (data.error) {
						alert(data.error);
						return;
					}
					// con questo aggiornamento, il componente reagisce al cambiamento
					this.pagamento.versato += this.versamento;
					this.emitter.emit("pagamento-completato", this.pagamento);
				}).catch((error) => {
					console.error('Errore:', error);
				});
		},

	},
	mounted() {
		this.emitter.on("residente-selezionato", (residente) => {
			this.residente = residente;
		});
		this.admin = localStorage.getItem("admin") == "true";
	},

};
</script>
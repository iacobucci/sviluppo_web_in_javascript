<template>
	<div @click="selezionaCondominio()">
		Condominio {{ condominio.via }}
	</div>
</template>
<script>

export default {
	name: 'Condominio',
	props: {
		condominio: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
		};
	},
	methods: {
		selezionaCondominio() {
			this.emitter.emit("condominio-selezionato", this.condominio);
		},
	},
};
</script>
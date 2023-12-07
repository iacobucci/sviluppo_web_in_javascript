<template>
	<div @click="selezionaResidente()">
		Residente {{ residente.nome }}
	</div>
</template>
<script>

export default {
	name: 'Residente',
	props: {
		residente: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
		};
	},
	methods: {
		selezionaResidente() {
			this.emitter.emit("residente-selezionato", this.residente);
		},
	},
};
</script>
<template>
	<router-link to="/" @click.prevent="logout">Logout</router-link>
</template>
<script>
export default {
	name: 'LogoutButton',
	methods: {
		logout() {
			localStorage.removeItem('token');
			localStorage.removeItem('admin');
			localStorage.removeItem('email');
			this.$router.push('/');
			this.emitter.emit("reload-homepage", null);
		},
	},
};
</script>
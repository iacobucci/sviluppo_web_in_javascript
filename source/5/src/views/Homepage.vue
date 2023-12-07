<template>
	<div>
		<div v-show="loggedIn">

			<div v-if="!admin">
				<h2>Ciao, {{ residenteSelezionato?.nome }} {{ residenteSelezionato?.cognome }} !</h2>
				<div class="container">
					<div class="content">
						<div v-if="this.residenteSelezionato">
							<ListaCondomini />
						</div>
					</div>
					<div class="content">
						<div v-if="condominioSelezionato">
							<ListaPagamenti :residente="residenteSelezionato" />
						</div>
					</div>
				</div>
			</div>

			<div v-if="admin">
				<h2>Dashboard amministratore</h2>
				<div class="container">
					<div class="content">
						<ListaCondomini />
					</div>
					<div class="content">
						<div v-if="condominioSelezionato">
							<ListaResidenti :condominio="condominioSelezionato" />
						</div>
					</div>
					<div class="content">
						<div v-if="residenteSelezionato">
							<ListaPagamenti :residente="residenteSelezionato" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-show="!loggedIn">
			<h2>Non sei loggato</h2>
			<p>Per accedere alla dashboard devi prima effettuare il <router-link to="/login">Login</router-link> oppure la
				<router-link to="/registrazione">Registrazione</router-link>
			</p>
		</div>
	</div>
</template>
<script>

import ListaCondomini from '../components/pannelli/ListaCondomini.vue';
import ListaResidenti from '../components/pannelli/ListaResidenti.vue';
import ListaPagamenti from '../components/pannelli/ListaPagamenti.vue';

export default {
	data() {
		return {
			loggedIn: false,
			admin: false,
			email: null,
			condominioSelezionato: null,
			residenteSelezionato: null
		};
	},
	methods: {
		reload() {
			if (localStorage.getItem('admin') == "false") {
				this.admin = false;
			}
			else {
				this.admin = true;
			}

			if (localStorage.getItem('token') == null) {
				this.loggedIn = false;
				this.email = null;
			}
			else {
				this.loggedIn = true;
				this.email = localStorage.getItem('email');
				this.residenteDefault();
			}
		},

		async residenteDefault() {
			if (this.admin) {
				this.residenteSelezionato = null;
			}
			else {
				let residenteSelezionato = null;
				try {
					let response = await fetch('/api/getresidente', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'x-auth-token': localStorage.getItem('token')
						},
					})
					residenteSelezionato = await response.json();
				}
				catch (error) {
					console.error('Errore durante il login:', error);
				}

				if (residenteSelezionato.error) {
					alert(residenteSelezionato.error);
					return;
				}
				this.residenteSelezionato = residenteSelezionato;
			}
		}
	},
	mounted() {
		this.reload();

		this.emitter.on("reload-homepage", () => {
			this.reload();
		});

		this.emitter.on("condominio-selezionato", (condominio) => {
			this.condominioSelezionato = condominio;
			this.residenteDefault();
		});

		this.emitter.on("residente-selezionato", (residente) => {
			this.residenteSelezionato = residente;
		});
	},
	components: {
		ListaCondomini,
		ListaResidenti,
		ListaPagamenti,
	},
};
</script>

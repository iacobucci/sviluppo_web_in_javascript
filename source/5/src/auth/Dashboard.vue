<template>
    <div class="container">
        <b-jumbotron>
            <h1 @click="redirectToHome">Condomini</h1>
            <h4>Dashboard</h4>
            <div>
                email: {{ this.email }}
            </div>
            <div>
                id: {{ this.id }}
            </div>
        </b-jumbotron>
    </div>
</template>

<script>
import { isProxy, toRaw } from 'vue';

export default {
    data() {
        return {
            email: "",
            id: ""
        };
    },
    methods: {
        async redirectToHome() {
            this.$router.push('/'); // Reindirizza alla homepage
        },
        async fetchStatus() {
            let jwt = localStorage.getItem("jwt");

            if (jwt == null) {
                this.$router.push('/login');
                return;
            }

            try {
                const response = await fetch("/api/status", {
                    headers: {
                        Authorization: `Bearer ${jwt}`, // Aggiungi l'header JWT
                    },
                });

                if (response.ok) {
                    const proxyData = await response.json(); // Salva lo status nella variabile status
                    this.email = proxyData.user.email; // Rimuovi l'oggetto Proxy
                    this.id = proxyData.user.id; // Rimuovi l'oggetto Proxy
                } else {
                    console.error("Error fetching status");
                }
            } catch (error) {
                console.error("Error fetching status:", error);
            }
        },
    },
    mounted() {
        this.fetchStatus(); // Chiama la funzione di caricamento quando il componente è montato
    },
};
</script>
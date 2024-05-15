const { createApp } = Vue

createApp({

    data() {
        return {
            numero: null,
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/int'
        }
    },
    methos: {
        getNumero() {
            axios.get(this.indirizzo).then((result) => {

                let codiceRisposta = `${result.status}/${result.statusText}`;
                let datiRisposta = result.data;

                console.log("Ricevuta risposta", codiceRisposta, datiRisposta);

                this.numero = datiRisposta.response;

            });
        }
    },
    mounted() {
        console.log("App montata");
        this.getNumero();

    }




}).mount('#app')
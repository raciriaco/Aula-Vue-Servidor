new Vue({
    el:'#app',
    data: {
        titulo:'Ciclo de vida'
    },
    beforeCreated(){
        console.log('Antes de criar');
//
    },
    created(){
        console.log('Criada');
    },
    el: '#app',
    template:`
    <div>
        <h1>{{titulo}}</h1>
        <button @click="titulo += '?'">Alterar </button>
        <button @click="$destroy()">Destruir</button>

    </div>
    `,
    beforeMount(){
        console.log('Antes de montar');
    },
    mounted(){
        console.log('DOM Montado');
    },
    beforeUpdate(){
        console.log('Antes de atualizar');
    },
    updated(){
        console.log('Atualizado');
    },
    methods: {

    },
    beforeDestroy(){
        console.log('Antes de destruir');
    },
    destroyed(){
        console.log('Destruido');
    },

}

)


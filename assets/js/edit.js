new Vue({
    el:'#app',
    data(){
        return{
            msg:'the editional page',
            data:['name','author','category','description']
        }
    },
    delimiters:['[[',']]'],
})
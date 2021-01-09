new Vue({
    el:'#app',
    data(){
        return{
            admins:'this is library admin page',
            data:['ID','name','author','category','description','handle']
        }
    },
    delimiters:['[[',']]'],
})
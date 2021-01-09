new Vue({
    el:'#app',
    data(){
        return{
            msg: 'this is an add book page',
            data:['name','author','category','description']
        }
    },
    delimiters:['[[',']]'],
})
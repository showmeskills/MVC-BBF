const SafeRequest = require('../utils/SafeRequest');

class IndexBookModel{
    constructor(){}
    
    getData(){
       let safeRequest = new SafeRequest('/books');
       return safeRequest.fetch();
    }

    addData(opt){
        let safeRequest = new SafeRequest('/books/book');
        return safeRequest.fetch({
            method: 'POST',
            params:opt
        })
    }

    getEditData(id){
        let safeRequest = new SafeRequest(`/books/book/${id}`);
        return safeRequest.fetch()
    }

    editData(opt){
        console.log('editData(opt)===>',opt);
        let safeRequest = new SafeRequest(`/books/book`);
        return safeRequest.fetch({
            method: 'PUT',
            params:opt
        });
    }

    deleteData(id){
        let safeRequest = new SafeRequest(`/books/book/${id}`);
        return safeRequest.fetch({
            method:'DELETE',
            params:id
        })
    }
}

module.exports = IndexBookModel;
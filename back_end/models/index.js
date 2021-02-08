const db = require('./db_promise')

let result = {
    code: 0,
    message: '',
    data: []
}

class SafeRequest {
    constructor() { }
    getData() {
        return db.query(`SELECT * FROM t_book`);
    }
    addData(opt) {
        return new Promise(async (resolve, reject) =>{        
            try {
                let data = await db.query(`INSERT INTO t_book SET ?`, opt);
                if (data.affectedRows > 0) {
                    result.message = '添加成功';
                    result.data =  data
                    resolve(result)
                } else {
                    result.message = '添加失败'
                    result.code = 1
                    reject(result)
                }
            } catch (err) {
                result.message = '添加失败'
                result.code = 1
                result.status = 500

                reject(result)
            }
        })
    }

    // get edit id of the data
   
     getEditData(id) {       
        return new Promise(async (resolve, reject) =>{
            try {
                let data = await db.query(`SELECT * FROM t_book WHERE id=?`, [id]);
                if (data.length > 0) {
                    result.message = '获取成功';
                    result.data = data[0];
                    resolve(result)
                } else {
                    result.message = '获取失败'
                    result.code = 1
                    reject(result)
                }
    
            } catch (err) {  
                result.message = '获取失败'
                result.code = 1
                result.status = 500
                reject(result)
            }
        })
    }

    // 修改图书
    editData(opt) {

        return new Promise( async (resolve, reject) =>{
            try {
                let data = await db.query(`UPDATE t_book SET name=?, author=?, category=?, description=? WHERE id=?`, [opt.name, opt.author, opt.category, opt.description, opt.id]);
    
                if (data.affectedRows > 0) {
                    result.message = '修改成功';
                    resolve(result)
                } else {
                    result.message = '修改失败'
                    result.code = 1
                    reject(result)
                }
            } catch (err) {
                result.message = '修改失败'
                result.code = 1
                result.status = 500
                reject(result)
            }
        })
    }

    // 删除图书
    deleteData(id) {
        return new Promise( async (resolve, reject) => {
            try {
                let data = await db.query(`DELETE FROM t_book WHERE id=?`, [id]);
    
                if (data.affectedRows > 0) {
                    result.message = '删除成功';
                    resolve(result)
                } else {
                    result.message = '删除失败'
                    result.code = 1
                    reject(result)
                }   
    
            } catch (err) {
                result.message = '删除失败'
                result.code = 1
                result.status = 500
                reject(result)
            }
        })

    }
}

module.exports = SafeRequest
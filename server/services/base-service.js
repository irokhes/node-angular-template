
module.exports = class BaseService  {
     constructor(){
        this.model ={};
     }
     success(result){
         this.model.data = result;
         return this.model; 
     }
     fail(err, status, type){
        var error = {msg: err}
        if(status){
            error.status = status;
        }
        if(type){
            error.type = type;
        }
        return error;
     }
}
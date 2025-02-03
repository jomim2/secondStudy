const ExpressRouter = ()=>{
    class ExpRouter{
        constructor(){
            this.express = require('express');
        }

        createExp(){
            return this.express.Router();
        }
    }
    const expObj = new ExpRouter();
    return expObj.createExp();
}
module.exports = ExpressRouter;


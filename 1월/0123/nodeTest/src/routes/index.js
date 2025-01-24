const express = require("express");
const router = express.Router();
// const app = express();
router.get('/',(req,res)=>{
    res.send("hello Express");
});


// app.listen(3000,()=>{
//     console.log("3000 is ready");
// });
module.exports = router;
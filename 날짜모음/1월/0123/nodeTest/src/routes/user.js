const express = require("express");
// const app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("hello, user");
});

// app.listen(3000,()=>{
//     console.log("3000 is ready");
// });
module.exports = router;
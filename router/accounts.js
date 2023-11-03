const router = require('express').Router();
const {accountsController} = require("../controllers")

router.get('/',(req,res,next) =>{
  if(req.body.password.length > 8 && req.body.password === req.body.confirmPassword){
    accountsController.register(req,res,next);
    return;
    next();
}else{
  return res.status(400).send({
    success: false,
    message: "Passwords do not match"
  });
}
},
accountsController.getData);

module.exports = router;
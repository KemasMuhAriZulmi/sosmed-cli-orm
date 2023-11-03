const router = require("express").Router();
const { userController } = require("../controller");

router.post("/", userController.create);
router.post("/login", userController.login);
router.get("/keepLogin", userController.keepLogin, 
// di pindahkan ke middleware dan di export module
(req, res, next) => {
  try{
    if(!req.token){
      return res.status(200).send({
        codestatus: 200,
        succes: true,
        message: "Login berhasil",
        result : req.token
      });
    }else{
      const verifyToken =jwt.verify(req.token, process.env.SCRT_TKN)
      if(!verifyToken){
        return res.status(401).send({
          codestatus: 401,
          succes: false,
          message: "Unauthorised request",
        })
      }
      req.userData = verifyToken;
      next();
      return res.status(401).send({
        codestatus: 401,
        succes: false,
        message: "Login gagal",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(error.codestatus || 500).send(error);
  }
});
module.exports = router;
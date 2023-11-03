const jwt = require("jsonwebtoken");
const {accounts}=require("../models")
const bcrypt = require("bcrypt")

module.exports ={
  getData : async(req,res,next) =>{
    try {
      const result = await accounts.findAll();
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  create : async (req,res,next) =>{
    try {
      const result = await accounts.create(req.body);
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  update : async (req,res,next) =>{
    try {
      const result = await accounts.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  delete : async (req,res,next) =>{
    try {
      const result = await accounts.destroy({
        where: {
          id: req.params.id
        }
      });
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  getOne : async (req,res,next) =>{
    try {
      const result = await accounts.findOne({
        where: {
          id: req.params.id
        }
      });
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  // Authenticate user

  register : async (req,res,next) =>{
    try {
      const result = await accounts.create(req.body);
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      req.body.password = hash;
      console.log(req.body);
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  login : async (req,res,next) =>{
    try {
      const result = await accounts.findOne({
        where: {
          email: req.body.email,
          // password: req.body.password
        },
        raw :true,
        // attributes: {
        //   exclude: ['password'],
        // },
      });
      const isvalid = await bcrypt.compare(req.body.password, result.password);
      console.log(isvalid);
      if(isvalid){
        delete result.password;
        return res.status(200).send(result);
      }
      const token = jwt.sign({})//.dataValues di pake kalau mau mengaksess data dan mengedit kalau cuma mau mengakses tidak perlu data values  
      console.log(result);
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
}
const { create_user } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res, next) => {
    try {
      if (
        !req.body.username ||
        (!req.body.password &&
          req.body.password.length <= 8 &&
          req.body.password)
      ) {
        throw {
          codestatus: 400,
          succes: false,
          message: "Username dan password harus diisi",
        };
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  create: async (req, res, next) => {
    console.log("Masuk");
    try {
      const checkUser = await create_user.findAll({
        where: {
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
        },
      });
      if (checkUser.length > 0) {
        console.log("masuk if");
        throw {
          codestatus: 400,
          succes: false,
          message: "Username sudah digunakan",
        };
      } else if (req.body.password !== req.body.confirmpassword) {
        throw {
          codestatus: 400,
          succes: false,
          message: "Password tidak sama",
        };
      } else if (req.body.password.length <= 8) {
        throw {
          codestatus: 400,
          succes: false,
          message: "Password minimal 8 karakter",
        };
      } else if (
        !req.body.email.includes("@") &&
        !req.body.email.includes(".com")
      ) {
        throw {
          codestatus: 400,
          succes: false,
          message: "Email tidak valid",
        };
      } else {
        console.log("masuk else");
        const result = await create_user.create(req.body);
        const {id,username,email,status} = result;
        const jwtToken = jwt.sign({
          id: id,
          username: username,
          email: email,
          status : status,
        },
        process.env.SCRT_TKN,
        {
          expiresIn: "1h"
        },
        );
        return res.status(201).send({
          codestatus: 201,
          succes: true,
          message: "User berhasil ditambahkan",
          data: await create_user.findAll(),
        });
      }
    } catch (error) {
      console.log("Masuk catch");
      console.log(error);
      return res.status(error.codestatus || 500).send(error);
    }
  },
  keepLogin : async (req, res, next) => {
    try {
      // decripton token
      const result = await create_user.findOne({
        where: {
          id: req.userData.id,
        },
        raw : true,
      });
      console.log(result);
      const {id,username,email,status,role} = result;
      const jwtToken = jwt.sign({
        id: id,
        role: role,
        status : status,
      },
      process.env.SCRT_TKN,
      {
        expiresIn: "1h"
      },
      )
      return res.status(200).send({
        codestatus: 200,
        succes: true,
        message: "Login berhasil",
        result : {
          id: id,
          username: username,
          email: email,
          status : status,
          role: role,
          token: jwtToken
        }
      })
    } catch (error) {
      console.log(error);
      return res.status(error.codestatus || 500).send(error);
    }
  },
};

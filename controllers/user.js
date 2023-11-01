const { User } = require("../models");

module.exports = {
  create: async (req, res, next) => {
    console.log("Masuk");
    try {
      const checkUser = await User.findAll({
        where: {
          username: req.body.username,
          email: req.body.email,
        },
      });
      if (checkUser.length > 0) {
        console.log("masuk if");
        throw {
          codestatus: 400,
          succes: false,
          message: "Username sudah digunakan",
        };
      } else {
        console.log("masuk else");
        const result = await User.create(req.body);
        return res.status(201).send({
          codestatus: 201,
          succes: true,
          message: "User berhasil ditambahkan",
          data: await User.findAll(),
        });
      }
    } catch (error) {
      console.log("Masuk catch");
      console.log(error);
      return res.status(error.codestatus || 500).send(error);
    }
  },
};

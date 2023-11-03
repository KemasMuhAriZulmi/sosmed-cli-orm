const { posts } = require("../models");

module.exports = {
  getData: async (req, res, next) => {
    try {
      const data = await posts.findAll();
      return res.status(200).send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  // create : async (req,res,next) => {
  //   try {
  //     const data = await posts.create(req.body);
  //     res.status(200).send(data);
  //   }
  //   if (req.body.post.length > 150) {
  //     res.status(400).send({
  //       message: "Post is too long"
  //     })
  //   }else {
  //     res.status(200).send(req.body);
  //   }
  //   catch (error) {
  //     console.log(error);
  //     res.status(500).json(error);
  //   }
  // },
  update: async (req, res, next) => {
    try {
      const results = await post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).send(results);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const data = await posts.create(req.body);
      if (req.body.post.length > 150 && req.body.image.length > 2) {
        return res.status(400).send({
          message: "Post is too long",
        });
      } else {
        return res.status(200).send(req.body);
      }
      return res.status(200).send(data);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};

//   create : async (req,res,next) => {
//     try {
//       const data = await accounts.create(req.body);
//       res.status(200).json(data);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   },
// }

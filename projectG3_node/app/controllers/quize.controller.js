const db = require("../models");
const Quize = db.quize;

const Op = db.Sequelize.Op;

// Retrieve all Quizes from the database.
// exports.findAll = (req, res) => {
//     const quizname = req.body.quizname;
//     var condition = quizname ? { quizname: { [Op.like]: `%${quizname}%` } } : null;
  
//     Quize.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving quizes."
//         });
//       });
// };

//list of quiz
exports.findAllQuizes = (req, res) => {
    
  Quize.findAll({  })
    .then(data => {
      res.send(data);
      console.log(data);
      
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


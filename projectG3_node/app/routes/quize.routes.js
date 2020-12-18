module.exports = app => {
    const quizes = require("../controllers/quize.controller.js");
  
    var router = require("express").Router();
  
    //Retrieve all Tutorials
    // router.get("/", quizes.findAll);
//dummy data
router.get("/", quizes.findAllQuizes);
  
    app.use('/api/quizes', router);
  };
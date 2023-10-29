const Author = require ("../models/author")

const addAuthor = (req,res) =>{
    console.log(req.body);
    const author = new Author(req.body);
    author
      .save()
      .then(() => {
        res.status(201).json({
          model: author,
          message: "author créé ",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "erreur d'extraction ",
        });
      }); 

}

module.exports ={
    addAuthor
}
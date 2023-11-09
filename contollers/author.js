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

const fetchAuthors = (req,res) => {
  console.log(req.params.id);
    Author.find()
      .then((authors) => {
        res.status(200).json({
          model: authors,
          message: "success",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "erreur d'extraction ",
        });
      });
}


const getAuthorById = (req,res) => {
  console.log(req.params.id);
    Author.findOne({ _id: req.params.id })
      .then((author) => {
        if (!author) {
          res.status(404).json({
            message: "objet non trouvé ",
          });
          return;
        }
        res.status(200).json({
          model: author,
          message: "objet trouvé",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "erreur d'extraction ",
        });
      });

}

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((author) => {
        if (!author) {
          return res.status(404).json({
            message: "author non trouvé",
          });
        } else {
          return res.status(200).json({
            model: author,
            message: "author modifié",
          });
        }
      })
      .catch((error) => {
        return res.status(400).json({
          error: error.message,
          message: "Problème d'exécution de la mise à jour",
        });
      });
  }

const deleteAuthor = (req, res) => {
  Author.deleteOne({_id : req.params.id})
  .then (()=> res.status(200).json({message:"objet supprimé"}))
  .catch((error) => res.status(400).json({error}))
  console.log(req.params.id)
  res.send(req.body.id)

}


module.exports ={
    addAuthor, 
    fetchAuthors,
    getAuthorById, 
    updateAuthor,
    deleteAuthor

}
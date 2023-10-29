const Book = require ("../models/book")
const fetchBooks = (req,res) => {
    console.log(req.params.id);
      Book.find().populate("author")
        .then((books) => {
          res.status(200).json({
            model: books,
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

const addBooks = (req, res) => {
    console.log(req.body);
    const book = new Book(req.body);
    book
      .save()
      .then(() => {
        res.status(201).json({
          model: book,
          message: "objet créé ",
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "erreur d'extraction ",
        });
      }); 
}

const getBookById = (req,res) => {
    console.log(req.params.id);
      Book.findOne({ _id: req.params.id }).populate("author")
        .then((book) => {
          if (!book) {
            res.status(404).json({
              message: "objet non trouvé ",
            });
            return;
          }
          res.status(200).json({
            model: book,
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

const updateBook = (req,res) => {
    Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
        (book) => {
          if (!book) {
            res.status(404)({
              message: "Objet non trouvé",
            });
          } else
            res
              .status(200)
              .json({
                model: book,
                message: "Objet modifié",
              })
              .catch((error) => {
                res.status(400).json({
                  error: error.message,
                  message: "problème d'extraction ",
                });
              });
        }
      );
      res.send(req.body);
}

const deleteBook = (req, res) => {
    Book.deleteOne({_id : req.params.id})
    .then (()=> res.status(200).json({message:"objet supprimé"}))
    .catch((error) => res.status(400).json({error}))
    console.log(req.params.id)
    res.send(req.body.id)

}

module.exports= {
    fetchBooks,
    addBooks,
    getBookById,
    updateBook,
    deleteBook
}

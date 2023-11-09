const Task = require ("../models/task")

const fetchTasks = (req,res) => {
    console.log(req.params.id);
      Task.find()
        .then((tasks) => {
          res.status(200).json({
            model: tasks,
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

const addTasks = (req, res) => {
    console.log(req.body);
    const task = new Task(req.body);
    task
      .save()
      .then(() => {
        res.status(201).json({
          model: task,
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

const getTaskById = (req,res) => {
    console.log(req.params.id);
      Task.findOne({ _id: req.params.id })
        .then((task) => {
          if (!task) {
            res.status(404).json({
              message: "objet non trouvé ",
            });
            return;
          }
          res.status(200).json({
            model: task,
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

const updateTask = (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((task) => {
      if (!task) {
        return res.status(404).json({
          message: "Objet non trouvé",
        });
      } else {
        return res.status(200).json({
          model: task,
          message: "Objet modifié",
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


const deleteTask = (req, res) => {
    Task.deleteOne({_id : req.params.id})
    .then (()=> res.status(200).json({message:"objet supprimé"}))
    .catch((error) => res.status(400).json({error}))
    console.log(req.params.id)
    res.send(req.body.id)

}

module.exports= {
    fetchTasks,
    addTasks,
    getTaskById,
    updateTask,
    deleteTask
}

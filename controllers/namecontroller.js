const { Router } = require("express");
const { Name } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();

router.post("/create", validateSession, function (req, res) {
  console.log(req.user.id);
  const nameEntry = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    role: req.body.role,
    userId: req.user.id,
  };

  Name.create(nameEntry)
    .then((name) => res.status(200).json(name))
    .catch((err) => res.status(500).json({ error: err }));
});

//Get name entry

router.get("/get", validateSession, function(req, res){
  const query = {
    where: {userId: req.user.id},
    include: "user",
  };

  Name.findOne(query)
  .then((name) => res.status(200).json(name))
  .catch((err) => res.status(500).json({ error: err}));
  });
  

//Update name entry

router.put("/:id", validateSession, function (req, res) {
  const updateNameEntry = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    role: req.body.role
  };

const query = {where: {id: req.params.id}};

Name.update(updateNameEntry, query)
.then((logs) => res.status(200).json(logs))
.catch((err) => res.status(500).json({error:err}));
});

  //Delete name entry
  
  router.delete("/delete", validateSession, function(req, res){
    const query = {
      where: {userId: req.user.id},
      include: "user",
    };

    Name.destroy(query)
        .then(() => res.status(200).json({ message: "Name Entry Deleted" }))
        .catch((err) => res.status(500).json({ error: err }));
  })
  
module.exports = router;

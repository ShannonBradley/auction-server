const { Router } = require("express");
const { Auction } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();

router.post("/create", validateSession, function (req, res) {
  console.log(req.user.id);
  const auctionEntry = {
    rescueid: req.body.rescueid,
    itemdesc: req.body.itemdesc,
    image: req.body.image,
    minbid: req.body.minbid,
    winbid: req.body.winbid,
    userId: req.user.id,
  };
  Auction.create(auctionEntry)
    .then((auction) => res.status(200).json(auction))
    .catch((err) => res.status(500).json({ error: err }));
});

//Get auction entry 

router.get("/get", validateSession, function(req, res){
  const query = {
    where: {userId: req.user.id},
    include: "user",
  };

  Auction.findOne(query)
  .then((auction) => res.status(200).json(auction))
  .catch((err) => res.status(500).json({ error: err}));
  });

  //Get all auction entries

  router.get("/getall", validateSession, (req, res) => {
    let id = req.user.id
    Auction.findAll({
      where: {userId: req.user.id},
      include: "user",
    })
        .then(auction => res.status(200).json(auction))
        .catch(err => res.status(500).json({ error: err }))
}); 
  

//Update auction entry

router.put("/:id", validateSession, function (req, res) {
  const updateAuctionEntry = {
    rescueid: req.body.rescueid,
    itemdesc: req.body.itemdesc,
    image: req.body.image,
    minbid: req.body.minbid,
    winbid: req.body.winbid,
  };

const query = {where: {id: req.params.id}};

Auction.update(updateAuctionEntry, query)
.then((auction) => res.status(200).json(auction))
.catch((err) => res.status(500).json({error:err}));
});

  //Delete auction entry
  
  router.delete("/delete", validateSession, function(req, res){
    const query = {
      where: {userId: req.user.id},
      include: "user",
    };

   Auction.destroy(query)
        .then(() => res.status(200).json({ message: "Auction Entry Deleted" }))
        .catch((err) => res.status(500).json({ error: err }));
  })
  
module.exports = router;

const { Router } = require("express");
const { Bidding } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();

router.post("/create", validateSession, function (req, res) {
  console.log(req.user.id);
  const biddingEntry = {
    currbid: req.body.currbid,
    userId: req.user.id,
  };
  
  Bidding.create(biddingEntry)
    .then((bidding) => res.status(200).json(bidding))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/get", validateSession, function (req, res) {
  const query = {
    where: { userId: req.user.id },
    include: "user"
  };
  
 Bidding.findOne(query)
    .then((bidding) => res.status(200).json(bidding))
    .catch((err) => res.status(500).json({ error: err }));
});


module.exports = router;

const User = require("./user");
const Name = require("./name");
const Auction = require("./auction");
const Bidding = require("./bidding");

User.hasOne(Name)
Name.belongsTo(User);

User.hasOne(Auction);
Auction.belongsTo(User);

User.hasMany(Bidding)
Bidding.belongsTo(User);

Auction.hasMany(Bidding)
Bidding.belongsTo(Auction);

module.exports = {
  User,
  Name,
  Auction,
  Bidding,
};

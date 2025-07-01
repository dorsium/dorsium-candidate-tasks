const { userBadges } = require('../data/store');

function getUserBadges(req, res) {
  const { userId } = req.params;
  const badges = userBadges[userId] || [];
  res.json(badges);
}

module.exports = { getUserBadges };
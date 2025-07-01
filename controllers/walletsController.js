const { userWallets } = require('../data/store');

function storeWallet(req, res) {
  const { userId, address } = req.body;
  userWallets[userId] = address;
  res.status(201).json({ message: 'Wallet address stored successfully.' });
}

module.exports = { storeWallet };
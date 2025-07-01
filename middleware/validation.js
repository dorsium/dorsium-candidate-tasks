function validateWallet(req, res, next) {
  const { userId, address } = req.body;
  const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing userId' });
  }

  if (!ethAddressRegex.test(address)) {
    return res.status(400).json({ error: 'Invalid Ethereum address' });
  }

  next();
}

module.exports = { validateWallet };
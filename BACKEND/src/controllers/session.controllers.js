const getSession = (req, res) => {
  res.send(req.user);
};

module.exports = { getSession };

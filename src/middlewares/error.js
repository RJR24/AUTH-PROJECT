module.exports = (err, req, res, next) => {
  res.status(500).json({ message: "(server error) somethimg went wrong!" });
};

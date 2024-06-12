const register = async (req, res) => {
  console.log("req", req.body);
  res.send("register");
};

module.exports = { register };

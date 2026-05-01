const register = async (req, res) => {
  res.send("regiter work");
};
const login = async (req, res) => {
  res.send("login work");
};
const logout = async (req, res) => {
  res.send("logout work");
};

module.exports = {
  register,
  login,
  logout,
};

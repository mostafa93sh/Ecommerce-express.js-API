const jwt = require("jsonwebtoken");

const authenticatedUser = (req, res, next) => {
  const token = req.signedCookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log(req.user);
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
};

module.exports = authenticatedUser;

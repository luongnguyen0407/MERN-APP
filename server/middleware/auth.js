const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Token not found",
    });
  try {
    const dacoded = jwt.verify(token, process.env.ASS_TOKEN);
    req.userId = dacoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

module.exports = verifyToken;

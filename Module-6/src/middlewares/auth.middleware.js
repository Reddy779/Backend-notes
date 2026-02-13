const jwt = require('jsonwebtoken');


async function authArtist(req, res, next) {

  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      message: "Unsuthorized1"
    })
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "Forbidden!, You don't have the access to create a music"
      })
    }

    req.user = decoded;

    next();

  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Unsuthorized"
    })
  }

}

async function authUser(req, res, next) {
  
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unsuthorized1"
    })
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "user") {
      return res.status(403).json({
        message: "Forbidden!, You don't have the access.."
      })
    }

    req.user = decoded;

    next();

  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Unsuthorized"
    })
  }

}

module.exports = { authArtist, authUser };
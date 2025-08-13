const jwt = require("jsonwebtoken");
const jwkToPem = require("jwk-to-pem");
const axios = require("axios");

const cognitoPoolId = process.env.COGNITO_POOL_ID || "YOUR_USER_POOL_ID";
const region = process.env.AWS_REGION || "YOUR_AWS_REGION";
const jwksUrl = `https://cognito-idp.${region}.amazonaws.com/${cognitoPoolId}/.well-known/jwks.json`;

let pems = null;
async function getPems() {
  if (!pems) {
    const { data } = await axios.get(jwksUrl);
    pems = {};
    data.keys.forEach(key => {
      pems[key.kid] = jwkToPem(key);
    });
  }
  return pems;
}

async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "No token" });

    const decoded = jwt.decode(token, { complete: true });
    if (!decoded) return res.status(401).json({ error: "Invalid token" });

    const pems = await getPems();
    const pem = pems[decoded.header.kid];
    if (!pem) return res.status(401).json({ error: "Invalid token" });

    jwt.verify(token, pem, (err, payload) => {
      if (err) return res.status(401).json({ error: "Unauthenticated" });
      req.user = payload;
      next();
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = verifyToken;
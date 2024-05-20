const jwt = require("jsonwebtoken");

function verifyAccessToken(token){
    return verify(token, process.env.ACCESS_TOKEN_SECRET);
}
function verifyRefreshToken(){
    return verify(token, process.env.REFRESH_TOKEN_SECRET);
}

module.exports = {verifyAccessToken, verifyRefreshToken}
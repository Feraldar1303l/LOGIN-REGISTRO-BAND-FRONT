const { generateAccessToken } = require("../auth/generateToken");
const getTokenFromHeader = require("../auth/getTokenFromHeader");
const verifyRefreshToken = require("../auth/verifyTokens").default;
const { jsonResponse } = require("../lib/jsonResponse");
const Token = require("../schema/token");
const router = require("express").Router();

router.post("/", async (req, res) => {
    const refreshToken= getTokenFromHeader(req.headers);

    if(refreshToken){
        try{
            const found = await Token.findOne({token: refreshToken})
            if(!found){
                return res
                .status(401)
                .send(jsonResponse(401,{error: "Unauthorized"}));
            }

            const payload = verifyRefreshToken(found.token);
            if(payload){
                const accessToken = generateAccessToken(payload.user);

                return res
                .status(200)
                .json(jsonResponse(200,{accessToken}));
            } else {
                return res
                .status(401)
                .send(jsonResponse(401,{error: "Unnauthorized"}));
            }
        }catch(error){
            return res
                .status(401)
                .send(jsonResponse(401,{error: "Unnauthorized"}));
            }
        
    }else{
        res.status(401).send(jsonResponse(401, {error: "Unauthorized"}));
    }

    res.send("refresh token")
});

module.exports = router;
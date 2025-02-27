const getUserInfo = require("../lib/getUserInfo.js")
const User = require("../schema/user.js");
const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();

router.post("/", async (req, res) => {
    const {username, name, password} = req.body;

    if(!!!username || !!!password) {
        return res.status(400).json(jsonResponse(400,{
            error: "Fields are required",
        })
    );
    }

    const user = await User.findOne({username})

    if(user){
        const correctPassword = await user. comparePassword(password, user.password);
        if(correctPassword){
            // Autenticar usuario
            const accessToken = user.createAccessToken();
            const refreshToken = await user.createRefreshToken();
            res.status(200).json(jsonResponse(200,{user: getUserInfo(user), accessToken, refreshToken}));
        } else {
            res.status(400).json(
                jsonResponse(400,{
                    error: "User or password incorrect"
                })
            )
        }

    } else{
        res.status(400).json(
            jsonResponse(400,{
                error: "User not found"
            })
        )
    }
});

module.exports = router;
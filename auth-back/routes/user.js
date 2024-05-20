const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json(jsonReponse(200, req.user));
});

module.exports = router;
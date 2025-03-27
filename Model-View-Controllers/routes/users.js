const express = require("express");

const router = express.Router();
const { handleGetAllUsers , GetUserById , UpdateusserbyId ,CreateUser} = require('../controllers/users')


router.get("/" , handleGetAllUsers);

router.route("/:id").get(GetUserById) ;

router.route(":/id").patch(UpdateusserbyId);

router.route("/").post(CreateUser);

module.exports = router;
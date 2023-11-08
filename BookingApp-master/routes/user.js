const express = require("express");
const userControllers = require("../controllers/user")

const router = express.Router();

router.post("/add-data",userControllers.postUserData);
router.get("/get-data",userControllers.getUserData);
router.delete("/delete-data/:id",userControllers.postDeleteData)




module.exports = router;
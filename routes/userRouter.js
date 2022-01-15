const router = require("express").Router()
const {getAllUsers, addUser, getOneUser, deleteUser, editUser} =require ("../controllers/userCtrl");

router.get("/users", getAllUsers)

router.get("/users/:id", getOneUser)

router.post("/add", addUser)

router.put("/edit/:id", editUser)

router.delete("/delete/:id", deleteUser)

module.exports = router;
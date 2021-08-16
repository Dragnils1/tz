const Router = require('express').Router;
const router = new Router()
const uC = require("../controllers/userController");
const dC = require("../controllers/departmentController")
const pC = require("../controllers/positionController")

router.get("/user", uC.getUsers)
router.get("/user/:id", uC.getUser)
router.get("/users/name", uC.getUsersName)
router.post("/user", uC.createUser)
router.put("/user/:id", uC.updateUser)
router.delete("/user/:id", uC.deleteUser)
router.get("/department", dC.getDepartments)
// router.get("/department/:departmentName", dC.getDepartment)
router.get("/departments/name", dC.getDepartments)
router.post("/department", dC.createDepartment)
router.put("/department/:department", dC.updateDepartment)
router.delete("/department/:departmentName", dC.deleteDepartment)
// router.get("/position/:positionName", pC.getPosition)
router.get("/positions/name", pC.getPositions)
router.post("/position", pC.createPosition)
router.put("/position/:position", pC.updatePosition)
router.delete("/position/:positionName", pC.deletePosition)
router.get("/", function(req, res){
  res.send("it is main page, get out of this page")
})


module.exports = router
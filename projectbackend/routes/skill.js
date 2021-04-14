const express = require("express");
const router = express.Router();

const {
  getSkillById,
  createSkill,
  getSkill,
  getAllSkill,
  updateSkill,
  removeSkill
} = require("../controllers/skill");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("skillId", getSkillById);

//actual routers goes here

//create
router.post(
  "/skill/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createSkill
);

//read
router.get("/skill/:skillId", getSkill);
router.get("/skills", getAllSkill);

//update
router.put(
  "/skill/:skillId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateSkill
);

//delete

router.delete(
  "/skill/:skillId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeSkill
);

module.exports = router;

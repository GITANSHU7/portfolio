const express = require("express");
const router = express.Router();

const {
  getEducationById,
  createEducation,
  getEducation,
  getAllEducation,
  updateEducation,
  removeEducation
} = require("../controllers/education");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("educationId", getEducationById);

//actual routers goes here

//create
router.post(
  "/education/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createEducation
);

module.exports = router;

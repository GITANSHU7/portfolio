const express = require("express");
const router = express.Router();

const {
  getProjectById,
  createProject,
  getProject,
  photo,
  updateProject,
  deleteProject,
  getAllProjects,
  getAllUniqueSkills
} = require("../controllers/project");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("projectId", getProjectById);

//all of actual routes
//create route
router.post(
  "/project/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProject
);

// read routes
router.get("/project/:projectId", getProject);
router.get("/project/photo/:projectId", photo);

//delete route
router.delete(
  "/project/:projectId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProject
);

//update route
router.put(
  "/project/:projectId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProject
);

//listing route
router.get("/projects", getAllProjects);

router.get("/projects/skills", getAllUniqueSkills);

module.exports = router;

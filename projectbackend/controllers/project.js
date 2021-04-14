const Project = require("../models/project");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProjectById = (req, res, next, id) => {
  Project.findById(id)
    .exec((err, project) => {
      if (err) {
        return res.status(400).json({
          error: "project not found"
        });
      }
      req.project = project;
      next();
    });
};

exports.createProject = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image"
      });
    }
    //destructure the fields
    const { name, description, tech_stack , github_link, project_link} = fields;

    if (!name || !description || !tech_stack || !github_link ||!project_link) {
      return res.status(400).json({
        error: "Please include all fields"
      });
    }

    let project = new Project(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      project.photo.data = fs.readFileSync(file.photo.path);
      project.photo.contentType = file.photo.type;
    }
    // console.log(project);

    //save to the DB
    project.save((err, project) => {
      if (err) {
        res.status(400).json({
          error: "Saving tshirt in DB failed"
        });
      }
      res.json(project);
    });
  });
};

exports.getProject = (req, res) => {
  req.project.photo = undefined;
  return res.json(req.project);
};

//middleware
exports.photo = (req, res, next) => {
  if (req.project.photo.data) {
    res.set("Content-Type", req.project.photo.contentType);
    return res.send(req.project.photo.data);
  }
  next();
};

// delete controllers
exports.deleteProject = (req, res) => {
  let project = req.project;
  project.remove((err, deletedProject) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete the project"
      });
    }
    res.json({
      message: "Deletion was a success",
      deletedProject
    });
  });
};

// delete controllers
exports.updateProject = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image"
      });
    }

    //updation code
    let project = req.project;
    project = _.extend(project, fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      project.photo.data = fs.readFileSync(file.photo.path);
      project.photo.contentType = file.photo.type;
    }
    // console.log(project);

    //save to the DB
    project.save((err, project) => {
      if (err) {
        res.status(400).json({
          error: "Updation of project failed"
        });
      }
      res.json(project);
    });
  });
};

//project listing

exports.getAllProjects = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

  Project.find()
    .select("-photo")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, projects) => {
      if (err) {
        return res.status(400).json({
          error: "NO project FOUND"
        });
      }
      res.json(projects);
    });
};

exports.getAllUniqueSkills = (req, res) => {
  Project.distinct("skill", {}, (err, skill) => {
    if (err) {
      return res.status(400).json({
        error: "NO skill found"
      });
    }
    res.json(skill);
  });
};

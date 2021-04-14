const Education = require("../models/Education");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getEducationById = (req, res, next, id) => {
  Education.findById(id).exec((err, education) => {
    if (err) {
      return res.status(400).json({
        error: "Education not found in DB"
      });
    }
    req.education = education;
    next();
  });
};

exports.createEducation = (req, res) => {
  const education = new Education(req.body);
  education.save((err, education) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save education in DB"
      });
    }
    res.json({ education });
  });
};

exports.getEducation = (req, res) => {
  return res.json(req.education);
};

exports.getAlleducation = (req, res) => {
  Education.find().exec((err, educations) => {
    if (err) {
      return res.status(400).json({
        error: "NO educations found"
      });
    }
    res.json(educations);
  });
};

exports.updateEducation = (req, res) => {
  const education = req.education;
  education.name = req.body.name;

  education.save((err, updatedEducation) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update education"
      });
    }
    res.json(updatedEducation);
  });
};

exports.removeEducation = (req, res) => {
  const education = req.education;

  education.remove((err, education) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this education"
      });
    }
    res.json({
      message: "Successfull deleted"
    });
  });
};

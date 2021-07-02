const Skill = require("../models/Skill");

exports.getSkillById = (req, res, next, id) => {
  Skill.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "Skill not found in DB"
      });
    }
    req.skill = cate;
    next();
  });
};

exports.createSkill = (req, res) => {
  const skill = new Skill(req.body);
  skill.save((err, skill) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save skill in DB"
      });
    }
    res.json({ skill });
  });
};

exports.getSkill = (req, res) => {
  return res.json(req.skill);
};

exports.getAllSkill = (req, res) => {
  Skill.find().exec((err, skills) => {
    if (err) {
      return res.status(400).json({
        error: "NO skills found"
      });
    }
    res.json(skills);
  });
};

exports.updateSkill = (req, res) => {
  const skill = req.skill;
  skill.name = req.body.name;
  skill.stats = req.body.stats;
  skill.pathColor = req.body.pathColor;

  skill.save((err, updatedSkill) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update Skill"
      });
    }
    res.json(updatedSkill);
  });
};

exports.removeSkill = (req, res) => {
  const skill = req.skill;

  skill.remove((err, skill) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this skill"
      });
    }
    res.json({
      message: "Successfull deleted"
    });
  });
};

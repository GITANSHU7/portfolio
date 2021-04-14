const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 32,
        unique : true

    },
    description : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 2000,
  

    },
    
    project_link : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 2000,
        

    },
    
    github_link : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 2000,
        unique : true

    },
    photo : {
        data : Buffer,
        contentType : String,
    },
    tech_stack: [{
        type: String
      }],
}, {timestamps : true}
);

module.exports = mongoose.model("Project", projectSchema);



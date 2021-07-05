const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 32,
        unique : true

    },
    year : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 2000,
  

    },
    
    board : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 2000,
        

    },
    
    qualification : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 2000,
        unique : true

    },
    path_color : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 2000,
    }



   }, {timestamps : true}
);

module.exports = mongoose.model("Education", educationSchema);




const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 32,
        unique : true

    },
    stats : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 32,
        unique : true

    },
    pathColor: {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 32,
        

    },
}, {timestamps : true}
);

module.exports = mongoose.model("Skill", skillSchema);























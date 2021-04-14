
const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true , 
        trim : true,
        maxlenth : 32,
        unique : true

    }
}, {timestamps : true}
);

module.exports = mongoose.model("Skill", skillSchema);























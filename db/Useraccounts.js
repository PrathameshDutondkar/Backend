const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    
});

module.exports = mongoose.model("accountdetails", accountSchema);

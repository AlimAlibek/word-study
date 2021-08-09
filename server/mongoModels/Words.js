const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    groupName: {type: String, require: true},
    group: {type: Array, require: true},
    owner: {type: Types.ObjectId, ref: "User"}
})

module.exports = model("Words", schema);
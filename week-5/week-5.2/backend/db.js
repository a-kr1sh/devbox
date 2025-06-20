
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://krishtechnologies12:EauL4L6Fv29SBxdf@cluster1.trddpyk.mongodb.net/ToDo-App")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}) 

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
// model for specific exercise information
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const WorkoutSchema = new Schema ({
    type:{
        type: String
    },
    weight:{
        type: Number
    },
    name:{
        type: String
    },
    sets:{
        type: Number
    },
    reps:{
        type: Number
    },
    duration:{
        type: Number
    },
    distance:{
        type: Number
    },
    day:{
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout
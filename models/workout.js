const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exerciseType: {
        type: String,
    },

    excerciseName: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },

    distance: {
        type: Number
    },

    duration: {
        type: Number
    },

    weight: {
        type: Number
    },

    sets: {
        type: Number
    },

    reps: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
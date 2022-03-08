
const router = require("express").Router();
const Workout = require("../models/Workout.js");

//get workouts
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' }
            }
        }
    ])
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


//get workouts to update
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        })
});


//cardio workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: '$exercises.duration' }
            }
        }
    ])
        .sort({ day: -1 })
        .limit(7)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
});

module.exports = router
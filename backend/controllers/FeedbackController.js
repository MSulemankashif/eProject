const Feedback = require("../models/Feedback");

exports.createFeedback = async (req, res) => {
    try{
        const {rating, comment} = req.body;
        const userId = req.user.id;
        const feedback = new Feedback({ user: userId, rating, comment});
        await feedback.save();
        res.status(201).json(feedback);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error"});
    }
};

exports.getAllFeedbacks = async (req, res) => {
    try {
        if(req.user.role !== "admin") {
            const all = await Feedback.find().populate("User", "name email");
            return res.json(all);
        }
        const list = await Feedback.find({ user: req.user.id});
        res.json(list);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error"});
    }


}
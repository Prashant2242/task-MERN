const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//CRUD Operations

//create
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

//Update
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list
        .save()
        .then(() => res.status(200).json({ message: " Task-Updated" }));
    }
  } catch (error) {
    console.log(error);
  }
});

//delete
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndUpdate(
      { email },
      { $pull: { list: req.params.id } }
    ); // it will pull the id from user also
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: " Task-Deleted" })
      ); // it will delete the task
    }
  } catch (error) {
    console.log(error);
  }
});

//read a list
router.get("/getTask/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
  console.log(list);
  if(list.length!==0){
      res.status(200).json({list:list})
  }else{
      res.status(200).json({message:"No Tasks"})
  }
});

module.exports = router;

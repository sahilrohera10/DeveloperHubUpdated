const trainer = require("../Models/TrainerList");
const {
  baseCreate,
  baseList,
  baseUpdate,
  baseDelete,
} = require("../Repository/baseRepository");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  addTrainer,
  getTrainers,
  updateTrainer,
  deleteTrainer,
};

async function addTrainer(req, res, next) {
  const Body = req.body;
  try {
    const trainer = await baseCreate(trainer, Body);
    return res.status(200).json({ message: "Trainer Added Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
}

async function getTrainers(req, res) {
  try {
    const data = await baseList(trainer, {});
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: "something error occured", error });
  }
}

async function updateTrainer(req, res) {
  const Body = req.body;
  const id = ObjectId(req.params.trainerId);
  try {
    const searchParams = {
      _id: id,
    };
    const data = await baseUpdate(trainer, searchParams, Body, {});
    return res
      .status(200)
      .json({ message: "trainer details updated successfully" });
  } catch (error) {
    return res.status(400).json({ message: "something error occured", error });
  }
}

async function deleteTrainer(req, res) {
  const id = ObjectId(req.params.trainerId);

  try {
    const searchParams = {
      _id: id,
    };
    await baseDelete(trainer, searchParams);

    return res.status(200).json({ message: "trainer deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: "something error occured", error });
  }
}

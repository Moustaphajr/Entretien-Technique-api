const User = require("../Models/User");

async function create(req, res) {
  try {
    const { firstname, lastname, adress } = req.body;
    const user = await User.create({
      firstname: firstname,
      lastname: lastname,
      adress: adress,
    });
    res.json({
      user: user,
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error);
  }
}

async function getAllUsers(req, res) {
  try {
    const user = await User.find();
    if (user) {
      res
        .json({ user: user, message: "user fetched successfully" })
        .status(200);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({ user: user, message: "user fetched successfully" });
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({ user: user, message: "user deleted successfully" });
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res) {
  try {
    const { firstname, lastname, adress } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, {
      firstname,
      lastname,
      adress,
    });

    if (user) {
      res.json({ user: user, message: "user updated successfully" });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  create: create,
  getAllUsers: getAllUsers,
  getOneUser: getOneUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};

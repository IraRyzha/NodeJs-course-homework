const express = require("express");
const router = express.Router();
const UserService = require("../services/userService");

router.get("/", async (req, res) => {
  try {
    const users = await UserService.getUsers();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await UserService.deleteUser(userId);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

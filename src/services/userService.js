const UserModel = require("../models/userModel");

const UserService = {
  getUsers: async () => {
    return await UserModel.getAllUsers();
  },
  deleteUser: async (userId) => {
    return await UserModel.deleteUser(userId);
  },
};

module.exports = UserService;

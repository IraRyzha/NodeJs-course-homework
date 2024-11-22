const UserModel = require("../models/userModel");

const AuthService = {
  register: async ({ username, password }) => {
    return await UserModel.createUser(username, password);
  },

  findUserByUsername: async (username) => {
    const users = await UserModel.getAllUsers();
    return users.find((user) => user.name === username);
  },

  generateToken: async (user) => {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );
    await UserModel.updateUserToken(user.id, token);
    return token;
  },

  validateToken: async (token) => {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await UserModel.getUserById(decoded.id);
      if (user && user.current_token === token) {
        return decoded;
      }
      return null;
    } catch (err) {
      return null;
    }
  },

  revokeToken: async (userId) => {
    await UserModel.updateUserToken(userId, null);
  },
};

module.exports = AuthService;

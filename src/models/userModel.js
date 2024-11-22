const pool = require("../db");

const UserModel = {
  getAllUsers: async () => {
    try {
      const result = await pool.query("SELECT * FROM Users");
      return result.rows;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  createUser: async (name, password) => {
    try {
      const result = await pool.query(
        "INSERT INTO Users (Name, Password) VALUES ($1, $2) RETURNING *",
        [name, password]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  deleteUser: async (userId) => {
    try {
      await pool.query("DELETE FROM Users WHERE ID = $1", [userId]);
      return { message: "User deleted successfully" };
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },

  updateUserToken: async (userId, token) => {
    await pool.query("UPDATE Users SET current_token = $1 WHERE ID = $2", [
      token,
      userId,
    ]);
  },
};

module.exports = UserModel;

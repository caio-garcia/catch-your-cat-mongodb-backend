const moogose = require("mongoose");

async function dbConnect() {
  try {
    const connect = await moogose.connect(process.env.MONGODB_URI);
    console.log("Connected to: ", connect.connection.name);
  } catch (error) {
    console.error("Error when connecting: ", error);
  }
}

module.exports = dbConnect;

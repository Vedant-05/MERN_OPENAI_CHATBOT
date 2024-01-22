import { connect, disconnect } from "mongoose";

async function connectToDataBase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot connect to mongodb");
  }
}

async function disconnectFromDataBase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Cannot disconnect from mongodb");
  }
}

export { connectToDataBase, disconnectFromDataBase };

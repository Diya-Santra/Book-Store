import mongoose from "mongoose";

const dbConnection = async (DB_URI) => {
  await mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Mongodb is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default dbConnection;

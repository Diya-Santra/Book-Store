import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/DbConnection.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const MongoURI = process.env.DB_URI;

const PORT = process.env.PORT || 3000;

dbConnection(MongoURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB is not connected:", error);
  });

//routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

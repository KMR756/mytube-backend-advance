import dotenv from "dotenv";
dotenv.config();
import connectDB from "./database/db.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection faild!!", err);
  });

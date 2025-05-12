import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {teacherRoute} from "./Routes/userroute.js";
import fileUpload from "express-fileupload";


dotenv.config();
const app = express();
const port = process.env.PORT;
const Mongo_URI = process.env.Mongo_URI;

// Middleware must be ordered properly:
app.use(express.json()); // For JSON bodies
app.use(express.urlencoded({ extended: true })); // ✅ Needed to parse form-data text fields
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/"
}));


// DB
mongoose.connect(Mongo_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use("/api/teachers", teacherRoute);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

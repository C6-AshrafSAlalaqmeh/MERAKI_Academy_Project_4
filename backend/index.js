const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");


const app = express();
const PORT = process.env.port;

app.use(cors());
app.use(express.json());

// Import Routers
const listRouter = require('./routes/list')
const productRouter= require('./routes/product')
const userRouter = require('./routes/user')
const RoleRouter = require('./routes/role');
const favoriteRouter = require("./routes/favorite");

// Routes Middleware
app.use('/list' ,listRouter)
app.use('/product' ,productRouter)
app.use('/user' ,userRouter)
app.use('/role', RoleRouter)
app.use('/favorite' , favoriteRouter)

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const cors = require("cors")
require('dotenv').config();
const PORT = process.env.PORT || 4000;


app.use(cors())
app.use(express.json());

require("./config/database").dbConnect();

//route import and mount
const user = require("./routes/route");
app.use("/api/v1", user);



app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})
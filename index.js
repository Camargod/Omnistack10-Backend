const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./src/routes");
const cors = require("cors");
mongoose.connect("mongodb+srv://creeplays:Biel210801@omnistack10-bkvir.mongodb.net/FindMyDev?retryWrites=true&w=majority",{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(console.log("---Mongoose Conectado---"));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(1234);
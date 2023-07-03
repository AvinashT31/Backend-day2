const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("hello Avinash");
})

app.get("/one", (req, res) => {
    res.send("hello Guys yaha party ho rahi hai")
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
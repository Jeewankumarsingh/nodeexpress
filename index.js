import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = 4000;

app.get("/", (req, res) =>{
    res.send("Hello Arpana");
});

app.get("/arpana", (req, res) => {
    res.send("Hello Jeewan");
});

app.get("/login", (req, res) => {
    res.send("<h1>Please login at the chai aur code</h1>")
});

app.get("/chai", (req, res) => {
    res.send("<h2> chai with Arpana</h2>");
});

app.listen(process.env.PORT, () =>{
    console.log(`Sever running port on ${port}`);
});
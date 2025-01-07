import express from "express";
import cors from "cors";

const app=express();
app.use(cors());

app.get("/temp", (req, res)=>{
    res.send("ara-araaa");
});

app.get("/", (req, res)=>{
    res.send("root");
});

app.listen(3000);
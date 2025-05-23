import express from "express";
import { register } from "../controller/userController.js";
const userRoute=express.Router();

//GET

//POST

userRoute.post("/register",register)

//PUT






export default userRoute
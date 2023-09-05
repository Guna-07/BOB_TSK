import express from "express";
import { deleteUser, getAllUsers, login, signup, updateUser } from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers); 
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
import express from "express";
import { getAdmin, signup } from "../controllers/admin-controller";

const AdminRouter = express.Router();

AdminRouter.post("/signup", signup);
AdminRouter.get("/", getAdmin)

export default AdminRouter;
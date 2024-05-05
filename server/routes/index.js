import express from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";

const router = express.Router();

router.use("/user", userRoutes); //this will be in the format like api/user/login
router.use("/task", taskRoutes);

export default router;
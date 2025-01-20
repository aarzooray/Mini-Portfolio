
import { Router } from "express";

const router = Router();

import clientInfo from "../controllers/client.controllers.js";

router.route('/register').post(clientInfo)

export default router
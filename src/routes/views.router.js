import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("websocket");
});

export default router;

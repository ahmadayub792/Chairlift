import * as Router from "koa-router";
import * as user from "./controllers/user";

const router = new Router();

router.post("/user",user.create);

export default router.routes();
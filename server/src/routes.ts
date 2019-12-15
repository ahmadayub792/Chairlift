import * as Router from "koa-router";
import * as user from "./controllers/user";
import * as bus from "./controllers/bus"

const router = new Router();

router.post("/user",user.create);   // create a user
router.get("/bus",bus.list);        // list all buses
router.post("/bus",bus.create);     // create a bus

export default router.routes();
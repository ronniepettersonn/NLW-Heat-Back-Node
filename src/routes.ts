import { Router } from "express";
import { AuthenticateUserContrller } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessagesController } from "./controller/GetLast3MessageController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserContrller().handle);

router.post("/message", ensureAuthenticated ,new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export { router };
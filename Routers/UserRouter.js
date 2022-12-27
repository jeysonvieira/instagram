import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router()


router.get('/', UserController.UserView)


router.post('/login', UserController.LoginPost)


router.get('/signup', UserController.SignUpGet)

router.post('/signup/post', UserController.SignUpPost)


export default router
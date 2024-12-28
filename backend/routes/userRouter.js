import { Router } from "express";

const userRouter = Router()

userRouter.get('/', (req, res) => {
    res.status(200).send('<h3>Main page of user</h3>')
})

userRouter.post('/user', (res, req) => {
    res.status(200).send('<h3>User was create</h3>')
})

export default userRouter
import express from "express";
import bodyParser from "body-parser";
import { sendMessage, getMessages } from "../controllers/messageController.js";

const messageRoute = express.Router();

messageRoute.post('/messages/send', sendMessage);
messageRoute.get('/messages/getAll', getMessages);

export default messageRoute;
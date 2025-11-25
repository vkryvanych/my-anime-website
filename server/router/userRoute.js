import express from 'express';
import { register, login } from '../controller/userController.js';
import { createContact } from '../controller/contactController.js';

const route = express.Router(); 

route.post("/user", register);
route.post("/login", login);
route.post("/contact", createContact); 

export default route;  
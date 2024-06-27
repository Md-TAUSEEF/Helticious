const express = require("express");
const router = express.Router();
const contactoption = require("../Controller/ContactForm");
const Auth_middleware = require("../Middleware/Auth_middleware");
const getAdmin = require("../Middleware/Admin_Middleware");
router.post("/contact",Auth_middleware,contactoption.contactForm);
router.get("/getall",Auth_middleware,getAdmin,contactoption.GetAllcontact);
router.delete("/contact/delet/:id",Auth_middleware,getAdmin,contactoption.Deletcontact);
router.patch("/users/update/:id",Auth_middleware,getAdmin,contactoption.UpdateUserDetails);
router.get("/single/contact/:id",Auth_middleware,getAdmin,contactoption.GetSingleContact);

module.exports=router;
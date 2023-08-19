const express = require("express");
const User = require("../models/details");
const contact = require("../models/details");
const router = express.Router();







//Route2 -Authenticate user  api/auth/login
router.post(
    "/details",
    
    async (req, res) => {
        console.log(req.body);
        const detials=contact(req.body);
        detials.save();
        res.send(req.body);
    }
  );
module.exports=router
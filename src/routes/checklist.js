    const express= require('express');

const router = express.Router();

router.get('checklists', (req, res)=>{
    console.log("olá");
    req.send();

}

)
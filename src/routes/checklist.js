const express= require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    console.log("olá");
    res.send();

})

router.post('/', (req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body);
})

router.get('/:id', (req,res)=>{
    console.log(req.params.id);
    res.send( req.params);
})

router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send( 'put id' +req.params.id);
})

router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send( 'delete id' +req.params.id);
})
module.exports= router;
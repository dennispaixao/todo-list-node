const express= require('express');
const checkListRouter = require('./src/routes/checklist')


const app = express();
app.use(express.json());

app.use('/checklist',checkListRouter);

app.listen(3000,()=>{
    console.log('servidor iniciado em http://localhost:3000');
})
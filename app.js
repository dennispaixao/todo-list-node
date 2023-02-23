const express= require('express');
const path = require('path');
const checkListRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index');
const methodOverride = require('method-override')
require('./config/database');

const app = express();
app.use(express.json());// pra usar json nas requisições 
app.use(express.urlencoded({extended: true}));// pra conseguir pegar valores do form
app.use(express.static(path.join(__dirname, 'public')))//para utilizar arquivos estáticos como um css
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));


app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


app.use('/', rootRouter);
app.use('/checklists',checkListRouter);
app.use('/checklists',taskRouter.checklistDependent);
app.use('/tasks',taskRouter.simple);

app.listen(3001,()=>{
    console.log('servidor iniciado em http://localhost:3001');
})
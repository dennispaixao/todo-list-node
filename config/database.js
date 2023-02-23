const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>console.log('Conectado ao MongoDB'))
    .catch((err)=> console.error(err));
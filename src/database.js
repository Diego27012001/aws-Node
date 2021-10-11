const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/notes-app-db'
).then( db => console.log('DB IS CONNECT'))
  .catch(err => console.log(err));



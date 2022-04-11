const mongoose = require('mongoose');
const db = mongoose.connection;


mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
    //useCreateIndex: true,    <<<--- no longer necessary
    //useFindAndModify: false, <<<--- no longer necessary
});


db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
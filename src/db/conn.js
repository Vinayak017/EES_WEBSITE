const mongoose = require('mongoose');



mongoose.connect("mongodb://127.0.0.1:27017/practice", {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    useUnifiedTopology: true

}).then(( ) => {
    console.log("connection successful");
}).catch(( err ) => {
    console.log(err);
})
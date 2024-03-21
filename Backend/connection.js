const mongoose = require('mongoose');
const url = "mongodb+srv://bloodline90265:Gaara0213@cluster0.o34pl2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//asynchronous function - returns Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

console.log('another line')
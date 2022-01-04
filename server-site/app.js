const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleWar = require("./middlewares/errorMiddleWare");

// middlewares
app.use(cors());
app.use(express.json());


/*
--------------  routes --------------
*/

// import route from routes
const errorMiddleWare = require("./middlewares/errorMiddleWare");
const productRouter = require("./routes/productRoute");
const userRouter = require('./routes/userRoute');

// register route in the app
app.use('/auth', userRouter);
app.use('/products', productRouter);





// error middleware
app.use(errorMiddleWare);



// app exported
module.exports =  app ;
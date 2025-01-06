const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");


dotenv.config({path:"env"});

const app = express();
const PORT = process.env.PORT || 3309

app.use(bodyparser.json());

app.use('/api', productRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
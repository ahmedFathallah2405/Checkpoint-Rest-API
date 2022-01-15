//1-creation de serveur
const express= require("express");
const configDB = require("./config/configDB");
const userRouter = require ('./routes/userRouter')
const app= express()

//3. set env variable
require('dotenv').config({ path: './config/.env' })

//2- config database
configDB()

//4create a schema 
const User = require("./modals/User")

//set Middelwears 
app.use(express.json())
app.use("/api", userRouter )

//5-CRUD
//get all the users
//app.get('/api/users', async(req,res)=>{
  //  try {
    //    const users= await User.find()
      //  res.send(users)
    //} catch (error) {
      //res.status(500).send(error.message)  
    //}
//})

const PORT= process.env.PORT || 5000;
app.listen (PORT, err => err? console.error(err): console.log(`Server is runing on port ${PORT}`))

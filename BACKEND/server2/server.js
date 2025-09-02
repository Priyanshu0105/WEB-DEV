
const express = require("express")
const fs = require("fs")
const app = express();
const mongoose = require("mongoose")
const users = require("./MOCK_DATA.json")
const PORT = 8000
//connection
mongoose.connect('mongodb://127.0.0.1:27017/app1')
.then(() => console.log("mongodb connected"))
.catch((err) => console.log("mongo error" , err));
//schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender:{
        type: String,
    },
}
, 
{timestamps :true}
)

const User = mongoose.model("user" , userSchema);

//middleware
app.use(express.urlencoded({extended : false}))
app.use((req , res , next) => {
fs.appendFile("log.txt" , ` \n ${Date.now()} : ${req.method} : ${req.ip} : ${req.path}` , (err , data) =>{
    next();
})
})

//routes
 
app.get("/" , (req , res) => 
    {
    return res.send("hi")})

app.get("/users" , async(req, res)=>{
    const alldbUsers = await User.find({});
   const html =` <ul>
   ${alldbUsers.map((users)=> `<li> ${users.firstName} - ${users.email}</li>`).join("")}
    </ul>`;
    res.send(html); 
})
app.get("/api/users" , async (req , res) => {
    const alldbUsers = await User.find({});
    res.setHeader("X-MyName" , "Priyanshu") //Custom Header
    return res.json(alldbUsers);
})
app.route("/api/users/:id")
.get(async(req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404).json({msg: "not found"})
    }
    return res.json(user)
})
.patch(async(req,res) => {
    const user = await User.findByIdAndUpdate(req.params.id , {lastName: "changed"})
    return res.json({status : "success"})
})
.delete(async(req,res) => {
    const user = await User.findOneAndDelete(req.params.id )
   return res.json({status : "success"})
})
app.post("/api/users" , async (req , res) => {
    const body = req.body
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title ){
        return res.status(400).json({status: "unsucessful... bad request"})
    }
    // else{
    // users.push({ id : users.length + 1 , ...body })
    // fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users) , (err , data) => {
    //     return res.status(201).json({status :"success" , id: users.length })
    // })

    // }
    else{
    const result = await User.create({
        firstName: body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    });
    console.log(result);
    return res.status(201).json({msg:"success"})
}
})
app.listen(PORT ,  () => console.log(`SERVER STARTED ON ${PORT} PORT`))
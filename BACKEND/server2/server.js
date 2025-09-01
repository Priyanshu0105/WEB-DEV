
const express = require("express")
const fs = require("fs")
const app = express();
const users = require("./MOCK_DATA.json")
const PORT = 8000
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
app.get("/users" , (req, res)=>{
   const html =` <ul>
   ${users.map((users)=> `<li> ${users.first_name}</li>`).join("")}
    </ul>`;
    res.send(html); 
})
app.get("/api/users" , (req , res) => {
    return res.json(users)
})
app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user)=> user.id === id)
    return res.json(user)
})
.patch((req,res) => {
  return res.json({status : "pending"})
})
.delete((req,res) => {
   return res.json({status : "pending"})
})
app.post("/api/users" , (req , res) => {
    const body = req.body
    users.push({ id : users.length + 1 , ...body })
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users) , (err , data) => {
        return res.json({status :"success" , id: users.length })
    })

})
app.listen(PORT ,  () => console.log(`SERVER STARTED ON ${PORT} PORT`))
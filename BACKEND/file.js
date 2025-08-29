const fs = require("fs")
const os = require("os")
// fs.writeFileSync("./text.txt" , "HEY PRIYANSHU")


// fs.writeFile("./test.txt" , "Hello There" , (err) => {})

    // const result = fs.readFileSync("test.txt" , "utf-8")
// fs.readFile("./test.txt","utf-8" , (err , result)=>{
//         if(err){
//             console.log("error", err)
//         }
//         else{
//             console.log(result)
//         }
//     })


// fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());

fs.cpSync("./test.txt" , "./copy.txt");

console.log(os.cpus().length)
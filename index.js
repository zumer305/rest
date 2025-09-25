// RESTFULL API..............................................................
// npm init -y (package.json)
// npm i express (express install)
// npm i ejs(EJS install)
// touch index.js(index.js file main server)

// mkdir public (foldernew)

const express=require("express");
const app=express();
const port=8080;
const path=require("path");//"Import the path module in Node.js so we can easily work with file and folder paths."
app.listen(port,()=>{
    console.log("Server is listening");
})





app.use(express.urlencoded({extended:true})); //language ko express smjh paya



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")); //ejs files
app.set(express.static(path.join(__dirname,"public"))); //css files


app.get("/",(req,res)=>{
    res.send("server working well");
})



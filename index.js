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

// ---------------------------------------------------------------------------



app.use(express.urlencoded({extended:true})); //language ko express smjh paya



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")); //ejs files
app.use(express.static(path.join(__dirname,"public"))); //css files

// 1 get(all posts)
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

let posts=[
    {
        id:"1a",
        username:"zumer",
        content:"I am a girl",
    },
     {
           id:"2a",
        username:"Niaz",
        content:"I am a boy",
    },
     {
           id:"3a",
        username:"Asma",
        content:"I am woman",
    },
];

// 2(add new post)
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");  //file sa data a ra-------res.send (just print)
})
app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts"); // kisi get req url sa data la ra
})

// 3------- form ko redirect allposts sath phir new anchor tag lagaya


// 4 show single post 
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
})



// 5 add id to every single post







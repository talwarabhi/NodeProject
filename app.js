const express = require("express");
const app = express();
const myuser = require("./MOCK_DATA.json");


const AuthRoute = require("./routes/AuthRoutes.js")
// Middlewares start
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use("/auth", AuthRoute)
// end

app.get("/users", function(request, response){
    response.json(myuser)
})

app.get("/user", function(request, response){
   
    try {
    const urldata = request.query;
    console.log(urldata)
    const filterdata = myuser.filter(myuser => myuser.gender.toLowerCase() === urldata.gender.toLowerCase())
    response.json(filterdata)
         
    } catch (error) {
      response.json({message: error}) 
    }
})


app.post("/signin", function(request, response){
    
    try { 
    const getvalues = request.query;
    if(getvalues.name ==="" || getvalues.email ==="")
    {
        response.json({
            message:"Incorrect Values"
        })
    }
    else{
        console.log(getvalues)
        response.status(200).json({
            message:"welcome",
            data: getvalues.name + " " +  getvalues.email
        })

    }
    
    } catch (error) {
        response.json({
            message:"failed try again",
        })
    }
})


app.post("/login", function(request, response){
    try {
        const data = request.body;
        response.json({
            getdata:data
        })
        
    } catch (error) {
        
    }
})

app.post("/urlencoded", function(request, response){
    try {
        const data = request.body;
        response.json({
            message: "Success",
            name:data.username,
            email:data.email
        })
        
    } catch (error) {
        response.json({
            message: "Failed"
        })
        
    }
})



module.exports = app;
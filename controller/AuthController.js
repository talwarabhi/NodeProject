const { request } = require("../app");
const LoginModel = require("../model/LoginModel");

const login = async(request, response)=>{
    try {
        const data = request.body;
        const loginObj = {
            name:data.name,
            email: data.email,
            password: data.password
        }
        await LoginModel.create(loginObj);

        response.status(201).json({
            message: `${loginObj.name} Login Sucessfully`
        })
        
        
    } catch (error) {

        response.json({
            message: "Failed to login",
            error: error

        })
        
    }
}


// Get All Data of the Users

const getLoginUsers = async(request, response)=>{
    try {
        const data = await LoginModel.find({}, {password:0});

        response.status(200).json(data)
        
    } catch (error) {
        response.json({
            message:"Error to fetch data"
        })
        
    }

}
// end

// Get User by Name
const UserbyName = async(request, response)=>
{
try {
    const data = request.params.email;
    const result = await LoginModel.find({email:data},{password:0})
    response.status(200).json({
        message :"Get Data",
        data:result
    })
    
} catch (error) {
    response.json({
        message: error
    })

}
 
}
// End


// Update Data Users
const UpdateUser = async(request, response)=>{
    try {
        const getID = request.params.id;
        console.log(getID);
        //const maindata = request.body;
        console.log(maindata);
        const data = await LoginModel.updateOne({_id:getID},{$set:{"name":"Manisha"}})
        response.json({
            message:"Data Updated Sucessfully",
            UpdatedData:data
        })
        
    } catch (error) {
        response.json({
            message: error
        })
        
    }

} 



module.exports={
    login,
    getLoginUsers,
    UserbyName,
    UpdateUser
}
const server = require("./app.js");
const varsdata = require("./constant/variables.js")
require("./config/database.js")

server.listen(varsdata.PORT, function(){
  console.log(`server started ${varsdata.HOST}:${varsdata.PORT}`)
})
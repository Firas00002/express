const express = require("express")
var PORT = 8000


var app = express();

const time =(req,res,next)=>{
var date = new Date()
var day=date.getDay()
var hours =date.getHours()
if(day ==0 || day == 6 || hours> 17 || hours < 9) {
    res.send('<h1>we are closed</h1>')
}
 else{
     next()
 }
     
  }

  app.use(time)
  app.use(express.static('state'))
  


  

app.listen(PORT,(error) => error? console.error(error):console.log(`the server run port ${PORT}`))
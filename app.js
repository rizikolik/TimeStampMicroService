const express      =require("express"),
      app          =express();
     
    












app.get("/api/timestamp/:date_string",(req,res,next)=>{

   
    let query=req.params.date_string;
    let newdate=new Date(query);
    let utc=newdate.toUTCString();
    let unix=newdate.getTime();
    let timeobj={unix:unix, utc:utc};
if(!timeobj){
    res.json({"error" : "Invalid Date" })
} else{
    res.json(timeobj)
}  


});
  
  
      





app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0",(err)=>{
    if(err){
        console.log("something went wrong..")
    }
  console.log("Server Has Activated......");
})
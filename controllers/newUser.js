module.exports =  (req,res) => {
    console.log(req.body);
     UserData.create(req.body,(error,userdata) =>{
        res.redirect('/login')
    })
};
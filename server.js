let express = require('express')
let app = express()
let path = require('path')

app.use(express.static(path.join(__dirname,'public')))

app.route('/')
    .get((req,res)=>{
        res.sendFile(path.join(__dirname,'index.html'))
    })

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
        process.exit(1)
    }
    console.log('Server Running')
})
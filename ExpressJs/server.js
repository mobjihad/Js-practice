const express = require('express')

const app = express()

app.listen(4000,()=>{
    console.log("Listening on port 4000")
})

app.get('/', (_,res)=>{

    const obj = {

        name:"MOB",
        call:"S21MOB",
        DXpedition: true,
        IOTA: true
    }
    res.json(obj)

})
app.get('/hello', (_,res)=>{

    res.send("Hello")

})
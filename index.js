const express = require('express')
const userRouter = require('./routes/usersRouter')
const postRouter = require('./routes/postRouter')

const app = express()


app.get('/', (req,res)=>{
       res.json({
    status:'Succes',
message:'Welcome To'
})

})

app.use('/user', userRouter)
app.use('/', postRouter)



const PORT =3000

app.listen(PORT,()=>{
    console.log(`Server Running is ${PORT}`);
})

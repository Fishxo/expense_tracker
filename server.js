const express = require('express')
const app = express();

// middleware handler
app.use(express.urlencoded({extended:true}))

// declaring array and id 

let expensess =[];
let id = 1;

// getting an ejs file 
app.set('view engine','ejs')

// recieving inputs from user and displaying

app.post('/add' ,(req,res) =>{
    expensess.push({id:id++,desc:req.body.desc,amount:req.body.amount,cat:req.body.cat,date:req.body.date})
    res.redirect('/')
})


// passing to ejs file 

app.get('/', (req,res) =>{
    res.render('index' ,{expensess})
})

app.listen(3000,(req,res) => {
    console.log('server is serving')
})
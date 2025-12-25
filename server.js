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
    expensess.push({id:id++,desc:req.body.desc,amount:req.body.amount,cat:req.body.cat,birr:req.body.birr,date:req.body.date})
    res.redirect('/')
})


// passing to ejs file 

app.get('/', (req,res) =>{
    res.render('index' ,{expensess})
})
//using a delete button

 app.post('/delete/:id' ,(req,res) =>{
    const id = parseInt(req.params.id)
    expensess = expensess.filter(t => t.id !== id)
 res.redirect('/')
 })

 //using a update button
 app.post('/update/:id/',(req,res)=>{
    const expense = expensess.find(t => t.id == req.params.id)

    if(expense){
        expense.desc = req.body.desc;
        expense.amount = req.body.amount;
        expense.cat = req.body.cat;
        expense.date = req.body.date;
    }
    res.redirect('/');
 })
app.get('/edit/:id', (req, res) => {
    const id = Number(req.params.id);  
  const expense = expensess.find(e => e.id == req.params.id);
   if (!expense) return res.redirect('/');
  res.render('edit', { expense });
});

app.listen(3000,(req,res) => {
    console.log('server is serving')
})
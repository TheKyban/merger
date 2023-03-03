const express = require('express');
const path = require('path')
const { pdfMerger } = require('./merger');
const multer  = require('multer')


const upload = multer({ dest: 'uploads/' })
const app = express();

const port = process.env.PORT || 7575

app.use('/static', express.static('public'))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/home.html")
})

app.get('/merger',(req,res)=>{
    res.sendFile(__dirname+"/merger.html")
})

app.post('/merger', upload.array('pdfs', 2), async (req, res, next)=> {
    // console.log(req.files)
    // res.send("done")
    let p1 = path.join(__dirname, req.files[0].path);
    let p2 = path.join(__dirname, req.files[1].path)
    let d = await pdfMerger(p1, p2)
    res.redirect(`http://localhost:${port}/static/merge/${d}.pdf` )
    p1=""
    p2=""
  })
  

app.listen(port,()=>{
    console.log("Server Started")
})
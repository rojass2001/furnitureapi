const express=require('express');
const cors=require('cors');
const app=express();
const {Pool}=require('pg');
const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"furniture",
    password:"rojass@123",
    port:5432,
});
app.listen(8081,()=>console.log("server success 8081"));
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
  let data='select * from furnitures';
 pool.query(data,(err,result)=>{
   if (err){
    res.send(err)
   }
   else{
  return res.json(result.rows)
   }
 })
})

app.get('/toprate',async(req,res)=>{
  let data='select * from furnitures where rate=4.00';
 pool.query(data,(err,result)=>{
   if (err){
    res.send(err)
   }
   else{
  return res.json(result.rows)
   }
 })
})
app.get('/kitchen',async(req,res)=>{
  let data=`select * from furnitures where categorytypes='kitchen'`;
 pool.query(data,(err,result)=>{
   if (err){
    res.send(err)
   }
   else{
  return res.json(result.rows)
   }
 })
})
module.exports = app;
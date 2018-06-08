const express = require('express');
const bodyParser =require('body-parser');
const bcrypt =require('bcrypt-nodejs');
const cors = require('cors');
const register = require('./controlers/register.js');
const signin = require('./controlers/signin.js');
const image = require('./controlers/image.js');



//connect 
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'dirk',
    database : 'smartbrain'
  }
});

const app =express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res ) => res.send(database.users))
app.post('/signin', (req , res ) => {signin.handleSignin(req , res , knex ,bcrypt)})
app.post('/register',(req,res) => { register.handleRegister( req , res , knex , bcrypt)})
app.get('/profile/:id', (req ,res) => {profile.handelProfileGet(req,res,knex)})
app.put('/image',(req,res) => { image.handleImage(req ,res ,knex)})
app.post('/imageurl',(req,res) => { image.handleApiCall(req ,res)})

app.listen(3001, () => {
	console.log('App is running on port 3000');
})
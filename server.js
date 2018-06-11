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
    connectionString  : process.env.DATABASE_URL, // 'postgresql-rigid-28132',
    ssl: true,
  }
});

const app =express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res ) => res.send('it is working'))
app.post('/signin', (req , res ) => {signin.handleSignin(req , res , knex ,bcrypt)})
app.post('/register',(req,res) => { register.handleRegister( req , res , knex , bcrypt)})
app.get('/profile/:id', (req ,res) => {profile.handelProfileGet(req,res,knex)})
app.put('/image',(req,res) => { image.handleImage(req ,res ,knex)})
app.post('/imageurl',(req,res) => { image.handleApiCall(req ,res)})

app.listen(process.env.PORT || 3001, () => {
	console.log(`App is running on port ${process.env.PORT}`);
})
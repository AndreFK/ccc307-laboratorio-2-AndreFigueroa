const fetch = require('node-fetch');
var express = require('express');
var app= express();

var mostrarUsuarios = function(){

  return new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>resolve(json))
    });
  };

mostrarUsuarios().then(function(jsonV)
{
  app.get('/get_users_new',function(req,res){
    res.send(jsonV);
  });

  app.listen(8081,function(){
    console.log('localhost:8081/get_users_new');
  });

});

module.exports = {
  mostrarUsuarios
};
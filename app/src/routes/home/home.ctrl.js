'use strict';

const hello = (req, res) => {
    res.render("home/index");
  }

  const login = (req, res) =>{
    res.render("home/login");
 }

 module.exports = {
    hello,
    login,
 }
 //function login(){} 와 같다고 생각하면 된다.
 //오브젝트는 {key: value} 인데 키값만적어주면 {key :key} 와같다.
 //{hello : hello}. {login :login} 이렇게 되는거란다 뭔말이여/ 
var moment = require('moment');
var datahoje = moment().format("DD/MM/YYYY");

class Conexao{

    constructor(){

        this.title = "home";
       

    }
    home(req,res){

        res.render('home',{
            title:"Home",
            data:datahoje
            
        });
            
    };
    produtos(req,res){
        res.render('produtos',{
            title:"Produtos"
        });
            
    };
    cadastro(req,res){
        res.render('cadastro',{
            title:"Cadastro"
        });
            
    };
    clientes(req,res){
        res.render('clientes',{
            title:"Clientes"
        });
            
    };
    sobre(req,res){
        res.render('sobre',{
            title:"Sobre"
        });
            
    };


}
module.exports = new Conexao();
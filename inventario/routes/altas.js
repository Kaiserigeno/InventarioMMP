const fs = require('fs');

module.exports={
    addAltaPage: (req, res) =>{
        res.render('add-alta.ejs',{
            title: "Inventario Metal Mecanica del Pacifico"
            ,message:''
        });
    },
    addAlta: (req, res) =>{
        
        let message='';
        let rest;
        let id_herramienta=req.body.id_herramienta;
        let cantidad=req.body.cantidad;
        let hora=req.body.hora;
        let trabajador=req.body.trabajador;
        console.log(id_herramienta);
        console.log(cantidad);
        console.log(hora);
        console.log(trabajador);
        let query = "INSERT INTO `alta` (id_herramienta, cantidad, hora, trabajador) VALUES ('" +
                            id_herramienta + "', '" + cantidad + "', '" + hora + "', '" + trabajador + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
       /* let SelectQuery= "SELECT cantidad FROM `herramienta` WHERE `herramienta`.`id_herramienta`="+id_herramienta+"'";
        db.query(SelectQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
        //Resta de existencia 
        rest=SelectQuery-cantidad;
        let resta="UPDATE `herramienta` SET `cantidad`= '"+rest+"' WHERE `herramienta`.`id_herramienta` ="+id_herramienta+"'";
        db.query(resta, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/')
        });*/
    },
    editAltaPage: (req,res) => {
        let altaId=req.params.id;
        let query= "SELECT * FROM `alta` WHERE id= '"+altaId+"'";
        db.query(query,(err,result)=>{
            if(err){
                return res.status(500).send(err);
            }
            res.render('edit-alta.ejs',{
                title: "Edit Alta"
                ,altas:result[0]
                ,message:''
            });
        });
    },
    editAlta: (req,res)=> {
        let message='';
        let id=req.params.id;
        let id_herramienta=req.body.id_herramienta;
        let cantidad=req.params.cantidad;
        let hora=req.body.hora;
        let trabajador=req.body.trabajador;


        let query= "UPDATE `alta` SET `id_herramienta` ='" + id_herramienta + "', `cantidad` ='" + cantidad + "',`hora` ='"+ hora +"', `trabajador` ='" + trabajador + "' WHERE `alta`.`id` = '" + id + "'";
        db.query(query,(err,result)=>{
            if (err){
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteAlta:(req,res)=>{
        /*let total;
        let cantidad=req.params.cantidad;
        let id_herramienta=req.body.id_herramienta;
        let SelectQuery= "SELECT cantidad FROM `herramienta` WHERE `herramienta`.`id_herramienta`='"+id_herramienta+"'";
        let addQty="UPDATE `herramienta` SET `cantidad`= '"+total+"' WHERE `herramienta`.`id_herramienta` ='"+id_herramienta+"'";
        db.query(SelectQuery,(err,result)=>{
            if(err){
                return res.status(500).send(err);
            }
        })
        total=cantidad+SelectQuery;
        db.query(addQty,(err,result)=>{
            if (err){
                return res.status(500).send(err);
            }
        })*/
        let id=req.params.id;
        let deleteUserQuery='DELETE FROM alta WHERE id="'+ id+'"';
       
       db.query(deleteUserQuery,(err, result)=>{
        if(err){
            return res.status(500).send(err);
        }
        res.redirect('/');
    });
    }
};
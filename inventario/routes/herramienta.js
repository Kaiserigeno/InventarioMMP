const fs = require('fs');

module.exports = {
    addHerramientaPage: (req, res) =>{
        res.render('add-herramienta.ejs',{
            title: "Inventario Metal Mecanica del Pacifico"
            ,message:''
        });
    },
    addHerramienta: (req, res) =>{
        
        let msg='';
        let rest;
        let id_herramienta=req.body.id_herramienta;
        let cantidad=req.body.cantidad;
        let descripcion=req.body.descripcion;
        let ubicacion=req.body.ubicacion;
  
        let query = "INSERT INTO `herramienta` (id_herramienta, descripcion, cantidad, ubicacion) VALUES ('" +
                            id_herramienta + "', '" + descripcion + "', '" + cantidad + "', '" + ubicacion + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/h');
                        });
                    },
                    editHerramientaPage: (req,res) => {
                        let altaId=req.params.id_herramienta;
                        let query= "SELECT * FROM `herramienta` WHERE id_herramienta= '"+altaId+"'";
                        db.query(query,(err,result)=>{
                            if(err){
                                return res.status(500).send(err);
                            }
                            res.render('edit-herramienta.ejs',{
                                title: "Edit Herramienta"
                                ,herramientas:result[0]
                                ,message:''
                            });
                        });
                    },
                    editHerramienta: (req,res)=> {
                        let msg='';
                        let id_herramienta=req.body.id_herramienta;
                        let cantidad=req.params.cantidad;
                        let descripcion=req.body.descripcion;
                        let ubicacion=req.body.ubicacion;
                
                
                        let query= "UPDATE `herramienta` SET `id_herramienta` ='" + id_herramienta + "', `descripcion` ='" + descripcion + "',`cantidad` ='"+ cantidad +"', `ubicacion` ='" + ubicacion + "' WHERE `herramienta`.`id_herramienta` = '" + id_herramienta + "'";
                        db.query(query,(err,result)=>{
                            if (err){
                                return res.status(500).send(err);
                            }
                            res.redirect('/h');
                        });
                    },
    deleteHerramienta:(req,res)=>{
        let id_herramienta=req.params.id_herramienta;
        let deleteUserQuery='DELETE FROM herramienta WHERE id_herramienta="'+ id_herramienta+'"';
       
       db.query(deleteUserQuery,(err, result)=>{
        if(err){
            return res.status(500).send(err);
        }
        res.redirect('/h');
    });
},
    
};
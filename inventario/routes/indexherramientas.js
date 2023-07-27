module.exports ={
getHerramientaPage: (req, res) => {
    let query = "SELECT * FROM `herramienta` ORDER BY id_herramienta ASC"; // query database to get all the players

    // execute query
    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/h');
            console.log(result);
        }
        res.render('tabla-herramienta.ejs', {
            title: "Inventario Metal Mecanica del Pacifico",
            herramienta: result
        });
    });
}, 
};   
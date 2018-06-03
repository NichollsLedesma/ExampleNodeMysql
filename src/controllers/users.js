const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, fiels) => {
            if (err) res.json(err);
            res.render('usuarios', {
                data: fiels
            });
        });
    });

};

controller.guardar = (req, res) =>{
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuario SET ?', data, (err, fiels) => {
            if (err) res.json(err);
            res.redirect('/');
        });
    });    
};

controller.eliminar = (req, res) =>{
    let {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query("DELETE FROM usuario WHERE id = ?", [id], (err, rows) =>{
            if (err) res.json(err);
            res.redirect('/');
        });
    });
};

controller.editar = (req, res) =>{
    let {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query("SELECT * FROM usuario WHERE id = ?", [id], (err, user) =>{
            if (err) res.json(err);
            res.render('usuarioEdit', {
                data: user[0]
            });
        });
    });
};

controller.actualizar = (req, res) => {
    let {id} = req.params;
    let newUser = req.body;
    req.getConnection((err,conn) => {
        conn.query("UPDATE usuario SET ? WHERE id = ?", [newUser, id], (err, user) =>{
            if (err) res.json(err);
            res.redirect('/');
        });
    });
}

module.exports = controller;
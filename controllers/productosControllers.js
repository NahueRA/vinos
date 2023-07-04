const Productos = require ('../database/models/productos');

exports.index = async (req, res) => {
    const productos = await Productos.find();
    res.render('productos/index', { productos });
};

 exports.new = (req, res) => {
     res.render('productos/new');
 };

exports.create = async (req, res) => {
    console.log('el body de la creacion', req.body.productos);
    const productos = new Productos(req.body.productos);
    await productos.save();
    res.redirect(`/productos/${productos._id}`);
  };
  


exports.show = async (req, res) => {
    const productos = await Productos.findById(req.params.id);
    if (productos) {
        res.render('productos/show', { productos });
    } else {
        // Manejar el caso en el que no se encuentre el producto
        res.send('Producto no encontrado');
    }
};
exports.edit = async (req, res) => {
    const productos = await Productos.findById(req.params.id);
    
    res.render('productos/edit', { productos });
  };
  

exports.update = async (req, res) => {
    const { id } = req.params;
    const productos = await Productos.findByIdAndUpdate(id, { ...req.body.productos });
    res.redirect(`/productos/${productos._id}`);
};



exports.delete = async (req, res) => {
    const { id } = req.params;
    await Productos.findByIdAndDelete(id); // Utilizamos findByIdAndDelete para eliminar el producto físicamente de la base de datos
    res.redirect('/productos');
};




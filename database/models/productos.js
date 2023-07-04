const mongoose = require('mongoose');

const VinotecaValledeUcoSchema = new mongoose.Schema({
      producto_nombre: String,
      producto_bodega: String,
      producto_variedad:String,
      producto_tamaño:Number,
      producto_precio:Number,
      producto_stock:Number,
      imagen:String,

});

module.exports = mongoose.model('productos', VinotecaValledeUcoSchema);




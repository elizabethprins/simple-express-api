const mongoose = require('../config/database')
const { Schema } = mongoose

const recipeSchema = new Schema({
  name: { type: String, required: true },
  preparation: { type: String, required: true },
  ingredients: { type: String, required: true },
  image: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' }
})

module.exports = mongoose.model('recipes', recipeSchema)

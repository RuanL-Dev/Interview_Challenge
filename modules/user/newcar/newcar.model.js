import mongoose from 'mongoose'

const NewCarSchema = new mongoose.Schema({
  carModel: { type: String, required: true, maxlength: 30 },
  carBrand: { type: String, required: true, maxlength: 20 },
  carColor: { type: String, required: true, maxlength: 30 },
  carYear: { type: String, required: true, maxlength: 4, minlength: 4 },
  carPlate: { type: String, required: true, maxlength: 15 },
  carPrice: { type: String, required: true, maxlength: 15 }
})

export default mongoose.models.NewCar || mongoose.model('NewCar', NewCarSchema)

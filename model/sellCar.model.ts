import mongoose, { models } from 'mongoose';

const sellCarSchema = new mongoose.Schema({
    user:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User",
         required:true,
      },
   vehicleModel:{
        type: String,
        required: true,
   },
    vehicleType: {
            type: String,
            required: true,
     },
     makeYear:{
        type: String,
        required: true,
     },
     vehicleColor:{
        type: String,
        required: true,
     },
     kmDriven:{
        type: String,
        required: true,
     },
     expectedValuation:{
        type: String,
        required: false,
     },
     feature:{
        type: String,
        required: true,
     },
     fuelType:{
        type:String,
        required:true,
     },
     condition:{
        type: String,
        required: true,
     },
     accidents:{
        type: String,
        required: true,
     },
     accidentInfo:{
        type: String,
        required: false,
     },
     transmission:{
        type: String,
        required: true,
     }
}, { timestamps: true });

const SellCar = models?.SellCar || mongoose.model('SellCar', sellCarSchema);

export default SellCar;
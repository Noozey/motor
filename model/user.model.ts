import mongoose, { models } from 'mongoose';

const userSchema = new mongoose.Schema({
   fullName: {
       type: String,
       required: true,
   },
    email: {
            type: String,
            required: true,
     },
     phone:{
        type: String,
        required: true,
     },
     city:{
        type: String,
        required: true,
     }
}, { timestamps: true });

const User = models?.User || mongoose.model('User', userSchema);

export default User;
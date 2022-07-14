import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHas: String,
    phoneNumber: String,
    lastName: String,
    firstName: String,
    nickName: {
      type: String,
      unique: true,
    },
    description: String,
    position: String,
  },
  {
    timestamps: true,
  },
  
);

export default mongoose.model('User', UserSchema); 


import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      unique: true,
    },
    serviceOfActivity: {
      type: String,
      required: true,
    },
    numberOfEmployees: {
      type: String, 
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // required: true,
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Company', CompanySchema);
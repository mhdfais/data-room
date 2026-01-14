import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  folder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Folder',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  size: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: 'unknown'
  },
  url: {
    type: String,
    required: true // In a real app this would be an S3 URL or similar
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const File = mongoose.model('File', FileSchema);

export default File;

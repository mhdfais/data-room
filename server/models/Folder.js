import mongoose from 'mongoose';

const FolderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  password: {
    type: String,
    default: null
  },
  shareToken: {
    type: String,
    unique: true
  },
  access: {
    type: String,
    enum: ['viewer', 'editor'],
    default: 'viewer'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Folder = mongoose.model('Folder', FolderSchema);

export default Folder;

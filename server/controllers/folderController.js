import Folder from '../models/Folder.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export const createFolder = async (req, res) => {
  try {
    const { name, password, access } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Folder name is required' });
    }

    let hashedPassword = null;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // Generate unique share token
    const shareToken = crypto.randomBytes(20).toString('hex');

    const newFolder = new Folder({
      name,
      user: req.userId, // From auth middleware
      password: hashedPassword,
      shareToken,
      access: access || 'viewer' 
    });

    const folder = await newFolder.save();

    res.status(201).json(folder);
  } catch (error) {
    console.error('Create folder error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getFolders = async (req, res) => {
  try {
    const folders = await Folder.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(folders);
  } catch (error) {
    console.error('Get folders error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getFolderByShareToken = async (req, res) => {
  try {
    const { shareToken } = req.params;
    
    const folder = await Folder.findOne({ shareToken }).populate('user', 'username email');
    
    if (!folder) {
      return res.status(404).json({ message: 'Folder not found' });
    }

    // Share token bypasses password, so we just return the folder
    // We might want to mask the password hash though
    folder.password = undefined;

    res.json(folder);
  } catch (error) {
    console.error('Get folder by token error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

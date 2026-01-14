import File from '../models/File.js';

export const getFiles = async (req, res) => {
  try {
    const { folderId } = req.params;
    const files = await File.find({ folder: folderId, user: req.userId }).sort({ createdAt: -1 });
    res.json(files);
  } catch (error) {
    console.error('Get files error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Placeholder for upload - we can add real upload later
export const uploadFile = async (req, res) => {
    // TODO: Implement file upload logic
    res.status(501).json({ message: 'Not implemented' });
};

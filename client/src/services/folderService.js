import api from './api';

const folderService = {
  createFolder: async (folderData) => {
    const response = await api.post('/folders', folderData);
    return response.data;
  },

  getFolders: async () => {
    const response = await api.get('/folders');
    return response.data;
  }
};

export default folderService;

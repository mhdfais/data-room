import api from './api';

const fileService = {
  getFiles: async (folderId) => {
    const response = await api.get(`/files/${folderId}`);
    return response.data;
  },
  
  // Future upload method
  uploadFile: async (folderId, formData) => {
      const response = await api.post(`/files/${folderId}`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      return response.data;
  }
};

export default fileService;

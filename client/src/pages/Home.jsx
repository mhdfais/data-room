import { useState ,useEffect} from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import FolderGrid from "../components/FolderGrid";
import FileGrid from "../components/FileGrid";
import FloatingActions from "../components/FloatingActions";
import StorageCard from "../components/StorageCard";
import FolderUnlockModal from "../components/FolderUnlockModal";
import { useNavigate } from "react-router-dom";
import folderService from "../services/folderService";
import fileService from "../services/fileService";

const Home = () => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [files, setFiles] = useState([]);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [lockedFolder, setLockedFolder] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Fetch folders on mount
  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const data = await folderService.getFolders();
        setFolders(data);
        if (data.length > 0) {
          setSelectedFolder(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch folders", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFolders();
  }, []);

  // Fetch files when selected folder changes
  useEffect(() => {
    if (selectedFolder) {
      const fetchFiles = async () => {
        try {
          const fileData = await fileService.getFiles(selectedFolder._id);
          setFiles(fileData);
        } catch (error) {
          console.error("Failed to fetch files", error);
          setFiles([]);
        }
      };
      
      // If folder is locked and we don't have access (logic to be improved), maybe don't fetch?
      // For now, let's assume if we selected it, we can view it (password logic handled in selection)
      fetchFiles();
    } else {
        setFiles([]);
    }
  }, [selectedFolder]);


  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        <Header isLoggedIn={true} />
        <div className="flex justify-between">
          <PageTitle
            title="File Management Center"
            subTitle="View all client folders and keep your documents organized and up to date."
          />
          <StorageCard />
        </div>
        {folders.length === 0 && !loading ? (
          <div className="flex flex-col items-center h-[80vh] justify-center gap-2">
            <svg
              width="80"
              height="80"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_843)">
                <path
                  d="M97.5 29.25V23.5625C97.5 22.4851 97.072 21.4517 96.3101 20.6899C95.5482 19.928 94.5149 19.5 93.4375 19.5H39.8125C39.2766 19.5088 38.7444 19.4097 38.2475 19.2087C37.7506 19.0076 37.2993 18.7087 36.9203 18.3297C36.5413 17.9507 36.2424 17.4993 36.0413 17.0025C35.8403 16.5056 35.7412 15.9734 35.75 15.4375V10.5625C35.75 9.48506 35.322 8.45175 34.5601 7.68988C33.7982 6.92801 32.7649 6.5 31.6875 6.5H4.19249C3.08 6.5293 2.02206 6.98816 1.24046 7.78036C0.458857 8.57256 0.0142991 9.63659 -1.32793e-05 10.7494V92.2594C-0.0271774 92.9243 0.0776904 93.5881 0.308532 94.2123C0.539373 94.8365 0.891611 95.4088 1.3449 95.896C1.79818 96.3833 2.34353 96.776 2.94944 97.0513C3.55535 97.3266 4.2098 97.4791 4.87499 97.5H97.5"
                  fill="#E0E3E5"
                />
                <path
                  d="M4.875 97.5C5.52539 97.539 6.17668 97.4397 6.78586 97.2086C7.39504 96.9774 7.94825 96.6197 8.40898 96.1589C8.8697 95.6982 9.22746 95.145 9.45862 94.5358C9.68978 93.9266 9.7891 93.2753 9.75 92.625L10.0669 41.4943V34.125C10.0816 33.59 10.2018 33.0632 10.4207 32.5748C10.6397 32.0865 10.9529 31.6462 11.3425 31.2793C11.7321 30.9123 12.1903 30.626 12.6909 30.4367C13.1914 30.2474 13.7245 30.1589 14.2594 30.1762H99.8075C100.342 30.1589 100.875 30.2474 101.376 30.4367C101.877 30.626 102.335 30.9123 102.724 31.2793C103.114 31.6462 103.427 32.0865 103.646 32.5748C103.865 33.0632 103.985 33.59 104 34.125V92.625C103.914 93.8897 103.373 95.0806 102.477 95.977C101.581 96.8733 100.39 97.4144 99.125 97.5H4.875Z"
                  fill="#F2F4F5"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_843">
                  <rect width="104" height="104" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-2xl">No folders yet</p>
            <p className="text-sm text-center">
              Get started by uploading your <br /> first file
            </p>
            <div className="flex flex-row items-center gap-2 border bg-[#112635] py-1 px-1 rounded-sm">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_839)">
                  <path
                    d="M22.5 6.75V5.4375C22.5 5.18886 22.4012 4.9504 22.2254 4.77459C22.0496 4.59877 21.8111 4.5 21.5625 4.5H9.18749C9.06382 4.50203 8.941 4.47916 8.82634 4.43277C8.71168 4.38637 8.60752 4.31739 8.52006 4.22993C8.4326 4.14247 8.36362 4.03831 8.31722 3.92365C8.27083 3.80899 8.24796 3.68617 8.24999 3.5625V2.4375C8.24999 2.18886 8.15122 1.9504 7.9754 1.77459C7.79959 1.59877 7.56113 1.5 7.31249 1.5H0.967492C0.710765 1.50676 0.466624 1.61265 0.286255 1.79547C0.105885 1.97828 0.0032951 2.22383 -7.75943e-06 2.48062V21.2906C-0.00627639 21.4441 0.0179239 21.5973 0.0711949 21.7413C0.124466 21.8853 0.205752 22.0174 0.310356 22.1299C0.414961 22.2423 0.540811 22.3329 0.680635 22.3964C0.82046 22.46 0.971487 22.4952 1.12499 22.5H22.5"
                    fill="#E0E3E5"
                  />
                  <path
                    d="M1.125 22.5001C1.27509 22.5091 1.42539 22.4862 1.56597 22.4329C1.70655 22.3795 1.83421 22.297 1.94053 22.1907C2.04685 22.0843 2.12941 21.9567 2.18276 21.8161C2.2361 21.6755 2.25902 21.5252 2.25 21.3751L2.32313 9.57575V7.87512C2.32652 7.75167 2.35427 7.6301 2.40479 7.5174C2.4553 7.40471 2.52759 7.3031 2.61749 7.21842C2.7074 7.13375 2.81314 7.06767 2.92866 7.02399C3.04418 6.9803 3.16719 6.95987 3.29062 6.96387H23.0325C23.1559 6.95987 23.2789 6.9803 23.3945 7.02399C23.51 7.06767 23.6157 7.13375 23.7056 7.21842C23.7955 7.3031 23.8678 7.40471 23.9183 7.5174C23.9689 7.6301 23.9966 7.75167 24 7.87512V21.3751C23.9803 21.667 23.8554 21.9418 23.6485 22.1487C23.4417 22.3555 23.1669 22.4804 22.875 22.5001H1.125Z"
                    fill="#F2F4F5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_839">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <a className="text-sm text-white px-1" onClick={()=>navigate('/add-folder')}  href="">
                Create Folder
              </a>
            </div>
          </div>
        ) : (
          <FolderGrid
            folders={folders}
            selectedFolder={selectedFolder}
            onSelect={setSelectedFolder}
            onLockedClick={(folder) => {
              setLockedFolder(folder);
              setShowPasswordModal(true);
            }}
          />
        )}
        {folders.length !== 0 && (
          <>
            <FileGrid files={files} />
            <FloatingActions />
          </>
        )}
      </div>
      <FolderUnlockModal
        open={showPasswordModal}
        onClose={() => {
          setShowPasswordModal(false);
          setLockedFolder(null);
        }}
        onSubmit={() => {
          setSelectedFolder(lockedFolder);
          setShowPasswordModal(false);
          setLockedFolder(null);
          // validate password → then unlock folder
        }}
      />
    </>
  );
};

export default Home;

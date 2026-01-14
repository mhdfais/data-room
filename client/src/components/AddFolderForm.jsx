import { useState } from "react";
import folderService from "../services/folderService";
import { useNavigate } from "react-router-dom";

const AddFolderForm = () => {
  const [passwordEnabled, setPasswordEnabled] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [access, setAccess] = useState("viewer");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");

    if (!name.trim()) {
      setError("Folder name is required");
      return;
    }

    if (passwordEnabled) {
      if (password.length < 4) {
        setError("Password must be at least 4 characters");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }

    setLoading(true);
    try {
      await folderService.createFolder({
        name,
        password: passwordEnabled ? password : null,
        access
      });
      navigate("/"); // Redirect to home or wherever
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create folder");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[80vh]">
      <h1 className="text-2xl font-semibold mb-1">Create New Folder</h1>
      <p className="text-gray-500 text-sm mb-5">
        Organize your client documents by creating a secure new folder.
      </p>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-sm">
          {error}
        </div>
      )}

      {/* Folder name */}
      <div className="mb-5">
        <label className="text-sm font-medium block mb-2">
          Folder Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter folder name"
          className="w-full px-3 py-1 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Password protection */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <label className="text-sm font-medium block">
            Password Protection
          </label>
          <p className="text-xs text-gray-400">
            Add an extra layer of security to this folder.
          </p>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setPasswordEnabled(!passwordEnabled)}
          className={`w-11 h-6 flex items-center rounded-full px-1 transition ${
            passwordEnabled ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`bg-white w-4 h-4 rounded-full transform transition ${
              passwordEnabled ? "translate-x-5" : ""
            }`}
          />
        </button>
      </div>

      {/* Password box */}
      {passwordEnabled && (
        <div className="bg-gray-100 p-4 rounded-sm mb-5">
          <div className="mb-2">
            <label className="text-sm font-medium block mb-1">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password here"
              className="w-full px-3 py-1 rounded-sm bg-white outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="re-enter password here"
              className="w-full px-3 py-1 rounded-sm bg-white outline-none"
            />
          </div>
        </div>
      )}

      {/* Access */}
      <div className="mb-5">
        <label className="text-sm font-medium block mb-2">Access</label>
        <select 
          className="w-full px-4 py-3 rounded-sm bg-gray-100 outline-none"
          value={access}
          onChange={(e) => setAccess(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="editor">Editor</option>
        </select>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="bg-slate-900 text-white px-6 py-2 rounded-sm text-sm disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Folder"}
        </button>
      </div>
    </div>
  );
};

export default AddFolderForm;

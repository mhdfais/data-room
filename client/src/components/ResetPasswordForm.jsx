

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import LoadingRabbit from "./LoadingRabbit";
import rabbitSaveVid from '../assets/rabbit-save-password.mp4'

const ResetPasswordForm = ({ showSuccessModal, setShowSuccessModal }) => {
  const { token } = useParams();
  const { resetPassword, verifyResetToken } = useAuth();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [showSuccessModal, setShowSuccessModal] = useState(false); // Moved to parent
  
  const [verifying, setVerifying] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const result = await verifyResetToken(token);
      if (result.success) {
        setTokenValid(true);
      } else {
        setTokenValid(false);
        setError(result.message);
      }
      setVerifying(false);
    };
    verifyToken();
  }, [token, verifyResetToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    const result = await resetPassword(token, password);
    setLoading(false);

    if (result.success) {
      setShowSuccessModal(true);
    } else {
      setError(result.message);
    }
  };

  if (verifying) {
    return (
      <div className="flex justify-center items-center h-40">
        <LoadingRabbit />
      </div>
    );
  }

  if (!tokenValid) {
    return (
      <div className="w-[400px] text-center p-6 bg-white rounded-lg">
        <div className="flex justify-center mb-4">
          <FaExclamationCircle className="text-red-500 text-5xl" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Invalid or Expired Link</h2>
        <p className="text-gray-500 mb-6">
          This password reset link is invalid or has expired. Please request a new one.
        </p>
        <button
          onClick={() => navigate("/forgot-password")}
          className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium"
        >
          Request New Link
        </button>
      </div>
    );
  }

  if (showSuccessModal) {
    return (
      <div className=" text-center p-6 bg-white rounded-lg">
        <div className="flex justify-center mb-4">
          <video className="w-30 h-auto" src={rabbitSaveVid} autoPlay muted loop></video>
        </div>
        <h2 className=" text-[#067C1F] font-semibold mb-2">Password Reset Successfully</h2>
        <p className="text-xs text-gray-500 mb-6">
          You can now log in with your new password.
        </p>
        <button
          onClick={() => navigate("/signin")}
          className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium"
        >
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div className="w-[400px]">
      <h1 className="text-2xl font-semibold mb-1">Create New Password</h1>
      <p className="text-gray-500 text-sm mb-6">
        Set a strong password to secure your account.
      </p>

      {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-sm">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium block mb-2">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
          <p className="text-xs mt-1 font-extralight">Minimum 8 characters</p>
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium block mb-2">
            Confirm password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
            className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="">
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium disabled:opacity-50"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;

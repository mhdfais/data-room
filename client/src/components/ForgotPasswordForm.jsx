
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPasswordForm = () => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    const result = await forgotPassword(email);

    setLoading(false);
    if (result.success) {
      setMessage("Check your email for the reset link.");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="w-[400px]">
      <h1 className="text-2xl font-semibold mb-1">Forgot Password</h1>
      <p className="text-gray-500 text-sm mb-6">
        Enter your email address to receive a password reset link.
      </p>

      {message && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded text-sm">{message}</div>}
      {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded text-sm">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium block mb-2">Email ID</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link to="/signin" className="text-sm text-slate-900 hover:underline">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

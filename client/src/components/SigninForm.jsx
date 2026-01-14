import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingRabbit from "./LoadingRabbit";

const SigninForm = ({ onLoadingChange }) => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate('/');
    }
  }, [isAuthenticated, loading, navigate]);



  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if(onLoadingChange) onLoadingChange(true);

    const result = await login(credentials);

    if (result.success) {
        setTimeout(() => {
      navigate('/');
    }, 2000);
    } else {
      setError(result.message);
      setLoading(false);
      if(onLoadingChange) onLoadingChange(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <LoadingRabbit />
      </div>
    );
  }

  return (
    <div className="w-[400px]">
      <h1 className="text-2xl font-semibold mb-1">Sign in to your account</h1>
      <p className="text-gray-500 text-sm mb-8">
        Enter your credentials to access your data room
      </p>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium block mb-2">Email ID</label>
          <input
            type="email"
            required
            value={credentials.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-10">
          <label className="text-sm font-medium block mb-2">Password</label>
          <input
            type="password"
            required
            value={credentials.password}
            onChange={handleChange}
            placeholder="********"
            className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
          />
          <p
            onClick={() => navigate('/forgot-password')}
            className="text-sm float-right mt-1 hover:underline cursor-pointer"
          >
            Forgot Password?
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium"
        >
          Sign In
        </button>
      </form>

      <p onClick={() => navigate('/signup')} className="text-sm text-center mt-3 cursor-pointer">
        Don't have an account? <span className="underline">Sign up</span>
      </p>
    </div>
  );
};


export default SigninForm;

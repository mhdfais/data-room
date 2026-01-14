import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignupForm = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [userData, setUserData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const result = await register(userData);
        if (result.success) {
            navigate('/'); 
        } else {
            setError(result.message);
        }
        setLoading(false);
    };

    const isUserExistsError = error === 'User already exists';

  return (
    <div className="w-[400px]">
      <h1 className="text-2xl font-semibold mb-1">Create an account</h1>
      <p className="text-gray-500 text-sm mb-8">
        Get started with your secure data room today
      </p>

      {error && (
        <div className={`text-sm mb-4 p-2 rounded ${isUserExistsError ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-500'}`}>
            {error}
            {isUserExistsError && (
                <div className="mt-1">
                    <span 
                        onClick={() => navigate('/signin')} 
                        className="font-bold underline cursor-pointer hover:text-yellow-600"
                    >
                        Click here to Sign In
                    </span>
                </div>
            )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
          {/* Folder name */}
          <div className="mb-4">
            <label className="text-sm font-medium block mb-2">Full Name</label>
            <input
              type="text"
              name="username"
              required
              value={userData.username}
              onChange={handleChange}
              placeholder="Enter name here"
              className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium block mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              required
              value={userData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium block mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              value={userData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-3 py-1 rounded-sm bg-gray-100 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

           <div className="">
            <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white px-6 py-2 rounded-sm text-sm font-medium disabled:opacity-50">
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
      </form>

      <p onClick={()=>navigate('/signin')} className="text-sm text-center mt-3 cursor-pointer">Already have an account? <span className="underline">Sign in</span> </p>
    </div>
  );
};

export default SignupForm;

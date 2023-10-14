import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call to authenticate user)
    // If successful, you can redirect to a dashboard or another page
    router.push('/dashboard'); // Redirect to dashboard page
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality (e.g., show a modal or navigate to a forgot password page)
  };

  const handleLoginWithGoogle = () => {
    // Implement login with Google functionality (e.g., initiate Google OAuth flow)
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot your password?
            </button>
            <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login with Google
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p>Don't have an account?</p>
          <button
            onClick={() => router.push('/signup')}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
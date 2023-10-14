import { useState } from 'react';
import { useRouter } from 'next/router';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call to create a new user)
    // If successful, you can redirect to a welcome page or login
    router.push('/welcome'); // Redirect to welcome page
  };

  const handleSignupWithGoogle = () => {
    // Implement signup with Google functionality (e.g., initiate Google OAuth flow)
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full p-2 border rounded-md"
              value={mobile}
              onChange={handleMobileChange}
              required
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full p-2 border rounded-md"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSignupWithGoogle}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full"
          >
            Sign Up with Google
          </button>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p>Already have an account?</p>
          <button
            onClick={() => router.push('/login')}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
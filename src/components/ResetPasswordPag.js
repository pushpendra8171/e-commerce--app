import { useState } from 'react';
import { useRouter } from 'next/router';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async () => {
    // Implement logic to reset the password here, for example, making an API request

    // 1. Check if newPassword matches confirmPassword
    if (newPassword !== confirmPassword) {
      setError("Passwords don't match. Please try again.");
      return;
    }

    try {
      // 2. Send a secure request to reset the password
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }), // Send the new password to the server
      });

      if (response.ok) {
        // 3. Password reset successful, redirect the user to the login page
        router.push('/login');
      } else {
        // 4. Handle password reset failure, show an error message
        setError('Password reset failed. Please try again.');
      }
    } catch (error) {
      // 5. Handle network or server errors here
      setError('An error occurred while resetting the password. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Reset Password</h2>
        <form>
          <div className="space-y-2">
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border rounded-md"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded-md"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="button"
            onClick={handleResetPassword}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
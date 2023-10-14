import { useState } from 'react';
import { useRouter } from 'next/router';

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async () => {
    // Implement logic to verify the OTP here, for example, making an API request
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }), // Send OTP to the server for verification
      });

      if (response.ok) {
        // OTP is valid, redirect the user to the password reset page
        router.push('/reset-password'); // Implement the reset password page
      } else {
        // Handle OTP verification failure, show an error message
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      // Handle network or server errors here
      setError('An error occurred while verifying OTP. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center">Verify OTP</h2>
        <p className="text-center text-gray-600">
          Enter the OTP sent to your email/mobile.
        </p>
        <form>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="OTP"
              className="w-full p-2 border rounded-md"
              value={otp}
              onChange={handleOtpChange}
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="button"
            onClick={handleVerifyOtp}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </form>
        <div className="text-center">
          <p>Didn't receive the OTP?</p>
          {/* Add a button/link to resend the OTP */}
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
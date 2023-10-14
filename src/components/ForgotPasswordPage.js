import { useState } from 'react';
import { useRouter } from 'next/router';

const ForgotPasswordPage = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const router = useRouter();

  const handleEmailOrMobileChange = (e) => {
    setEmailOrMobile(e.target.value);
  };

  const handleSendOtp = async () => {
    // Add logic to send OTP to the provided email/mobile
    // Typically, you would send a verification code to the user
    // and then navigate them to a page to enter the OTP

    // Make a call to the backend API to send the OTP
    const response = await fetch('/api/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emailOrMobile,
      }),
    });

    // Check the response status code
    if (response.status === 200) {
      // OTP sent successfully
      console.log('OTP sent successfully!');
      router.push('/verify-otp'); // Redirect to OTP verification page
    } else {
      // Error sending OTP
      console.log('Error sending OTP:', response.statusText);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Forgot Password</h2>
        <input
          type="email"
          placeholder="Email or Mobile Number"
          className="w-full p-2 rounded-md border-gray-300"
          value={emailOrMobile}
          onChange={handleEmailOrMobileChange}
        />
        <button type="button" className="btn btn-primary" onClick={handleSendOtp}>
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

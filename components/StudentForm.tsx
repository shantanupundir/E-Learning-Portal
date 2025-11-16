import React, { useState } from 'react';

interface StudentsFormProps {
  onLogin: (email: string, password: string) => Promise<void>;
  onForgotPassword?: () => void; // Add this optional prop
}

const StudentsForm: React.FC<StudentsFormProps> = ({ onLogin, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      await onLogin(email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-[#000319] p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6 text-center">Login as Student</h1>
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-green-600 text-white p-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
      >
        Login as Student
      </button>
      <p className="mt-4 text-center text-blue-500 cursor-pointer" onClick={onForgotPassword}>
        Forgot Password?
      </p>
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default StudentsForm;

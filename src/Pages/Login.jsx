// AuthPage.js
import React, { useState } from 'react';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthAction = () => {
    // Implement your authentication logic here
    if (isLogin) {
      console.log('Logging in...', { email, password });
    } else {
      console.log('Registering...', { email, password });
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-blue-500 background-image: 'google.png">
        <img className = 'rounded-xl max-h-[90vh]  backgrount-image: src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill%2Cf_auto%2Ch_630%2Cw_1200/v1464051370/zewn7jsdcyy5apqndiac.jpg"' />

      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-6">{isLogin ? 'Login' : 'Register'}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
         

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
            onClick={handleAuthAction}
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
          
        </form>
        <p className="mt-4 text-sm text-gray-600">
          {isLogin ? 'New user? ' : 'Already have an account? '}
          <span
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register here' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

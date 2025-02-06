import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordProtection: React.FC = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const correctPassword = import.meta.env.VITE_SITE_PASSWORD;

    useEffect(() => {
        // Check if already authenticated
        const isAuthenticated = sessionStorage.getItem('isAuthenticated');
        if (isAuthenticated === 'true') {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === correctPassword) {
            sessionStorage.setItem('isAuthenticated', 'true');
            navigate('/');
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-altivo  text-gray-900">
                        The Pedrick Wedding
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm text-center">{error}</div>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sage-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        >
                            Enter Site
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordProtection; 
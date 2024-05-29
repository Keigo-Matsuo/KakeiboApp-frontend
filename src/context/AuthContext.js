import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // アカウント登録
    const register = async (email, name, password) => {
        const response = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, name, password })
        });
        const data = await response.json();
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = '/'; // アカウント登録後ログイン画面にリダイレクト
    };

    // ログイン
    const login = async (email, password) => {
        const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (response.ok) {
            const data = await response.json();
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('isLoggedIn', true);
            
            window.location.href = '/home';

            // setTimeout(() => {
            //     if (localStorage.getItem('isLoggedIn')) {
            //         navigate('/home'); // ログイン成功後にリダイレクト
            //     }
            // }, 1000);
        } else {
            alert('Login failed');
        }
    };

    // ログアウト
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        window.location.href = '/'; // ログイン画面へ
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

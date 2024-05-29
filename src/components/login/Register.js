// Register.js
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(email, name, password);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
        <a href="/">アカウント登録済みの方はこちらからログイン</a>
        </>
    );
};

export default Register;

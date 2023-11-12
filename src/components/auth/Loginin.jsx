import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import firebaseApp from '../../firebaseConfig';

export const Loginin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLoginOrRegister = async () => {
        const auth = getAuth(firebaseApp);

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                console.log('User successfully logged in');
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Set the username in the user's profile
                await updateProfile(user, { displayName: username });

                console.log('User successfully registered with username:', username);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            {!isLogin && (
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            )}

            <button onClick={handleLoginOrRegister}>{isLogin ? 'Login' : 'Register'}</button>
            <p onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Create New Account' : 'Already have an account? Sign In'}
            </p>
        </div>
    );
};

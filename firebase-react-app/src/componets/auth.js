import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../config/firebase';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email,password)
    }
  return (
    <div>
        <input placeholder='Email..'
        type='email'
        onChange={ (e) => setEmail(e.target.value)}/>
        <input placeholder='Password..'
        type='password'
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign in</button>
    </div>
  )
}

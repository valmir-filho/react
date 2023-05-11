// React.
import { useState, useEffect } from 'react';
// Firebase.
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    // Limpeza e vazamento de memória.
    const [cancelled, setCancelled] = useState(false);
    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    };

    // Register.
    const createUser = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            await updateProfile(user, {
                displayName: data.displayName,

            });
            setLoading(false);
            return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
            let systemErrorMessage;
            if (error.message.includes("Password")) {
                systemErrorMessage = "😵‍💫 Erro! A senha deve possuir pelo menos 6 caracteres!";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "😵‍💫 Erro! Email já cadastrado!";
            } else {
                systemErrorMessage = "😵‍💫 Erro! Tente novamente mais tarde!";
            }
            setLoading(false);
            setError(systemErrorMessage);
        }
    };

    //Logout.
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    };

    //Login.
    const login = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError(false);
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(true);
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
            console.log(error.message.includes("user-not"));
            let systemErrorMessage;
            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "😵‍💫 Erro! Usuário não encontrado!";
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "😵‍💫 Erro! Senha incorreta!";
            } else {
                systemErrorMessage = "😵‍💫 Erro! Tente novamente mais tarde!";
            }
            console.log(systemErrorMessage);
            setError(systemErrorMessage);
        }
        console.log(error);
        setLoading(false);
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { auth, createUser, error, loading, logout, login };
};
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import {useState, useEffect} from 'react';   
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'; 

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    // Google Sign In
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

       return signInWithPopup(auth, googleProvider);
    }

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            }
            else{
                setUsers({});
            } 
            setIsLoading(false);
          });
          return () => unsubscribed
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUsers({});
        }).finally( () => setIsLoading(false))
    }

    return {users, setUsers, signInUsingGoogle, logOut, isLoading}
}

export default useFirebase;
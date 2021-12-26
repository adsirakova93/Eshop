import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
        apiKey: "AIzaSyALmx18bQ3gktK3GBHfbuYkKQJzIqupaho",
        authDomain: "eshop-236af.firebaseapp.com",
        projectId: "eshop-236af",
        storageBucket: "eshop-236af.appspot.com",
        messagingSenderId: "150461940138",
        appId: "1:150461940138:web:9d29b1131a50742d0a6bd3"
      
    };
    
    class Firebase{
        constructor(){
            app.initializeApp(firebaseConfig);
            this.storage = app.storage();
            this.db = app.firestore();
            this.auth = app.auth();
        }

        createAccount = (email, password) => this.createUserWithEmailAndPassword(email,password);
        signIn = (email, password) => this.auth.sighInWithEmailAndPassword(email,password);
        signInWithGoogle = () => this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
        signOut = () => this.auth.signOut();
    }




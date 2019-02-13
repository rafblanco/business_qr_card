// firebase configuration 
 
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database' 

// Initialize Firebase
 const config = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DATABASE_URL,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
 };


 class Firebase {
   constructor() {
     app.initializeApp(config);

     this.auth = app.auth();
     this.db = app.database();
   }

     // *** Auth API ***
     // for sign up function to take email/password params
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  // sign in function taking email/password params
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // if no user is authenticated, nothing happens
  doSignOut = () => this.auth.signOut();

  // authentication methods to reset and change a password
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  
  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
 }

 export default Firebase;
// Firebase class, Firebase context for Consumer and Provider components
// is used to provide a Firebase instance once at the top-level
// of your React component tree
import FirebaseContext from './context';

// making the higher order component for signupform component prop
import { withFirebase } from './context';


// retrieve the Firebase instance if it is needed in the React component
import Firebase from './firebase';



export default Firebase;

export { FirebaseContext, withFirebase };
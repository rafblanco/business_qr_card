import React from 'react';

// creates two components, provide firebase instance once at top-level of react component tree

const FirebaseContext = React.createContext(null);

// higher order component that may be simplier than using a render prop component
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;

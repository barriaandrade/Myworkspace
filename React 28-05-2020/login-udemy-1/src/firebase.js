import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAfUAybeo3QuT-lnwxd0AVcuC8dWL8CuXM",
    authDomain: "create-react-udemy.firebaseapp.com",
    databaseURL: "https://create-react-udemy.firebaseio.com",
    projectId: "create-react-udemy",
    storageBucket: "create-react-udemy.appspot.com",
    messagingSenderId: "888245985582",
    appId: "1:888245985582:web:533c022a34316a7c25dabf"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore()
  const auth = app.auth()

  export {db, auth}
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  //   apiKey: "AIzaSyDHKoKcSWJE7hiW8DkB2XCRgTpE55-3__w",
  //   authDomain: "crud-with-redux-dda11.firebaseapp.com",
  //   projectId: "crud-with-redux-dda11",
  //   storageBucket: "crud-with-redux-dda11.appspot.com",
  //   messagingSenderId: "36362764283",
  //   appId: "1:36362764283:web:bcd6c9b51806336b99555e",
  //   measurementId: "G-1ZYDDW6ZN4",
  // };
  
  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getFirestore } from "firebase/firestore";
  import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHKoKcSWJE7hiW8DkB2XCRgTpE55-3__w",
  authDomain: "crud-with-redux-dda11.firebaseapp.com",
  databaseURL: "https://crud-with-redux-dda11-default-rtdb.firebaseio.com",
  projectId: "crud-with-redux-dda11",
  storageBucket: "crud-with-redux-dda11.appspot.com",
  messagingSenderId: "36362764283",
  appId: "1:36362764283:web:bcd6c9b51806336b99555e",
  measurementId: "G-1ZYDDW6ZN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(process.env.RECAPTCHA),
  isTokenAutoRefreshEnabled: true,
});
export default getFirestore()
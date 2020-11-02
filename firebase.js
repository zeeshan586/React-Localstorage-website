import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqkk-eis_5-gjcpFvuihiWuJzSnwE4CuI",
    authDomain: "slider-e12fd.firebaseapp.com",
    databaseURL: "https://slider-e12fd.firebaseio.com",
    projectId: "slider-e12fd",
    storageBucket: "slider-e12fd.appspot.com",
    messagingSenderId: "358061031738",
    appId: "1:358061031738:web:dc610074c3bab9203f9003",
    measurementId: "G-CZC86VQ177"
  };
 let firebaseInit =  firebase.initializeApp(firebaseConfig);

 export default firebaseInit;
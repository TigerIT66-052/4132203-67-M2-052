// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyBsfiQ9QyOdb_kmdUaSzqlLPsBZ_rmg64E",
    authDomain: "suxbho-71992.firebaseapp.com",
    databaseURL: "https://suxbho-71992-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "suxbho-71992",
    storageBucket: "suxbho-71992.firebasestorage.app",
    messagingSenderId: "371058455813",
    appId: "1:371058455813:web:cf02b4ffa530d637d2b36c",
    measurementId: "G-ZXWD727F57"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}
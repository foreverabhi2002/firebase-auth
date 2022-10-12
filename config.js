const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

console.log("Connected with firebase");

firebase.initializeApp(firebaseConfig);
module.exports = firebase;
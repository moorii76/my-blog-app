import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDvmypFhiwl7Q2p5BmRkDF4lNRdc0-uI14",
    authDomain: "travelerengineerdiary.firebaseapp.com",
    databaseURL: "https://travelerengineerdiary.firebaseio.com",
    projectId: "travelerengineerdiary",
    storageBucket: "travelerengineerdiary.appspot.com",
    messagingSenderId: "30213772412"
};

export const  firebaseapp = firebase.initializeApp(config);
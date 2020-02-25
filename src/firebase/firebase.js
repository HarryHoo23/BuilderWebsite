import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAYhFtnrSOmXRdbHpWFruzETO7L2A1gWHI",
    authDomain: "neat-vent-254802.firebaseapp.com",
    databaseURL: "https://neat-vent-254802.firebaseio.com",
    projectId: "neat-vent-254802",
    storageBucket: "neat-vent-254802.appspot.com",
    messagingSenderId: "991196638747",
    appId: "1:991196638747:web:9044c8d0d0327acf9a92be",
    measurementId: "G-FLVE2K261R"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
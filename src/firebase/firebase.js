import firebase from 'firebase/app';
import { APIKEY, APPID, DATABASEURL } from '../Components/BuildWithUs/keys';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: APIKEY,
    authDomain: "neat-vent-254802.firebaseapp.com",
    databaseURL: DATABASEURL,
    projectId: "neat-vent-254802",
    storageBucket: "neat-vent-254802.appspot.com",
    messagingSenderId: "991196638747",
    appId: APPID,
    measurementId: "G-FLVE2K261R"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}
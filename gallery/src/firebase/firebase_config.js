import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "",
    authDomain: "photo-gallery-2101a.firebaseapp.com",
    projectId: "photo-gallery-2101a",
    storageBucket: "photo-gallery-2101a.appspot.com",
    messagingSenderId: "165768576780",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();

  export {projectStorage, projectFirestore};

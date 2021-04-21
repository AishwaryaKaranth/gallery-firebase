import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDsy9l6e5RHCZ4c8xWe9Bf9Dr4puY8Qr90",
    authDomain: "photo-gallery-2101a.firebaseapp.com",
    projectId: "photo-gallery-2101a",
    storageBucket: "photo-gallery-2101a.appspot.com",
    messagingSenderId: "165768576780",
    appId: "1:165768576780:web:c6df3f28677ec3b5a95329"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;//built in timestamp in firestore.
  //const like=firebase.firestore.FieldValue.increment(1);
  
  export {projectStorage, projectFirestore, timestamp};

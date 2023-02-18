import firebase  from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBYBBwhvf1AbEZxpS6l4L0g2ZOs21u92Ls",
    authDomain: "vue-blog-system-ecafe.firebaseapp.com",
    projectId: "vue-blog-system-ecafe",
    storageBucket: "vue-blog-system-ecafe.appspot.com",
    messagingSenderId: "243344461330",
    appId: "1:243344461330:web:f111e870905c58c8f5d2cb"
};

// firebase init
firebase.initializeApp(firebaseConfig);

// database setup
let db = firebase.firestore();

export {db}

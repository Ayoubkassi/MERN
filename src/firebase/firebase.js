import Firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import { seedDatabase } from '../seed';

//we need to seed our db

//we need our config

const config = {
    apiKey: "AIzaSyAbeiBIMWhjmJWkbR2SPYa2Jc6g0NZRAak",
    authDomain: "netflix-clone-cd00b.firebaseapp.com",
    projectId: "netflix-clone-cd00b",
    storageBucket: "netflix-clone-cd00b.appspot.com",
    messagingSenderId: "571406608816",
    appId: "1:571406608816:web:62b77b1c95a3e68781ce75",
    measurementId: "G-49CZ48SLVH"
}

const firebase = Firebase.initializeApp(config);

//we seed just for a first time
//seedDatabase(firebase);

export { firebase };

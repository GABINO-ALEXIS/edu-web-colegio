import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCMN_yVuGpetqr5Ou5hrAqB1R94r_ibpyo',
  authDomain: 'colegio-inmaculada-concepcion.firebaseapp.com',
  projectId: 'colegio-inmaculada-concepcion',
  storageBucket: 'colegio-inmaculada-concepcion.appspot.com',
  messagingSenderId: '1064364183333',
  appId: '1:1064364183333:web:bc1962d0e1bb84b4a394cc'
}

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)

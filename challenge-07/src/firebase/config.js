import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAVmYcFr28zeXh0eByAfmzNoG5N4dNWNL4',
  authDomain: 'challenge-07-47c16.firebaseapp.com',
  projectId: 'challenge-07-47c16',
  storageBucket: 'challenge-07-47c16.firebasestorage.app',
  messagingSenderId: '247566840436',
  appId: '1:247566840436:web:8f43a9f8830391a3d85721',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)   // para Login/Register/Logout
export const db = getFirestore(app) // para las tareas (Firestore)
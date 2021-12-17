import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBROVFEm8pdLbOfRAyS0TRD_sYK_9jQ4vw",
  authDomain: "task-manager-d6598.firebaseapp.com",
  projectId: "task-manager-d6598",
  storageBucket: "task-manager-d6598.appspot.com",
  messagingSenderId: "363834833257",
  appId: "1:363834833257:web:9698711b8e7869a7b725f8"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp, db }
export default firebaseApp
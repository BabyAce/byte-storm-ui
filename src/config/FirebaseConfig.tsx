import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBtMCKOr2eyWoYC0I9dhqnejOm7SFureP4',
  authDomain: 'byte-storm.firebaseapp.com',
  projectId: 'byte-storm',
  storageBucket: 'byte-storm.appspot.com',
  messagingSenderId: '748820559329',
  appId: '1:748820559329:web:2202b546e18b8a4dd90ea0',
  measurementId: 'G-T93R2ZS4KF'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
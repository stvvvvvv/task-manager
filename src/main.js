import { createApp, useAttrs } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

import './assets/styles/re.scss'

const firebaseConfig = {
  apiKey: "AIzaSyBROVFEm8pdLbOfRAyS0TRD_sYK_9jQ4vw",
  authDomain: "task-manager-d6598.firebaseapp.com",
  projectId: "task-manager-d6598",
  storageBucket: "task-manager-d6598.appspot.com",
  messagingSenderId: "363834833257",
  appId: "1:363834833257:web:9698711b8e7869a7b725f8"
};

const fb = initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')

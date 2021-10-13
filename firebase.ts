// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDnQ_ZLZh1JkahnuXiTafmiwLgRUOUD0wI',
	authDomain: 'insta-2-92c06.firebaseapp.com',
	projectId: 'insta-2-92c06',
	storageBucket: 'insta-2-92c06.appspot.com',
	messagingSenderId: '69174830364',
	appId: '1:69174830364:web:937189f43e56f51cb886d9',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

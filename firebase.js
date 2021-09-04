var firebaseConfig = {
  apiKey: "AIzaSyCO7qeHg8G9MYQE7vz5fpURITkjGrJiQY0",
  authDomain: "todo-app-60748.firebaseapp.com",
  projectId: "todo-app-60748",
  storageBucket: "todo-app-60748.appspot.com",
  messagingSenderId: "99146565981",
  appId: "1:99146565981:web:3e085a092cda3ee44180b4",
  measurementId: "G-B6YZM6WLSE",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();; //accessible anywhere inside the app since I've used db

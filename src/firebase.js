import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyCoyPI-Q3wcN1vhuKq3J0XPrsKN8B9JfZ0",
    authDomain: "mehealth-37ff3.firebaseapp.com",
    databaseURL: "https://mehealth-37ff3-default-rtdb.firebaseio.com",
    projectId: "mehealth-37ff3",
    storageBucket: "mehealth-37ff3.appspot.com",
    messagingSenderId: "354640253573",
    appId: "1:354640253573:web:fd0c18d92f8f78e4564fec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseLooper = (snapshot) => {
    const data = []
            snapshot.forEach((childSnapshot)=>{
                data.push({
                    ...childSnapshot.val(),
                    id:childSnapshot.key
                })
            });
        return data;
  }
  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseVideos,
      firebaseTeams,
      firebaseLooper
  }
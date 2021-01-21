
//ADD YOUR FIREBASE LINKS

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyChtHUocTHEk0mOZO23y2wt2RP61fTYlgI",
    authDomain: "kwitter-94075.firebaseapp.com",
    databaseURL: "https://kwitter-94075-default-rtdb.firebaseio.com",
    projectId: "kwitter-94075",
    storageBucket: "kwitter-94075.appspot.com",
    messagingSenderId: "615883047709",
    appId: "1:615883047709:web:86ed078af94c4464d417f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
       });
    }

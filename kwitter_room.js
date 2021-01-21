
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyChtHUocTHEk0mOZO23y2wt2RP61fTYlgI",
      authDomain: "kwitter-94075.firebaseapp.com",
      projectId: "kwitter-94075",
      storageBucket: "kwitter-94075.appspot.com",
      messagingSenderId: "615883047709",
      appId: "1:615883047709:web:86ed078af94c4464d417f4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code


      //End code
      });});}
getData();
